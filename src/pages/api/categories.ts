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
      const data = await prisma.category.findMany();
      res.status(200).json(data);
   }
   else {
      res.status(404).json("Not Found");
   }
}
