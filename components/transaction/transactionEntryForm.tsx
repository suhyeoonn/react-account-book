"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import CategorySelect from "../ui/CategorySelect";
import { useState } from "react";
import { TransactionType } from "@/lib/types";
import { DatePicker } from "../ui/datePicker";
import TransactionTypeToggle from "./transactionTypeToggle";
import CurrencyWon from "../ui/currencyInputWon";

const formSchema = z.object({
  account: z.string().min(1, {
    message: "금액을 입력하세요.",
  }),
  category: z.string().length(1, {
    message: "분류를 선택하세요.",
  }),
  type: z.number(),
  date: z.date({
    message: "ss",
  }),
  content: z.string(),
});

export function TransactionEntryForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      account: "",
      category: "",
      type: TransactionType.EXPENSE,
      date: new Date(),
      content: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const [type, setType] = useState(TransactionType.EXPENSE);
  const handleType = (value: string) => {
    setType(+value);
    form.setValue("type", +value);
  };

  const handleCategory = (value: string) => {
    form.setValue("category", value);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-7 w-96"
      >
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <TransactionTypeToggle
                  value={field.value}
                  onChange={handleType}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>날짜</FormLabel>
              <FormControl>
                <DatePicker />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>분류</FormLabel>
              <FormControl>
                <CategorySelect
                  type={type}
                  value={field.value}
                  onValueChange={handleCategory}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="account"
          render={({ field }) => (
            <FormItem>
              <FormLabel>금액</FormLabel>
              <FormControl>
                <CurrencyWon {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>내용</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex w-full gap-3">
          <Button type="submit" className="flex-1">
            Submit
          </Button>
          <Button type="button" variant="outline" asChild>
            <Link href="/">Cancel</Link>
          </Button>
        </div>
      </form>
    </Form>
  );
}
