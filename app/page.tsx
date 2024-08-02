import { Button } from "@/components/ui/button";
import TransactionList from "@/components/transaction/transactionList";
import { getFormattedDate } from "@/hooks/transactionHooks";
import { transationResponse } from "@/lib/placeholder-data";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import MonthlySummary from "@/components/transaction/monthlySummary";

export default function Home() {
  const { total, dailyData } = transationResponse;
  const { year, month } = getFormattedDate(
    new Date(transationResponse.year, transationResponse.month - 1, 1)
  );

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
        <MonthlySummary total={total} />

        {dailyData.map((g, i) => (
          <TransactionList key={i} data={g} />
        ))}
      </div>
    </main>
  );
}
