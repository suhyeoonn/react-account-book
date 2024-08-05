"use client";

import DateController from "@/components/transaction/dateController";
import MonthlyTransaction from "@/components/transaction/monthlyTransaction";
import dayjs from "dayjs";
import { useState } from "react";

export default function Home() {
  const [date, setDate] = useState(dayjs());

  const handleMonth = (value: number) => {
    setDate(date.add(value, "M"));
  };

  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-5 w-full  bg-gray-50">
      <div className="max-w-screen-lg w-full space-y-5">
        <DateController changeMonth={handleMonth} date={date} />
        <MonthlyTransaction date={date} />
      </div>
    </main>
  );
}
