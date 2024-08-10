import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { TransactionType } from "@/lib/types";
import { Dispatch, SetStateAction } from "react";

interface Props {
  value: number;
  onChange: (value: string) => void;
}
export default function TransactionTypeToggle({ value, onChange }: Props) {
  return (
    <ToggleGroup
      type="single"
      variant="outline"
      className="gap-3"
      value={value + ""}
      onValueChange={onChange}
    >
      <ToggleGroupItem
        value={TransactionType.INCOME + ""}
        aria-label="Toggle Expense"
        className="flex-1 data-[state=on]:bg-blue-500 data-[state=on]:text-white"
      >
        수입
      </ToggleGroupItem>
      <ToggleGroupItem
        value={TransactionType.EXPENSE + ""}
        aria-label="Toggle Income"
        className="flex-1 data-[state=on]:bg-red-500 data-[state=on]:text-white"
      >
        지출
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
