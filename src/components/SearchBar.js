"use client";

import { useState } from "react";
import { debounce } from "@/utils/debounce";
import { getStocksSearchResults } from "@/api";
import Link from "next/link";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleChange = async (e) => {
    setDropdownOpen(true);
    const { value } = e.target;
    setSearchTerm(value);
    console.log(value);
    debouncedSearch(value);
  };
  const debouncedSearch = debounce(async (keyword) => {
    const result = await getStocksSearchResults(keyword);
    setSearchResults(result);
  }, 500);
  return (
    <div className="relative">
      <input
        className="border-none bg-gray-700 rounded-full text-gray-200 py-2 px-4 focus-visible:outline-none"
        placeholder="Search stocks"
        value={searchTerm}
        onChange={handleChange}
      ></input>
      <div className="absolute bg-white rounded-md shadow-md">
        {searchResults &&
          dropdownOpen &&
          searchResults.map((result) => (
            <Link
              key={result["1. symbol"]}
              href={`/company/${result["1. symbol"]}`}
              onClick={() => {
                setDropdownOpen(false);
                setSearchTerm("");
                setSearchResults([]);
              }}
            >
              <div className="p-2 border-b">
                <p className="font-semibold">{result["2. name"]}</p>
                <p className="text-sec">{result["1. symbol"]}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default SearchBar;
