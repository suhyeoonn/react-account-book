"use client";

import { TransactionEntryForm } from "@/components/transaction/transactionEntryForm";
import { TransactionForm, TransactionType } from "@/lib/types";

export default function TransactionEdit() {
  const data = {
    id: 1,
    type: TransactionType.INCOME,
    date: new Date("2024-06-01"),
    category: 1,
    content: "content",
    amount: 6000000,
  };
  const { category, amount } = data;

  const updateData = (data: TransactionForm) => {
    alert("updateData");
    console.log(data);
  };

  return (
    <TransactionEntryForm
      data={{
        ...data,
        category: "" + category,
        amount: "" + amount,
      }}
      handleSubmit={updateData}
    />
  );
}
