import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TransactionList from "@/components/ui/transactionList";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  const expenseTextColor = "text-red-500";
  const incomeTextColor = "text-blue-500";

  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-5 w-full  bg-gray-50">
      <div className="max-w-screen-lg w-full space-y-5">
        <div className="flex justify-between w-full items-center">
          <div className="flex items-center">
            <Button variant="ghost">
              <ChevronLeftIcon />
            </Button>
            <span className="font-semibold">0000년 00월</span>
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
            <CardContent className={`${incomeTextColor} p-2 text-xl font-bold`}>
              0,000,000원
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="p-2 tracking-tight text-sm font-medium">
              지출
            </CardHeader>
            <CardContent
              className={`${expenseTextColor} p-2 text-xl font-bold`}
            >
              0,000,000원
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="p-2 tracking-tight text-sm font-medium">
              합계
            </CardHeader>
            <CardContent className="p-2 text-xl font-bold">
              0,000,000원
            </CardContent>
          </Card>
        </div>
        <TransactionList />
        <TransactionList />
      </div>
    </main>
  );
}
