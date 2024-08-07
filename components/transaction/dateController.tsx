import { Button } from "@/components/ui/button";
import { getFormattedDate } from "@/hooks/transactionHooks";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Dayjs } from "dayjs";

export default function DateController({
  changeMonth,
  date,
}: {
  changeMonth: (month: number) => void;
  date: Dayjs;
}) {
  const { year, month } = getFormattedDate(date);
  return (
    <div className="flex items-center">
      <Button variant="ghost" onClick={() => changeMonth(-1)}>
        <ChevronLeftIcon />
      </Button>
      <span className="font-semibold">
        {year}년 {month}월
      </span>
      <Button variant="ghost" onClick={() => changeMonth(1)}>
        <ChevronRightIcon />
      </Button>
    </div>
  );
}
