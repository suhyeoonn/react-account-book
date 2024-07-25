import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function TransactionTypeToggle() {
  return (
    <ToggleGroup type="single" variant="outline">
      <ToggleGroupItem value="bold" aria-label="Toggle Expense">
        수입
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle Income">
        지출
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
