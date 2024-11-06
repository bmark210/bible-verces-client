import { prisma } from "../../client";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
        try {
          const contexts = await prisma.context.findMany();
          return res.status(200).json(contexts);
        } catch (error) {
          console.error("Error fetching contexts:", error);
          return res.status(500).json({ error: "Failed to fetch contexts" });
        }
      }
    
  if (req.method === "POST") {
    try {
      const user = await prisma.context.create({
        data: req.body,
      });
      return res.status(201).json(user);
    } catch (error) {
      console.error("Error creating context:", error);
      return res.status(500).json({ error: "Failed to create context" });
    }
  }

  return res.status(405).end();
};

export default handler;
