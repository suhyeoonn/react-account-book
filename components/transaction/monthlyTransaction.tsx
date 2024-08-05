"use client";

import MonthlySummary from "@/components/transaction/monthlySummary";
import { useEffect, useState } from "react";
import { TransactionResponse } from "@/lib/types";
import TransactionList from "@/components/transaction/transactionList";
import { monthlyTransactions } from "@/lib/placeholder-data";

export default function MonthlyTransaction({
  year,
  month,
}: {
  year: number;
  month: number;
}) {
  const [data, setData] = useState<TransactionResponse>();
  useEffect(() => {
    setData(
      monthlyTransactions.find((t) => t.year === year && t.month === month)
        ?.data || undefined
    );
  }, [year, month]);

  if (!data) return null;

  const { total, dailyData } = data;

  return (
    <>
      <MonthlySummary total={total} />

      {dailyData.map((g, i) => (
        <TransactionList key={i} data={g} />
      ))}
    </>
  );
}
