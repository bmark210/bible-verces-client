import { prisma } from "../../client";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const users = await prisma.user.findMany();
    return res.status(200).json(users);
  }

  // if (req.method === "POST") {
  //   const { name, email } = req.body;
  //   const user = await prisma.user.create({
  //     data: { name, email },
  //   });
  //   return res.status(201).json(user);
  // }

  return res.status(405).end();
};

export default handler;
 