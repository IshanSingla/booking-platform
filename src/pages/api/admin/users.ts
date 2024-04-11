import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma"

type FormData = {
  disabled: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  if (req.method == "GET") {
    const data = await prisma.user.findMany();
    res.status(200).json(data);
  }
  else if (req.method == "PUT") {
    const { id }: any = req.query;
    const formData: FormData = req.body;
    const updatedItem = await prisma.user.update({
      where: { id },
      data: formData,
    });
    res.status(200).json(updatedItem);
  }
  else if (req.method == "DELETE") {
    const { id }: any = req.query;
    const deletedItem = await prisma.user.delete({ where: { id } });
    res.status(200).json(deletedItem);
  }
  else {
    res.status(404).json("Not Found");
  }
}
