import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
        <Card className="w-full">
          <CardHeader className="border-b p-3">
            <CardTitle className="font-normal">
              <div className="flex justify-between">
                <div className="flex gap-1 items-center">
                  <span>01</span>
                  <span>금요일</span>
                  <span className="text-xs text-muted-foreground">2023.12</span>
                </div>
                <div className="flex gap-5">
                  <span className="text-blue-500 font-medium">0,000,000원</span>
                  <span className={`${expenseTextColor} font-medium`}>
                    0,000,000원
                  </span>
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-3">
            <ul>
              <li className="grid grid-cols-3 p-2">
                <span className="text-sm text-muted-foreground">category</span>
                <span className="font-medium leading-none">content</span>
                <span className={`${incomeTextColor} text-right`}>0,000원</span>
              </li>
              <li className="grid grid-cols-3 p-2">
                <span className="text-sm text-muted-foreground">category</span>
                <span className="font-medium leading-none">content</span>
                <span className={`${incomeTextColor} text-right`}>0,000원</span>
              </li>
              <li className="grid grid-cols-3 p-2">
                <span className="text-sm text-muted-foreground">category</span>
                <span className="font-medium leading-none">content</span>
                <span className={`${incomeTextColor} text-right`}>0,000원</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader className="border-b p-3">
            <CardTitle className="font-normal">
              <div className="flex justify-between">
                <div className="flex gap-1 items-center">
                  <span>01</span>
                  <span>금요일</span>
                  <span className="text-xs text-muted-foreground">2023.12</span>
                </div>
                <div className="flex gap-5">
                  <span className={`${incomeTextColor} font-medium`}>
                    0,000,000원
                  </span>
                  <span className={`${expenseTextColor} font-medium`}>
                    0,000,000원
                  </span>
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-3">
            <ul>
              <li className="grid grid-cols-3 p-2">
                <span className="text-sm text-muted-foreground">category</span>
                <span className="font-medium leading-none">content</span>
                <span className={`${incomeTextColor} text-right`}>0,000원</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
