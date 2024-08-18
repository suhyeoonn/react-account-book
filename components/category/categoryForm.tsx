"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { cx } from "class-variance-authority";
import { createCategory } from "@/lib/actions";

export default function CategoryForm() {
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
          "flex p-2 opacity-0 transition duration-300  w-full text-sm text-red-500 justify-center font-medium items-center before:bg-red-500 before:h-px before:flex-grow before:mr-3 after:bg-red-500 after:h-px after:flex-grow after:ml-3",
          {
            "hover:opacity-0 cursor-default": isShow,
            "cursor-pointer hover:opacity-100 ": !isShow,
          }
        )}
      >
        카테고리 추가
      </button>
      {isShow && (
        <form action={handleCategoryAdd} className="flex flex-col gap-3">
          <Input
            placeholder="카테고리 이름 입력"
            value={value}
            onChange={({ target }) => setValue(target.value)}
            name="name"
          />
          <input type="hidden" value={0} name="type" />
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
