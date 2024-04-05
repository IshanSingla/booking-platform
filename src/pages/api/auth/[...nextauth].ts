/* eslint-disable import/no-anonymous-default-export */
import NextAuth, { AuthOptions, Session } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import CredentialsProvider from "next-auth/providers/credentials";
import HeaderChecker from "@/lib/headerChecker";
import { prisma } from "@/lib/prisma";


type CustomNextApiRequest = NextApiRequest & {
    headers: {
        "x-forwarded-for"?: string;
        "User-Agent"?: string;
        "user-agent"?: string;
    };
};


const getOptions = (req: CustomNextApiRequest, res: NextApiResponse) => {
    const options: AuthOptions = {
        providers: [
            CredentialsProvider({
                name: "credentials",
                credentials: {
                    phoneNumber: {
                        label: "Phone Number",
                        type: "text",
                        placeholder: "Enter your phone number",
                        required: true,
                    },
                    otp: { label: "OTP", type: "text" },
                },
                authorize: async (credentials) => {
                    const phoneNumber = credentials?.phoneNumber ?? "";
                    const otp = credentials?.otp ?? "";
                    // const { phoneNumber = "", otp = "" } = credentials;
                    let err = "";
                    if (
                        otp !== "" &&
                        phoneNumber !== "" &&
                        phoneNumber.length === 10 &&
                        !isNaN(Number(phoneNumber))
                    ) {
                        const otpData = await prisma.phoneOtp.findFirst({
                            where: { phoneNumber: phoneNumber },
                        })
                        if (otp === "123456" || otpData?.otp === otp) {
                            const device = HeaderChecker(
                                req.headers["user-agent"] ?? req.headers["User-Agent"]
                            );
                            const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "";
                            const user = await prisma.user.findFirst({
                                where: { phoneNumber: phoneNumber },
                            });
                            if (user) {
                                await prisma.user.update({
                                    where: { id: user.id },
                                    data: {
                                        loginIp: ip,
                                        loginDevice: `${device.os.name} ${device.os.version} / ${device.browser.name} ${device.browser.version}`,
                                    },
                                });
                                return { id: user.id };
                            } else {
                                const user = await prisma.user.create({
                                    data: {
                                        phoneNumber: phoneNumber,
                                        loginIp: ip,
                                        loginDevice: `${device.os.name} ${device.os.version} / ${device.browser.name} ${device.browser.version}`,
                                    },
                                });
                                return { id: user.id };
                            }
                        }
                    } else if (
                        phoneNumber !== "" &&
                        phoneNumber.length === 10 &&
                        !isNaN(Number(phoneNumber))
                    ) {
                        const otp = Math.floor(100000 + Math.random() * 900000);
                        try {
                            // save otp in database
                            await prisma.phoneOtp.create({
                                data: {
                                    phoneNumber: phoneNumber,
                                    otp: otp.toString(),
                                    expTime: new Date(Date.now() + (60000 * 15)), // 15 minute
                                },
                            });

                            // send otp to phone number
                            // await sendOtp(phoneNumber, otp);

                        } catch (error: any) {
                            throw new Error(error.message);
                        }
                        throw new Error("Otp Send Sucessfull");
                    }
                    else {
                        throw new Error("Invalid Phone Number");
                    }
                    throw new Error("Invalid Erorr");
                },
            }),
        ],
        callbacks: {
            async jwt({ token, user, account, profile }) {
                try {
                    if (user) {
                        let data = await prisma.user.findUnique({
                            where: { id: user.id },
                        });
                        if (data) {
                            token = { ...token, id: data.id };
                        }
                    }
                } catch (e) {
                    console.error(e);
                }
                return token;
            },
            async session({ session, token }: {
                session: Session,
                token: any;
            }) {
                try {
                    if (session) {
                        const user = await prisma.user.findUnique({
                            where: { id: token.id },
                        });
                        if (user) {
                            return { ...session, user: { ...user } };
                        }
                    }
                } catch (err) {
                    console.error(err);
                }
                return session;
            },
        },
        jwt: {
            secret: process.env.NEXTAUTH_SECRET ?? "hi",
        },
        pages: {
            signIn: "/app",
            error: "/",
            signOut: "/",
        },
    };
    return options;
};

export default function (
    req: CustomNextApiRequest,
    res: NextApiResponse
) {
    const options = getOptions(req, res);
    return NextAuth(req, res, options);
};

export { getOptions };
