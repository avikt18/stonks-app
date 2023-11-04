import { getUrl } from "@/utils/getUrl";

export const getCompanyOverviewData = async (ticker) => {
  try {
    const companyOverviewUrl = getUrl({ function: "OVERVIEW", symbol: ticker });
    const res = await fetch(companyOverviewUrl);

    if (!res.ok) {
      throw new Error("Failed to fetch company overview data");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching company overview data", error);
  }
};

export const getCompanyStockGraphData = async (
  ticker,
  outputSize = "compact"
) => {
  try {
    const companyStockDataUrl = getUrl({
      function: "TIME_SERIES_DAILY",
      symbol: ticker,
      outputsize: outputSize,
    });

    const res = await fetch(companyStockDataUrl);

    if (!res.ok) {
      console.error("Error fetching company stock graph data:", error);
    }

    const data = await res.json();

    if (!data || !data["Time Series (Daily)"]) {
      console.error("Invalid or missing data in the response", error);
    }

    return data["Time Series (Daily)"];
  } catch (error) {
    console.error("Error fetching company stock graph data:", error);
  }
};

export const getStocksSearchResults = async (keywords) => {
  try {
    const stockSearchUrl = getUrl({ function: "SYMBOL_SEARCH", keywords });
    const res = await fetch(stockSearchUrl);

    if (!res.ok) {
      throw new Error("Failed to fetch company overview data");
    }
    
    const data = await res.json();
    return data.bestMatches;
  } catch (error) {
    console.error("Error fetching company overview data", error);
  }
};
