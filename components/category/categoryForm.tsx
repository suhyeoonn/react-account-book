"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { cx } from "class-variance-authority";
import { createCategory } from "@/lib/actions";
import { TransactionType } from "@/lib/types";
import { PlusIcon } from "@radix-ui/react-icons";

export default function CategoryForm({ type }: { type: TransactionType }) {
  const [isShow, setIsShow] = useState(false);
  const [value, setValue] = useState("");

  const handleVisibleForm = (state: boolean) => {
    setIsShow(state);
  };

  const handleCategoryAdd = (formData: FormData) => {
    setValue("");
    handleVisibleForm(false);
    createCategory(formData);
  };

  return (
    <div>
      <button
        onClick={() => handleVisibleForm(true)}
        className={cx(
          "flex gap-1 p-2 transition duration-300 w-full text-sm text-gray-600 hover:text-red-500 justify-center font-medium items-center before:bg-gray-200 before:hover:bg-red-500 before:h-px before:flex-grow before:mr-3 after:bg-gray-200 after:hover:bg-red-500 after:h-px after:flex-grow after:ml-3"
        )}
      >
        <PlusIcon /> 카테고리 추가
      </button>
      {isShow && (
        <form action={handleCategoryAdd} className="flex flex-col gap-3">
          <Input
            className="bg-white"
            placeholder="카테고리 이름 입력"
            value={value}
            onChange={({ target }) => setValue(target.value)}
            name="name"
          />
          <input type="hidden" value={type} name="type" />
          <div className="space-x-3">
            <Button type="submit" disabled={!value}>
              Add
            </Button>
            <Button variant="outline" onClick={() => handleVisibleForm(false)}>
              Cancel
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
