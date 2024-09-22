import { Category, TransactionType, TransactionResponse } from "./types";

const category: Category[] = [
  { id: 1, name: "💰 월급", type: TransactionType.INCOME },
  { id: 2, name: "📈 부수입", type: TransactionType.INCOME },
  { id: 3, name: "👶 아동수당", type: TransactionType.INCOME },
  { id: 4, name: "🪙 용돈", type: TransactionType.INCOME },
  { id: 5, name: "🧧 상여", type: TransactionType.INCOME },
  { id: 6, name: "🏠 생활비", type: TransactionType.EXPENSE },
  { id: 7, name: "🚘 교통/차량", type: TransactionType.EXPENSE },
  { id: 8, name: "📞 주거/통신", type: TransactionType.EXPENSE },
  { id: 9, name: "💊 건강", type: TransactionType.EXPENSE },
];

function getCategoryName(id: number) {
  const found = category.find((c) => c.id === id);
  if (!found) throw new Error("존재하지 않는 카테고리");
  return found.name;
}

export { category };
