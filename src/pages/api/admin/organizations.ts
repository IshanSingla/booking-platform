import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma"

type FormData = {
  name: string;
  description: string;
  image: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  if (req.method == "GET") {
    const data = await prisma.organization.findMany({
      include: {
        extracurricular: true,
        infrastructure: true,
        timings: true,
        affordability: true,
      },
    });
    res.status(200).json(data);
  }
  else if (req.method == "PUT") {
    const { id }: any = req.query;
    const formData: FormData = req.body;
    const updatedItem = await prisma.organization.update({
      where: { id },
      data: {
        isVerified: req.body.isVerified,
      }
    });
    res.status(200).json("Updated Successfully");
  }
  else {
    res.status(404).json("Not Found");
  }
}
