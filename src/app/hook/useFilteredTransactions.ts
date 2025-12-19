import { useState } from "react";
import { Transaction } from "../types/transaction";

export function useFilteredTransactions(transactions: Transaction[]) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTransactions = transactions.filter((item) =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return {
    searchTerm,
    setSearchTerm,
    filteredData: filteredTransactions
  };
}
