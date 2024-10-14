import { TransactionType } from "@/lib/types";
import CategoryForm from "./categoryForm";
import CategoryListItem from "./categoryListItem";
import { getCategoryList } from "@/lib/actions";

export default async function CategoryList({
  type,
}: {
  type: TransactionType;
}) {
  const categoryList = await getCategoryList();

  return (
    <ul>
      <CategoryForm type={type} />

      {categoryList
        .filter((c) => c.type === type)
        .map((c) => (
          <CategoryListItem key={c.id} category={c} />
        ))}
    </ul>
  );
}
