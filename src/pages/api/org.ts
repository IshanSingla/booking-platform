import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  if (req.method == "GET") {
    const { categoryId }: any = req.query
    if (!categoryId) {
      res.status(400).json("Category Id is required");
    }

    const data = await prisma.organization.findMany({
      where: {
        categoryId: categoryId
      }
    });
    res.status(200).json(data);
  }
  if (req.method == "POST") {
    // const formData: FormData = req.body;
    // const createdItem = await prisma.request.create({ data: formData });
    res.status(201).json("Request created");
  }
  else {
    res.status(404).json("Not Found");
  }
}
