import dayjs, { Dayjs } from "dayjs";
import React, { createContext, ReactNode, useState } from "react";

interface TransactionContextType {
  date: Dayjs;
  changeMonth: (value: number) => void;
}
export const TransactionContext = createContext<TransactionContextType>({
  date: dayjs(),
  changeMonth: () => {},
});

const TransactionProvider = ({ children }: { children: ReactNode }) => {
  const [date, setDate] = useState(dayjs());

  const handleMonth = (value: number) => {
    setDate(date.add(value, "M"));
  };

  return (
    <TransactionContext.Provider value={{ date, changeMonth: handleMonth }}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
