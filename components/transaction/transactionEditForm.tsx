"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import CategorySelect from "../ui/CategorySelect";
import { useState } from "react";
import { TransactionEditFormType } from "@/lib/types";
import TransactionTypeToggle from "./transactionTypeToggle";
import CurrencyWon from "../ui/currencyInputWon";
import { Label } from "@radix-ui/react-label";
import dayjs from "dayjs";

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

export function TransactionEditForm({
  data,
  handleSubmit,
}: {
  data: TransactionEditFormType;
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
            defaultValue={dayjs(data.date).format("YYYY-MM-DD")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label>분류</Label>
          <CategorySelect type={type} defaultValue={data.categoryId + ""} />
        </div>
        <div className="flex flex-col gap-2">
          <Label>금액</Label>
          <CurrencyWon name="amount" defaultValue={data.amount} />
        </div>
        <div className="flex flex-col gap-2">
          <Label>내용</Label>
          <Input name="content" defaultValue={data.content + ""} />
        </div>
        <div className="flex w-full gap-3">
          <Button type="submit" className="flex-1">
            Submit
          </Button>
          <Button type="button" variant="outline" asChild>
            <Link href="/">Cancel</Link>
          </Button>
        </div>
      </form>
    </div>
  );
}
