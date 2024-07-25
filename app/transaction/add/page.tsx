import { Button } from "@/components/ui/button";
import CategorySelect from "@/components/ui/CategorySelect";
import { DatePicker } from "@/components/ui/datePicker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import TransactionTypeToggle from "@/components/ui/transactionTypeToggle";

export default function TransactionEntry() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form className="flex flex-col gap-7 w-96">
        <TransactionTypeToggle />
        <div className="flex flex-col gap-2">
          <Label>날짜</Label>
          <DatePicker id="date" />
        </div>
        <div className="flex flex-col gap-2">
          <Label>분류</Label>
          <CategorySelect />
        </div>
        <div className="flex flex-col gap-2">
          <Label>금액</Label>
          <Input type="number" required />
        </div>
        <div className="flex flex-col gap-2">
          <Label>내용</Label>
          <Input />
        </div>
        <Button>Submit</Button>
      </form>
    </div>
  );
}
