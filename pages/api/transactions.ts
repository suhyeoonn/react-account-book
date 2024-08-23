import prisma from "@/lib/prisma";
import { TransactionResponse } from "@/lib/types";
import { Transaction } from "@prisma/client";
import dayjs from "dayjs";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TransactionResponse>
) {
  const { year, month } = req.query;
  if (!year || !month) {
    throw new Error("no parameters");
  }

  const startDate = new Date(+year, +month, 1);
  const data = await prisma.transaction.findMany({
    where: {
      date: {
        gte: startDate,
        lte: dayjs(startDate).add(1, "M").subtract(1, "d").toDate(),
      },
    },
  });

  const dataMap = new Map();

  data.forEach((d) => {
    const date = dayjs(d.date).format("YYYY-MM-DD");
    if (!dataMap.has(date)) {
      dataMap.set(date, [getTransaction(d)]);
      return;
    }
    const mapDataByDate = dataMap.get(date);
    dataMap.set(date, [...mapDataByDate, getTransaction(d)]);
  });

  return res.status(200).json({
    total: {
      income: 0,
      expense: 0,
    },
    dailyData: Object.fromEntries(dataMap),
  });
}

function getTransaction(d: Transaction) {
  return { ...d, id: d.id.toString() };
}
