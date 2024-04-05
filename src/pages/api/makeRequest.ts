import type { NextApiRequest, NextApiResponse } from "next";
import {prisma} from "@/lib/prisma"
type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method=="GET"){
    // prisma.category.findMany()
    res.status(200).json({ name: "John Doe" });
  }
  else if (req.method=="POST"){
    res.status(200).json({ name: "John Doe" });
  }
  else{
    // res.status(404).json({
    //     message: "Not Found"
    // });
  }
}
