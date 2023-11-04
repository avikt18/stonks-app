import { getCompanyOverviewData } from "@/api";
import CompanyPrice from "@/components/CompanyPrice";
import StockGraph from "@/components/StockGraph";
import React from "react";

const generateTags = (tags) => {
  return tags.map((tag) => tag.value && (
    <div key={tag.type} className="rounded-full bg-gray-100 py-1 px-4">
      <p className="text-sm">
        {tag.type}: {tag.value}
      </p>
    </div>
  ));
};

async function CompanyPage({ params }) {
  const { companyId } = params;
  const companyOverviewData = await getCompanyOverviewData(companyId);
  const {
    Name,
    Symbol,
    AssetType,
    Description,
    Sector: sectorTag,
    Industry: industryTag,
    MarketCapitalization = 'N/A',
    PERatio = 'N/A',
    Beta = 'N/A',
    DividendYield = 'N/A',
    ProfitMargin = 'N/A',
  } = companyOverviewData;
  const tags = [
    {
      type: "Sector",
      value: sectorTag,
    },
    {
      type: "Industry",
      value: industryTag,
    },
  ];
  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between space-x-2">
        <div className="flex space-x-2">
          <div className="flex text-4xl bg-gray-100 p-1 rounded-full">🏦</div>
          <div className="">
            <h1>{Name}</h1>
            <p className="text-sec">
              {Symbol}, {AssetType}
            </p>
          </div>
        </div>
        <CompanyPrice companyId={companyId} />
      </div>
      <StockGraph companyId={companyId} />
      <div className="rounded-lg border p-4 space-y-4">
        <div>
          <h3>About {Name}</h3>
          <span className="w-full border block my-2"></span>
          <p className="text-sec">{Description}</p>
        </div>
        <div className="flex flex-wrap gap-2">{generateTags(tags)}</div>
        <div className="grid grid-cols-2 gap-2 ">
          <p><span className="text-sec">52 Week Low:</span> {companyOverviewData["52WeekLow"]}</p>
          <p><span className="text-sec">52 Week High:</span> {companyOverviewData["52WeekHigh"]}</p>
          <p><span className="text-sec">P/R Ratio:</span> {PERatio}</p>
          <p><span className="text-sec">Beta:</span> {Beta}</p>
          <p><span className="text-sec">Dividend Yield:</span> {DividendYield}</p>
          <p><span className="text-sec">Profit Margin:</span> {ProfitMargin}</p>
          <p><span className="text-sec">Market Cap:</span> {MarketCapitalization}</p>
        </div>
      </div>
    </div>
  );
}

export default CompanyPage;
