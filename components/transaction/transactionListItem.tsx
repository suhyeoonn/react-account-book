import { getColorByType } from "@/hooks/transactionHooks";
import { Transaction } from "@/lib/types";

export default function TransactionListItem({ data }: { data: Transaction }) {
  return (
    <li className="grid grid-cols-3 p-2">
      <span className="text-sm text-muted-foreground">{data.category}</span>
      <span className="font-medium leading-none">{data.content}</span>
      <span className={`${getColorByType(data.type)} text-right`}>
        {data.amount}원
      </span>
    </li>
  );
}
