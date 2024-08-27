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
  const endDate = dayjs(startDate).add(1, "M").subtract(1, "d").toDate();

  const data = await findTransactions(startDate, endDate);

  const [income, expense] = await calculateTotal(startDate, endDate);

  return res.status(200).json({
    total: {
      income: income._sum.amount || 0,
      expense: expense._sum.amount || 0,
    },
    dailyData: groupTransactionsByDate(data),
  });
}

function groupTransactionsByDate(data: Transaction[]) {
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
  return Object.fromEntries(dataMap);
}

async function findTransactions(startDate: Date, endDate: Date) {
  const data = await prisma.transaction.findMany({
    include: {
      category: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    where: {
      date: {
        gte: startDate,
        lte: endDate,
      },
    },
  });
  return data;
}

function getTransaction(d: Transaction) {
  return { ...d, id: d.id.toString() };
}

async function calculateTotal(startDate: Date, endDate: Date) {
  return await prisma.transaction.groupBy({
    by: ["type"],
    _sum: {
      amount: true,
    },
    where: {
      date: {
        gte: startDate,
        lte: endDate,
      },
    },
    orderBy: {
      type: "asc",
    },
  });
}
