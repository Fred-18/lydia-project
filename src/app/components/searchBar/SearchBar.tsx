import React from "react";

const SearchBar = ({
  value,
  onChange
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <input
        className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
