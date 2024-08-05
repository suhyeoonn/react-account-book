import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import MonthlyTransaction from "@/components/transaction/monthlyTransaction";

export default function Home() {
  let year = 2024;
  let month = 7;

  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-5 w-full  bg-gray-50">
      <div className="max-w-screen-lg w-full space-y-5">
        <div className="flex justify-between w-full items-center">
          <div className="flex items-center">
            <Button variant="ghost">
              <ChevronLeftIcon />
            </Button>
            <span className="font-semibold">
              {year}년 {month}월
            </span>
            <Button variant="ghost">
              <ChevronRightIcon />
            </Button>
          </div>
          <Button asChild>
            <Link href="/transaction/add">Add</Link>
          </Button>
        </div>
        <MonthlyTransaction year={year} month={month} />
      </div>
    </main>
  );
}
