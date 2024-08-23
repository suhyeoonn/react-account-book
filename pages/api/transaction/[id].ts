import prisma from "@/lib/prisma";
import { TransactionResponse } from "@/lib/types";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TransactionResponse>
) {
  const id = req.query.id as string;

  if (!id) {
    throw new Error("no params");
  }

  await prisma.transaction.delete({
    where: {
      id: BigInt(id),
    },
  });

  res.status(200);
}
