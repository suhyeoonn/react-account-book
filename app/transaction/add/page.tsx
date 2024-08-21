"use client";

import { TransactionEntryForm } from "@/components/transaction/transactionEntryForm";
import { addTransaction } from "@/lib/actions";

export default function TransactionEntry() {
  return <TransactionEntryForm handleSubmit={addTransaction} />;
}
