import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma"
import { CustomRquest, verifyAuth } from "@/lib/authChecker";

async function handler(
    req: CustomRquest,
    res: NextApiResponse<any>,
) {
    if (req.method == "PUT") {
        const { isStudent, isOrganization }: any = req.query
        if (isStudent) {
            await prisma.user.update({
                where: { id: req?.user?.id },
                data: {
                    name: req.body.name,
                    role: "STUDENT",
                },
            });
            res.status(200).json("Success");
        } else if (isOrganization) {
            await prisma.user.update({
                where: { id: req?.user?.id },
                data: {
                    role: "ORGANIZATION",
                },
            });
            const data = req.body;
            console.log(data);
            await prisma.organization.create({
                data: {
                    name: data.name,
                    description: data?.description,
                    logo: data?.logo,
                    displayName: data?.displayName,
                    email: data?.email,
                    phoneNumber: data?.phoneNumber,
                    address: data?.address,
                    pincode: data?.pincode,
                    website: data?.website,
                    user: {
                        connect: {
                            id: req?.user?.id,
                        },
                    },
                },
            });
            res.status(200).json("Success");
        }
    }
    else {
        res.status(404).json("Not Found");
    }
}

export default verifyAuth(handler)