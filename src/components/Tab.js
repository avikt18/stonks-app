import React from "react";
import useStore from "@/store";

const TABS = {
  TOP_GAINERS: "TOP_GAINERS",
  TOP_LOSERS: "TOP_LOSERS",
};

function Tab() {
  const { currentTab, setCurrentTab } = useStore();
  return (
    <div className="space-x-2">
      <button
        className={`rounded-lg border border-black py-1 px-2 ${
          currentTab === TABS.TOP_GAINERS && "text-white bg-black"
        }`}
        onClick={() => {
          setCurrentTab(TABS.TOP_GAINERS);
        }}
      >
        Top Gainers
      </button>
      <button
        className={`rounded-lg border border-black py-1 px-2 ${
          currentTab === TABS.TOP_LOSERS && "text-white bg-black"
        }`}
        onClick={() => setCurrentTab(TABS.TOP_LOSERS)}
      >
        Top Losers
      </button>
    </div>
  );
}

export default Tab;
