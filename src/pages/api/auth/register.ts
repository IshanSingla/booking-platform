import type { NextApiResponse } from "next";
import { prisma } from "@/lib/prisma"
import { CustomRquest, verifyAuth } from "@/lib/authChecker";
import { OrganizationFormData } from "@/types/responseTypes";

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
            const data: OrganizationFormData = req.body;
            await prisma.user.update({
                where: { id: req?.user?.id },
                data: {
                    name: data.orgName,
                    role: "ORGANIZATION",
                },
            });
            const extracurricular = await prisma.extracurricular.create({
                data: {
                    sports: data.sports,
                    arts: data.arts,
                    music: data.music,
                    debate: data.debate,
                    community: data.community,

                }
            });
            const infrastructure = await prisma.infrastructure.create({
                data: {
                    smartClass: data.smartClass,
                    library: data.library,
                    laboratories: data.laboratories,
                    computerLab: data.computerLab,
                    playground: data.playground,

                }
            });
            const timings = await prisma.timing.create({
                data: {
                    startTime: data.startTime,
                    endTime: data.endTime,
                }
            });
            const fees = await prisma.affordability.create({
                data: {
                    admissionFee: data.admissionFee,
                    monthlyFee: data.monthlyFee,
                    scholarships: false,
                }
            });


            const organization = await prisma.organization.create({
                data: {
                    userId: req?.user?.id,
                    orgName: data.orgName,
                    boardName: data.boardName,
                    affiliationNumber: data.affiliationNumber,
                    pincode: data.pincode,
                    phoneNumber: data.phoneNumber,
                    email: data.email,
                    passPercentage: data.passPercentage,
                    teacherStudentRatio: data.teacherStudentRatio,
                    transportFacility: data.transportFacility,
                    address: data.address,
                    isVerified: false,
                    extracurricularId: extracurricular.id,
                    infrastructureId: infrastructure.id,
                    timingId: timings.id,
                    affordabilityId: fees.id,
                    categoryId: data.categoryId,
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