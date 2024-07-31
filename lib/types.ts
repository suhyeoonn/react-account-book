export enum TransactionType {
  INCOME,
  EXPENSE,
}

export interface Category {
  id: number;
  name: string;
  type: TransactionType;
}

export interface TransactionGroup {
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
