"use client";

import MonthlySummary from "@/components/transaction/monthlySummary";
import { useContext, useEffect, useState } from "react";
import { TransactionResponse } from "@/lib/types";
import TransactionList from "@/components/transaction/transactionList";
import axios from "axios";
import { TransactionContext } from "@/lib/context/TransactionProvider";
import SkeletonTransaction from "./SkeletonTransaction";

export default function MonthlyTransaction() {
  const { date } = useContext(TransactionContext);
  const [data, setData] = useState<TransactionResponse>();

  useEffect(() => {
    (async () => {
      const { data } = await axios("/api/transactions", {
        params: { year: date.year(), month: date.month() },
      });
      setData(data);
    })();
  }, [date]);

  if (!data) return <SkeletonTransaction />;

  if (Object.keys(data.dailyData).length === 0)
    return <p>거래 내역이 없습니다.</p>;

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
