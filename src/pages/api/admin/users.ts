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
    await prisma.user.update({
      where: { id },
      data: formData,
    });
    res.status(200).send("Updated Successfully");
  }
  else if (req.method == "DELETE") {
    const { id }: any = req.query;
    await prisma.user.delete({ where: { id } });
    res.status(200).send("Deleted Successfully");
  }
  else {
    res.status(404).send("Not Found");
  }
}
