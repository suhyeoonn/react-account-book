"use client";

import { TransactionEntryForm } from "@/components/transaction/transactionEntryForm";

export default function TransactionEntry() {
  const createData = (data) => {
    alert("createData");
    console.log(data);
  };
  return <TransactionEntryForm handleSubmit={createData} />;
}
