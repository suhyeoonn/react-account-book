export enum TransactionType {
  INCOME,
  EXPENSE,
}

export interface Category {
  id: number;
  name: string;
  type: TransactionType;
}

export interface TransactionMonthlyTotal {
  income: number;
  expense: number;
}

export interface TransactionResponse {
  total: TransactionMonthlyTotal;
  dailyData: DailyTransaction[];
}

export interface DailyTransaction {
  date: Date;
  transactions: Transaction[];
}

export interface Transaction {
  id: number;
  type: TransactionType;
  date: Date;
  category: string;
  content: string;
  amount: number;
}

export type AddTransaction = Omit<Transaction, "id" | "category"> & {
  categoryId: number;
};

export interface TransactionForm {
  id: number | null;
  type: TransactionType;
  date: Date;
  category: string;
  content: string;
  amount: string;
}
