"use client";

import { Transaction, TransactionType } from "@/lib/types";
import { Cross2Icon } from "@radix-ui/react-icons";
import ConfirmDialog from "../ui/confirm-dialog";
import { useState } from "react";
import CurrencyWon from "../ui/currencyInputWon";
import Link from "next/link";

export default function TransactionListItem({
  data,
  onDelete,
}: {
  data: Transaction;
  onDelete: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <>
      <li>
        <Link
          href={`/transaction/${data.id}/edit`}
          className="grid grid-cols-[auto_1fr_1fr_1fr] p-3 py-2 gap-2 items-center cursor-pointer hover:bg-secondary"
        >
          <span className="text-destructive text-right hover:bg-destructive hover:text-white rounded p-1 cursor-pointer">
            <Cross2Icon onClick={handleClick} />
          </span>
          <span className="text-sm text-muted-foreground">
            {data.category.name}
          </span>
          <span className="leading-none">
            {data.content || data.category.name}
          </span>
          <span
            className={`${
              data.type === TransactionType.INCOME
                ? "text-income"
                : "text-expense"
            } text-right`}
          >
            <CurrencyWon value={data.amount} displayType="text" />
          </span>
        </Link>
      </li>
      <ConfirmDialog
        open={open}
        onOpenChange={setOpen}
        description="삭제를 누르면 거래 내역이 삭제됩니다."
        actionText="삭제"
        onClick={() => onDelete(data.id)}
      >
        거래 내역을 삭제하시겠습니까?
      </ConfirmDialog>
    </>
  );
}
