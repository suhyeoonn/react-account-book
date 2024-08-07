import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { cx } from "class-variance-authority";

export default function CategoryForm({
  onSubmit,
}: {
  onSubmit: (categoryName: string) => void;
}) {
  const [isShow, setIsShow] = useState(false);
  const [value, setValue] = useState("");

  const handleVisibleForm = (state: boolean) => {
    setIsShow(state);
  };

  const handleCategoryAdd = () => {
    setValue("");
    onSubmit(value);
    handleVisibleForm(false);
  };

  return (
    <div>
      <button
        onClick={() => handleVisibleForm(true)}
        className={cx(
          "flex p-2 opacity-0 transition duration-300  w-full text-sm text-red-500 justify-center font-medium items-center before:bg-red-500 before:h-px before:flex-grow before:mr-3 after:bg-red-500 after:h-px after:flex-grow after:ml-3",
          isShow
            ? "hover:opacity-0 cursor-default"
            : "cursor-pointer hover:opacity-100 "
        )}
      >
        카테고리 추가
      </button>
      {isShow && (
        <div className="flex flex-col gap-3">
          <Input
            placeholder="카테고리 이름 입력"
            value={value}
            onChange={({ target }) => setValue(target.value)}
          />
          <div className="space-x-3">
            <Button onClick={handleCategoryAdd} disabled={!value}>
              Add
            </Button>
            <Button variant="outline" onClick={() => handleVisibleForm(false)}>
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
