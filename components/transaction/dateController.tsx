import { Button } from "@/components/ui/button";
import { getFormattedDate } from "@/hooks/transactionHooks";
import { TransactionContext } from "@/lib/context/TransactionProvider";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useContext } from "react";

export default function DateController() {
  const { date, changeMonth } = useContext(TransactionContext);
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
