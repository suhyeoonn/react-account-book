import { Category, TransactionType, TransactionGroup } from "./types";

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

const transationGroup: TransactionGroup[] = [
  {
    date: new Date("2024-07-01"),
    transactions: [
      {
        id: 1,
        type: TransactionType.INCOME,
        date: new Date("2024-07-01"),
        category: getCategoryName(1),
        content: "content",
        amount: 3000000,
      },
      {
        id: 2,
        type: TransactionType.INCOME,
        date: new Date("2024-07-01"),
        category: getCategoryName(4),
        content: "00 용돈",
        amount: 3000,
      },
    ],
  },
  {
    date: new Date("2024-07-03"),
    transactions: [
      {
        id: 3,
        type: TransactionType.EXPENSE,
        date: new Date("2024-07-03"),
        category: getCategoryName(6),
        content: "content",
        amount: 5000,
      },
    ],
  },
];

function getCategoryName(id: number) {
  const found = category.find((c) => c.id === id);
  if (!found) throw new Error("존재하지 않는 카테고리");
  return found.name;
}

export { category, transationGroup };
