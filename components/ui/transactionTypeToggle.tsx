import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function TransactionTypeToggle() {
  return (
    <ToggleGroup
      type="single"
      variant="outline"
      className="gap-3"
      defaultValue="expense"
    >
      <ToggleGroupItem
        value="expense"
        aria-label="Toggle Expense"
        className="data-[state=on]:bg-blue-500 data-[state=on]:text-white"
      >
        수입
      </ToggleGroupItem>
      <ToggleGroupItem
        value="income"
        aria-label="Toggle Income"
        className="data-[state=on]:bg-red-500 data-[state=on]:text-white"
      >
        지출
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
