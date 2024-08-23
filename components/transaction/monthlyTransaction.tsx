"use client";

import MonthlySummary from "@/components/transaction/monthlySummary";
import { useEffect, useState } from "react";
import { TransactionResponse } from "@/lib/types";
import TransactionList from "@/components/transaction/transactionList";
import { Dayjs } from "dayjs";
import axios from "axios";

export default function MonthlyTransaction({ date }: { date: Dayjs }) {
  const [data, setData] = useState<TransactionResponse>();
  useEffect(() => {
    (async () => {
      const { data } = await axios("/api/transactions", {
        params: { year: date.year(), month: date.month() },
      });
      console.log(data);
      setData(data);
    })();
  }, [date]);

  if (!data) return <p>거래 내역이 없습니다.</p>;

  const { total, dailyData } = data;

  return (
    <>
      <MonthlySummary total={total} />

      {Object.keys(dailyData).map((key, i) => (
        <TransactionList
          key={i}
          dateString={key}
          transactions={dailyData[key]}
        />
      ))}
    </>
  );
}
