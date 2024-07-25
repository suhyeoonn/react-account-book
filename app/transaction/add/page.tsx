import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/datePicker";
import { Input } from "@/components/ui/input";
import TransactionTypeToggle from "@/components/ui/transactionTypeToggle";

export default function TransactionEntry() {
  return (
    <form>
      <DatePicker />
      <TransactionTypeToggle />
      <Input placeholder="설명" />
      <Input type="number" required />
      <Button>Submit</Button>
    </form>
  );
}
