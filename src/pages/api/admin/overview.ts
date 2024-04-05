import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma"
import { AdminOverviewProps } from "@/types/responseTypes";

type FormData = {
  name: string;
  description: string;
  image: string;
};

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
        role: "ADMIN",
      },
    });
    const data = { category, organization, request, user, admins };
    res.status(200).json(data);
  }
  else {
    res.status(404).json("Not Found");
  }
}
