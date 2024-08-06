"use client";

import { category } from "@/lib/placeholder-data";
import { TransactionType } from "@/lib/types";

export default function CategoryList({ type }: { type: TransactionType }) {
  return (
    <ul>
      {category
        .filter((c) => c.type === type)
        .map((c) => (
          <li
            key={c.id}
            className="hover:bg-gray-100 cursor-pointer p-2 border-b"
          >
            {c.name}
          </li>
        ))}
      <button
        onClick={() => alert("click")}
        className="flex cursor-pointer p-2 opacity-0 transition hover:opacity-100 w-full text-sm text-red-500 justify-center font-medium items-center before:bg-red-500 before:h-px before:flex-grow before:mr-3 after:bg-red-500 after:h-px after:flex-grow after:ml-3"
      >
        카테고리 추가
      </button>
    </ul>
  );
}
