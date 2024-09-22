"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import CategorySelect from "../ui/CategorySelect";
import { useState } from "react";
import { TransactionForm, TransactionType } from "@/lib/types";
import { DatePicker } from "../ui/datePicker";
import TransactionTypeToggle from "./transactionTypeToggle";
import CurrencyWon from "../ui/currencyInputWon";
import { Label } from "@radix-ui/react-label";

// const formSchema = z.object({
//   amount: z.string().min(1, {
//     message: "금액을 입력하세요.",
//   }),
//   category: z.string().length(1, {
//     message: "분류를 선택하세요.",
//   }),
//   type: z.number(),
//   date: z.date({
//     message: "ss",
//   }),
//   content: z.string(),
// });

export function TransactionEntryForm({
  data = {
    id: null,
    amount: "",
    categoryId: "",
    type: TransactionType.EXPENSE,
    date: new Date(),
    content: "",
  },
  handleSubmit,
}: {
  data?: TransactionForm;
  handleSubmit: (form: FormData) => void;
}) {
  const [type, setType] = useState(data.type);
  const handleType = (value: string) => {
    setType(+value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form
        action={handleSubmit}
        className="flex flex-col gap-7 w-[30rem] bg-white p-10 border rounded-xl shadow"
      >
        <TransactionTypeToggle value={type} onChange={handleType} />
        <div className="flex flex-col gap-2">
          <Label>날짜</Label>
          {/* <DatePicker id="date" /> */}
          <Input
            type="date"
            id="date"
            name="date"
            defaultValue={new Date().toISOString().split("T")[0]}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label>분류</Label>
          <CategorySelect type={type} />
        </div>
        <div className="flex flex-col gap-2">
          <Label>금액</Label>
          <CurrencyWon name="amount" />
        </div>
        <div className="flex flex-col gap-2">
          <Label>내용</Label>
          <Input name="content" />
        </div>
        <div className="flex w-full gap-3">
          <Button type="submit" className="flex-1">
            Save
          </Button>
          <Button type="button" variant="outline" asChild>
            <Link href="/">Cancel</Link>
          </Button>
        </div>
      </form>
    </div>
  );
}
