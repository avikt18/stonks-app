"use client";

import React from "react";
import useStore from "@/store";
import StockCard from "./StockCard";
import { useEffect, useState } from "react";
import Tab from "./Tab";

const TABS = {
  TOP_GAINERS: "TOP_GAINERS",
  TOP_LOSERS: "TOP_LOSERS",
};

function StocksList() {
  const {
    topGainersData,
    topLosersData,
    fetchTopGainersLosersData,
    currentTab,
    loading,
  } = useStore();
  useEffect(() => {
    fetchTopGainersLosersData();
  }, [fetchTopGainersLosersData]);
  console.log(topGainersData, "topgainers");
  return (
    <div className="w-full flex flex-col items-center space-y-4">
      <Tab />
      <div className="flex flex-wrap max-w-5xl gap-4">
        {currentTab === TABS.TOP_GAINERS
          ? topGainersData?.map((stock) => (
              <StockCard key={stock.ticker} stockInfo={stock} />
            ))
          : topLosersData?.map((stock) => (
              <StockCard key={stock.ticker} stockInfo={stock} />
            ))}
      </div>
      {topGainersData?.length || topLosersData?.length ? (
        <button className="group transition-colors bg-transparent hover:bg-gray-100 rounded-lg p-2">
          Load more<span className="block group-hover:animate-bounce">⬇</span>
        </button>
      ) : (
        <p className="text-sec">{!loading && "No Data found"}</p>
      )}
      <p className="text-sec">{loading && "Loading data..."}</p>
    </div>
  );
}

export default StocksList;
