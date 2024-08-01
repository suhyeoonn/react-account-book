import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getFormattedDate, sumAmont } from "@/hooks/transactionHooks";
import { DailyTransaction, TransactionType } from "@/lib/types";
import { EXPENSE_TEXT_COLOR } from "@/lib/utils";
import TransactionListItem from "./transactionListItem";

type Props = {
  data: DailyTransaction;
};
export default function TransactionList({ data }: Props) {
  const { year, month, date, day } = getFormattedDate(data.date);
  return (
    <Card className="w-full">
      <CardHeader className="border-b p-3">
        <CardTitle className="font-normal">
          <div className="flex justify-between">
            <div className="flex gap-1 items-center">
              <span>{date}</span>
              <span>{day}</span>
              <span className="text-xs text-muted-foreground">
                {year}.{month}
              </span>
            </div>
            <div className="flex gap-5">
              <span className="text-blue-500 font-medium">
                {sumAmont(data.transactions, TransactionType.INCOME)}원
              </span>
              <span className={`${EXPENSE_TEXT_COLOR} font-medium`}>
                {sumAmont(data.transactions, TransactionType.EXPENSE)}원
              </span>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3">
        <ul>
          {data.transactions.map((t) => (
            <TransactionListItem key={t.id} data={t} />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
