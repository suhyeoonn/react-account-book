"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TransactionMonthlyTotal } from "@/lib/types";
import { INCOME_TEXT_COLOR } from "@/lib/utils";
import CurrencyWon from "../ui/currencyInputWon";

export default function MonthlySummary({
  total,
}: {
  total: TransactionMonthlyTotal;
}) {
  const { income, expense } = total;
  return (
    <div className="grid grid-cols-3 w-full gap-5 text-center">
      <Card>
        <CardHeader className="p-2 tracking-tight text-sm font-medium">
          수입
        </CardHeader>
        <CardContent className={`${INCOME_TEXT_COLOR} p-2 text-xl font-bold`}>
          <CurrencyWon value={income} displayType="text" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="p-2 tracking-tight text-sm font-medium">
          지출
        </CardHeader>
        <CardContent className="text-expense p-2 text-xl font-bold">
          <CurrencyWon value={expense} displayType="text" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="p-2 tracking-tight text-sm font-medium">
          합계
        </CardHeader>
        <CardContent className="p-2 text-xl font-bold">
          <CurrencyWon value={income - expense} displayType="text" />
        </CardContent>
      </Card>
    </div>
  );
}
