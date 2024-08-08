import useHover from "@/hooks/useHover";
import { cx } from "class-variance-authority";
import { Button } from "../ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
import useToggle from "@/hooks/useToggle";
import ConfirmDialog from "../ui/confirm-dialog";
import { Category } from "@/lib/types";

export default function CategoryListItem({
  category,
  onDelete,
}: {
  category: Category;
  onDelete: (id: number) => void;
}) {
  const [isHovered, ref] = useHover<HTMLLIElement>();
  const [state, toggle] = useToggle(false);

  const { id, name } = category;

  const handleDelete = () => {
    toggle();
    onDelete(id);
  };

  return (
    <li
      className="hover:bg-gray-100 cursor-pointer p-2 border-b flex justify-between items-center"
      ref={ref}
    >
      {name}
      <div className={cx("opacity-0", isHovered && "opacity-100")}>
        <Button
          variant="outline"
          size="icon"
          className="cursor-pointer"
          onClick={toggle}
        >
          <TrashIcon className="text-destructive w-5 h-5" />
        </Button>
        <ConfirmDialog
          open={state}
          onOpenChange={toggle}
          actionText="삭제"
          onClick={handleDelete}
        >
          <strong>{name}</strong>{" "}
          <span className="font-normal">카테고리를 삭제하시겠습니까?</span>
        </ConfirmDialog>
      </div>
    </li>
  );
}
