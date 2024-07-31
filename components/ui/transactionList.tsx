import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TransactionList() {
  const expenseTextColor = "text-red-500";
  const incomeTextColor = "text-blue-500";

  return (
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
  );
}
