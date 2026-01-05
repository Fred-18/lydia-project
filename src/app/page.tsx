"use client";
import SearchBar from "./components/searchBar/SearchBar";
import { useFilteredTransactions } from "./hook/useFilteredTransactions";
import { Transaction } from "./types/transactionTypes";
import transaction from "./transaction.json";
import { statuesRules } from "../../statuesRules";
import Modal from "./components/modal/modal";
import { useState } from "react";
import { TransactionDetails } from "./components/transactionDetails/TransactionDetails";

export default function Home() {
  const [isOpen, setOpenModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);
  const openModal = () => {
    setOpenModal(true);
  };
  const typedTransactions = transaction as Transaction[];
  const { searchTerm, setSearchTerm, filteredTransactions } =
    useFilteredTransactions(typedTransactions);

  return (
    <div>
      <h1 className="text-3xl font-poppins mb-4 text-center mt-8">
        Transaction Labels
      </h1>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <ul className="rounded-xl p-5  mt-4 max-w-md mx-auto">
        {filteredTransactions.map((item) => (
          <li
            onClick={() => {
              setSelectedTransaction(item);
              openModal();
            }}
            className={
              statuesRules[item.status as keyof typeof statuesRules] +
              " mb-2 p-3 rounded-lg font-medium cursor-pointer hover:scale-105 transition-transform"
            }
            key={item.memberId}
          >
            {item.label} : {item.status}
          </li>
        ))}
        {filteredTransactions.length === 0 && (
          <li className="text-center text-red-500">No results found.</li>
        )}
      </ul>
      <Modal isOpen={isOpen} onClose={() => setOpenModal(false)}>
        {selectedTransaction && (
          <TransactionDetails transactionItem={selectedTransaction} />
        )}
      </Modal>
    </div>
  );
}
