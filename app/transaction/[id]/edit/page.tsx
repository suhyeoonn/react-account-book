import { TransactionEditForm } from "@/components/transaction/transactionEditForm";
import { fetchTransaction, patchTransaction } from "@/lib/actions";

export default async function TransactionEdit({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const data = await fetchTransaction(id);

  if (!data) return null;

  const updateWithId = patchTransaction.bind(null, id);

  return (
    <TransactionEditForm
      data={{
        ...data,
        categoryId: data?.categoryId,
        amount: "" + data?.amount,
      }}
      handleSubmit={updateWithId}
    />
  );
}
