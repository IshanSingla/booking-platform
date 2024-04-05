import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  if (req.method == "POST") {
    // const formData: FormData = req.body;
    // const createdItem = await prisma.request.create({ data: formData });
    res.status(201).json("Request created");
  }
  else {
    res.status(404).json("Not Found");
  }
}
