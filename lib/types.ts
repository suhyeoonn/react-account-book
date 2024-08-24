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
  dailyData: DailyTransaction;
}

export type DailyTransaction = { [date: string]: Transaction[] };

export interface Transaction {
  id: string;
  type: TransactionType;
  date: Date;
  category: string;
  content: string;
  amount: number;
}

export type FormTransaction = Omit<Transaction, "id" | "category"> & {
  categoryId: number;
};

export interface TransactionForm {
  id: number | null;
  type: TransactionType;
  date: Date;
  categoryId: string;
  content: string;
  amount: string;
}
