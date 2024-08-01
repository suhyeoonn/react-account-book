import { getColorByType } from "@/hooks/transactionHooks";
import { Transaction } from "@/lib/types";
import { Cross2Icon } from "@radix-ui/react-icons";

export default function TransactionListItem({ data }: { data: Transaction }) {
  return (
    <li className="grid grid-cols-[auto_1fr_1fr_1fr] py-2 gap-2 items-center">
      <span className="text-destructive text-right hover:bg-destructive hover:text-white rounded p-1">
        <Cross2Icon />
      </span>
      <span className="text-sm text-muted-foreground">{data.category}</span>
      <span className="font-medium leading-none">{data.content}</span>
      <span className={`${getColorByType(data.type)} text-right`}>
        {data.amount}원
      </span>
    </li>
  );
}
