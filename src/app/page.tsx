"use client";
import SearchBar from "./components/searchBar/SearchBar";
import { useFilteredTransactions } from "./hook/useFilteredTransactions";
import { Transaction } from "./types/transaction";
import transaction from "./transaction.json";

export default function Home() {
  const typedTransactions = transaction as Transaction[];
  const { searchTerm, setSearchTerm, filteredData } =
    useFilteredTransactions(typedTransactions);

  return (
    <div>
      <h1 className="text-3xl font-poppins mb-4 text-center mt-8">
        Labels search
      </h1>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <ul className="rounded-xl p-4 transition duration-200 cursor-pointer hover:shadow-md hover:bg-gray-50 mt-4 max-w-md mx-auto">
        {filteredData.map((item) => (
          <li key={item.memberId}>{item.label}</li>
        ))}
        {filteredData.length === 0 && (
          <li className="text-center text-red-500">No results found.</li>
        )}
      </ul>
    </div>
  );
}
