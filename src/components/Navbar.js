import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <div className="bg-dark w-full flex justify-center p-4 relative mb-8">
      <div className="max-w-4xl w-full flex justify-between">
        <h2 className="text-white">
          <Link href="/">📈 Groww App</Link>{" "}
        </h2>
        <SearchBar />
      </div>
    </div>
  );
}

export default Navbar;
