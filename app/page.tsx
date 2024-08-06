"use client";

import DateController from "@/components/transaction/dateController";
import MonthlyTransaction from "@/components/transaction/monthlyTransaction";
import { Button } from "@/components/ui/button";
import { GearIcon } from "@radix-ui/react-icons";
import dayjs from "dayjs";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [date, setDate] = useState(dayjs());

  const handleMonth = (value: number) => {
    setDate(date.add(value, "M"));
  };

  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-5 w-full  bg-gray-50">
      <div className="max-w-screen-lg w-full space-y-5">
        <div className="flex justify-between w-full items-center">
          <DateController changeMonth={handleMonth} date={date} />
          <div className="flex justify-center space-x-2">
            <Button variant="outline" size="icon" asChild>
              <Link href="/category">
                <GearIcon />
              </Link>
            </Button>
            <Button asChild>
              <Link href="/transaction/add">Add</Link>
            </Button>
          </div>
        </div>
        <MonthlyTransaction date={date} />
      </div>
    </main>
  );
}
