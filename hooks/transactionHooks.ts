import { Transaction, TransactionType } from "@/lib/types";
import { EXPENSE_TEXT_COLOR, INCOME_TEXT_COLOR } from "@/lib/utils";
import dayjs from "dayjs";
import "dayjs/locale/ko";

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

export const getFormattedDate = (date: Date) => {
  const dayjsDate = dayjs(date);
  return {
    year: dayjsDate.year(),
    month: dayjsDate.format("MM"),
    date: dayjsDate.format("DD"),
    day: dayjsDate.locale("ko").format("ddd") + "요일",
  };
};

export const convertToWon = (number: number) => {
  return number.toLocaleString("ko-KR") + "원";
};
