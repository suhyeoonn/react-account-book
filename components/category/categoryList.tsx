"use client";

import { category as dummy } from "@/lib/placeholder-data";
import { Category, TransactionType } from "@/lib/types";
import CategoryForm from "./categoryForm";
import { useEffect, useState } from "react";
import CategoryListItem from "./categoryListItem";

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

  const deleteCategory = (id: number) => {
    setCategoryList(categoryList.filter((c) => c.id !== id));
  };

  return (
    <ul>
      {categoryList
        .filter((c) => c.type === type)
        .map((c) => (
          <CategoryListItem key={c.id} category={c} onDelete={deleteCategory} />
        ))}
      <CategoryForm onSubmit={addCategory} />
    </ul>
  );
}
