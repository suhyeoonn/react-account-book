import { Transaction, TransactionType } from "@/lib/types";
import { EXPENSE_TEXT_COLOR, INCOME_TEXT_COLOR } from "@/lib/utils";
import { Dayjs } from "dayjs";
import "dayjs/locale/ko";

export const getColorByType = (type: TransactionType) => {
  return type === TransactionType.INCOME
    ? INCOME_TEXT_COLOR
    : EXPENSE_TEXT_COLOR;
};

export const sumAmount = (data: Transaction[], type: TransactionType) => {
  return data.reduce(
    (total, d) => (total += d.type === type ? d.amount : 0),
    0
  );
};

export const getFormattedDate = (date: Dayjs) => {
  return {
    year: date.year(),
    month: date.format("MM"),
    date: date.format("DD"),
    day: date.locale("ko").format("dddd"),
  };
};
