import { Select } from "@radix-ui/react-select";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { getCategoryList } from "@/lib/actions";
import { useEffect, useState } from "react";
import { Category } from "@/lib/types";

interface Props {
  type: number;
  defaultValue?: string;
}

export default function CategorySelect({ type, defaultValue }: Props) {
  // TODO: react query
  const [categoryList, setCategoryList] = useState<Category[] | null>(null);
  useEffect(() => {
    (async () => {
      setCategoryList(await getCategoryList());
    })();
  }, []);

  if (!categoryList) return null;

  return (
    <Select name="categoryId" defaultValue={defaultValue}>
      <SelectTrigger className="bg-white">
        <SelectValue placeholder="분류를 선택하세요." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {categoryList
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
