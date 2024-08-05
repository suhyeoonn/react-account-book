"use client";

import MonthlySummary from "@/components/transaction/monthlySummary";
import { useEffect, useState } from "react";
import { TransactionResponse } from "@/lib/types";
import TransactionList from "@/components/transaction/transactionList";
import { monthlyTransactions } from "@/lib/placeholder-data";
import { Dayjs } from "dayjs";

export default function MonthlyTransaction({ date }: { date: Dayjs }) {
  const [data, setData] = useState<TransactionResponse>();
  useEffect(() => {
    setData(
      monthlyTransactions.find(
        (t) => t.year === date.year() && t.month === date.month() + 1
      )?.data || undefined
    );
  }, [date]);

  if (!data) return <p>거래 내역이 없습니다.</p>;

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
