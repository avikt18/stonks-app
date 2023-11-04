import React, { useState } from "react";
import Link from "next/link";

function StockCard({ stockInfo }) {
  const { change_amount, change_percentage, ticker, price } = stockInfo;
  const [isGainer] = useState(parseFloat(change_amount) > 0);

  return (
    <Link
      href={`company/${ticker}`}
      className={`border rounded-lg p-2 w-52 space-y-1 ${
        isGainer ? "bg-green-sec border-green" : "bg-red-sec border-red"
      }`}
    >
      <h2>{ticker}</h2>
      <p className="font-mono">${price}</p>
      <p className={`${isGainer ? "text-green" : "text-red"}`}>{isGainer && `+`}{change_percentage}{isGainer ? `⬆` : `⬇`}</p>
    </Link>
  );
}

export default StockCard;
