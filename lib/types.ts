export enum TransactionType {
  INCOME,
  EXPENSE,
}

export interface Category {
  id: number;
  name: string;
  type: TransactionType;
}

export interface TransactionResponse {
  year: number;
  month: number;
  total: {
    income: number;
    expense: number;
  };
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
