"use client";

import { useEffect, useState } from "react";
import useStore from "@/store";

function CompanyPrice({ companyId }) {
  const { topGainersData, topLosersData, fetchTopGainersLosersData } =
    useStore();
  useEffect(() => {
    if (!topGainersData?.length && !topLosersData?.length) {
      fetchTopGainersLosersData();
    }
  }, [fetchTopGainersLosersData, topGainersData, topLosersData]);

  let companyPriceData = topGainersData?.find(
    (company) => company.ticker === companyId
  );
  companyPriceData = companyPriceData
    ? companyPriceData
    : topLosersData?.find((company) => company.ticker === companyId);
  const [isGainer] = useState(parseFloat(companyPriceData?.change_amount) > 0);
  if (companyPriceData) {
    return (
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-2xl">${companyPriceData.price}</h1>
        <p className={`${isGainer ? "text-green" : "text-red"}`}>
          {isGainer && `+`}
          {companyPriceData.change_percentage}
          {isGainer ? `⬆` : `⬇`}
        </p>
      </div>
    );
  }
  return null;
}

export default CompanyPrice;
