import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import TransactionList from "@/components/transaction/transactionList";
import { convertToWon, getFormattedDate } from "@/hooks/transactionHooks";
import { transationResponse } from "@/lib/placeholder-data";
import { EXPENSE_TEXT_COLOR, INCOME_TEXT_COLOR } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

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
        <div className="grid grid-cols-3 w-full gap-5 text-center">
          <Card>
            <CardHeader className="p-2 tracking-tight text-sm font-medium">
              수입
            </CardHeader>
            <CardContent
              className={`${INCOME_TEXT_COLOR} p-2 text-xl font-bold`}
            >
              {convertToWon(total.income)}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="p-2 tracking-tight text-sm font-medium">
              지출
            </CardHeader>
            <CardContent
              className={`${EXPENSE_TEXT_COLOR} p-2 text-xl font-bold`}
            >
              {convertToWon(total.expense)}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="p-2 tracking-tight text-sm font-medium">
              합계
            </CardHeader>
            <CardContent className="p-2 text-xl font-bold">
              {convertToWon(total.income - total.expense)}
            </CardContent>
          </Card>
        </div>

        {dailyData.map((g, i) => (
          <TransactionList key={i} data={g} />
        ))}
      </div>
    </main>
  );
}
