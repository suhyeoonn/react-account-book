import { Select } from "@radix-ui/react-select";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select";

export default function CategorySelect() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="분류를 선택하세요." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="1">용돈</SelectItem>
          <SelectItem value="2">월급</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
