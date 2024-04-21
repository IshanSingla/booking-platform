import type { NextApiResponse } from "next";
import { prisma } from "@/lib/prisma"
import { CustomRquest } from "@/lib/authChecker";
import { OrganizationFormData } from "@/types/responseTypes";


export default async function handler(
    req: CustomRquest,
    res: NextApiResponse<any>,
) {

    if (req.method == "PUT") {
        const data = req.org;
        const formData: OrganizationFormData = req.body;
        const updatedItem = await prisma.organization.update({
            where: { id: data?.id },
            data: formData,
        });
        res.status(200).json("Organization updated successfully");
    } else {
        res.status(405).json("Method not allowed");
    }
}
