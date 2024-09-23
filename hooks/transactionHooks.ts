import { Transaction, TransactionType } from "@/lib/types";
import { Dayjs } from "dayjs";
import "dayjs/locale/ko";

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
