import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma"
import { CustomRquest, verifyAuth } from "@/lib/authChecker";

async function handler(
  req: CustomRquest,
  res: NextApiResponse<any>,
) {
  if (req.method == "GET") {
    const { categoryId }: any = req.query
    if (!categoryId) {
      res.status(400).json("Category Id is required");
    }

    const data = await prisma.organization.findMany({
      where: {
        categoryId: categoryId,
        isVerified: true
      }
    });
    res.status(200).json(data);
  }
  if (req.method == "POST") {
    const { orgId }: any = req.query
    if (!orgId) {
      res.status(400).json("Organization Id is required");
    }
    const data = await prisma.request.create({
      data: {
        organizationId: orgId as string,
        userId: req.user?.id as string,
      }
    });

    res.status(201).json("Request created");
  }
  else {
    res.status(404).json("Not Found");
  }
}
export default verifyAuth(handler)