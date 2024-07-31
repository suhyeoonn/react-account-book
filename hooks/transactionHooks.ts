import { Transaction, TransactionType } from "@/lib/types";
import { EXPENSE_TEXT_COLOR, INCOME_TEXT_COLOR } from "@/lib/utils";

export const getColorByType = (type: TransactionType) => {
  return type === TransactionType.INCOME
    ? INCOME_TEXT_COLOR
    : EXPENSE_TEXT_COLOR;
};

export const sumAmont = (data: Transaction[], type: TransactionType) => {
  return data.reduce(
    (total, d) => (total += d.type === type ? d.amount : 0),
    0
  );
};
