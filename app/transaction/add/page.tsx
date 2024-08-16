"use client";

import { TransactionEntryForm } from "@/components/transaction/transactionEntryForm";
import { TransactionForm } from "@/lib/types";

export default function TransactionEntry() {
  const createData = (data: TransactionForm) => {
    alert("createData");
    console.log(data);
  };
  return <TransactionEntryForm handleSubmit={createData} />;
}
