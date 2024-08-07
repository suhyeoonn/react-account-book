"use client";

import { category as dummy } from "@/lib/placeholder-data";
import { Category, TransactionType } from "@/lib/types";
import CategoryForm from "./categoryForm";
import { useEffect, useState } from "react";

export default function CategoryList({ type }: { type: TransactionType }) {
  const [categoryList, setCategoryList] = useState<Category[]>([]);

  useEffect(() => {
    setCategoryList(dummy);
  }, [type]);

  const addCategory = (categoryName: string) => {
    setCategoryList([
      ...categoryList,
      {
        id: categoryList.length + 1,
        name: categoryName,
        type,
      },
    ]);
  };

  return (
    <ul>
      {categoryList
        .filter((c) => c.type === type)
        .map((c) => (
          <li
            key={c.id}
            className="hover:bg-gray-100 cursor-pointer p-2 border-b"
          >
            {c.name}
          </li>
        ))}
      <CategoryForm onSubmit={addCategory} />
    </ul>
  );
}
