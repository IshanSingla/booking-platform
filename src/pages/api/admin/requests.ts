import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  if (req.method == "GET") {
    const data = await prisma.request.findMany();
    res.status(200).json(data);
  }
  else if (req.method == "DELETE") {
    const { id }: any = req.query;
    const deletedItem = await prisma.request.delete({ where: { id } });
    res.status(200).json(deletedItem);
  }
  else {
    res.status(404).json("Not Found");
  }
}
