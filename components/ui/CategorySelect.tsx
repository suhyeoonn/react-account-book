import { Select } from "@radix-ui/react-select";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { category } from "@/lib/placeholder-data";

interface Props {
  type: number;
  defaultValue?: string;
}

export default function CategorySelect({ type, defaultValue }: Props) {
  return (
    <Select name="categoryId" defaultValue={defaultValue}>
      <SelectTrigger className="bg-white">
        <SelectValue placeholder="분류를 선택하세요." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {category
            .filter((c) => c.type === type)
            .map((c) => (
              <SelectItem value={c.id + ""} key={c.id}>
                {c.name}
              </SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
