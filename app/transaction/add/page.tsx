import { Button } from "@/components/ui/button";
import CategorySelect from "@/components/ui/CategorySelect";
import { DatePicker } from "@/components/ui/datePicker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import TransactionTypeToggle from "@/components/ui/transactionTypeToggle";
import Link from "next/link";

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
        <div className="flex w-full gap-3">
          <Button type="submit" className="flex-1">
            Submit
          </Button>
          <Button type="button" variant="outline" asChild>
            <Link href="/">Cancel</Link>
          </Button>
        </div>
      </form>
    </div>
  );
}
