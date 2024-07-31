import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Transaction, TransactionGroup, TransactionType } from "@/lib/types";

type Props = {
  data: TransactionGroup;
};
export default function TransactionList({ data }: Props) {
  const expenseTextColor = "text-red-500";
  const incomeTextColor = "text-blue-500";

  const getColorByType = (type: TransactionType) => {
    return type === TransactionType.INCOME ? incomeTextColor : expenseTextColor;
  };

  const sumAmont = (data: Transaction[], type: TransactionType) => {
    return data.reduce(
      (total, d) => (total += d.type === type ? d.amount : 0),
      0
    );
  };

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
              <span className="text-blue-500 font-medium">
                {sumAmont(data.transactions, TransactionType.INCOME)}원
              </span>
              <span className={`${expenseTextColor} font-medium`}>
                {sumAmont(data.transactions, TransactionType.EXPENSE)}원
              </span>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3">
        <ul>
          {data.transactions.map((t) => (
            <li key={t.id} className="grid grid-cols-3 p-2">
              <span className="text-sm text-muted-foreground">
                {t.category}
              </span>
              <span className="font-medium leading-none">{t.content}</span>
              <span className={`${getColorByType(t.type)} text-right`}>
                {t.amount}원
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
