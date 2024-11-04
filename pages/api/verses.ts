import { prisma } from "../../client";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const verses = await prisma.verse.findMany();
    return res.status(200).json(verses);
  }

  if (req.method === "POST") {
    try {
      const user = await prisma.verse.create({
        data: req.body,
      });
      return res.status(201).json(user);
    } catch (error) {
      console.error("Error creating verse:", error);
      return res.status(500).json({ error: "Failed to create verse" });
    }
  }

  return res.status(405).end();
};

export default handler;
