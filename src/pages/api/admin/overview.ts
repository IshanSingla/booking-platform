import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma"
import { AdminOverviewProps } from "@/types/responseTypes";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AdminOverviewProps | string>,
) {
  if (req.method == "GET") {
    const category = await prisma.category.count();
    const organization = await prisma.organization.count();
    const request = await prisma.request.count();
    const user = await prisma.user.count();
    const admins = await prisma.user.findMany({
      where: {
        role: {
          in: ["ADMIN", "SUPERADMIN"],
        }
      },
    });
    const data = { category, organization, request, user, admins };
    res.status(200).json(data);
  }
  if (req.method == "POST") {
    const admins = await prisma.user.create({
      data: {
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        role: "ADMIN",
      },
    });
    res.status(200).json("Admin Created");

  }
  else {
    res.status(404).json("Not Found");
  }
}
