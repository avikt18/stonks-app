"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Line } from "react-chartjs-2";
import { getCompanyStockGraphData } from "@/api";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const StockGraph = ({ companyId }) => {
  const [timeRange, setTimeRange] = useState("1D");
  const [filteredData, setFilteredData] = useState({});
  const [fetchFullData, setFetchFullData] = useState(false);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchFullStockData = async () => {
    setLoading(true);
    try {
      const data = await getCompanyStockGraphData(companyId, "full");
      setData(data);
      return data;
    } catch (error) {
      console.error("Error fetching full stock data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCompanyStockGraphData(companyId).then((data) => {
      setData(data);
      setLoading(false);
    });
  }, [companyId]);

  const filterData = useCallback(() => {
    if (!Object.keys(data).length) {
      setError("No stock data available");
      return;
    }
    setError("");
    let dateKeys = Object.keys(data);
    let filteredData = {};

    const setFilterData = (dateIndex) => {
      for (let i = 0; i < dateIndex; i++) {
        if (dateKeys.length < dateIndex) {
          if (fetchFullData) {
            setError("Data unavailable for requested range");
            filteredData = data;
          } else {
            const newData = fetchFullStockData();
            setFetchFullData(true);
            console.log(newData, "newData");
            filteredData = newData;
          }
          return;
        }
        filteredData[dateKeys[i]] = data[dateKeys[i]];
      }
    };

    switch (timeRange) {
      case "1D":
        setFilterData(1);
        break;
      case "1W":
        setFilterData(7);
        break;
      case "1M":
        setFilterData(30);
        break;
      case "3M":
        setFilterData(90);
        break;
      case "6M":
        setFilterData(180);
        break;
      case "1Y":
        setFilterData(365);
        break;
      default:
        return data;
    }
    setFilteredData(filteredData);
  }, [data, fetchFullData, timeRange]);

  console.log(Object.keys(filteredData).length, "filteredData");

  useEffect(() => {
    if (data && typeof data === "object" && Object.keys(data).length > 0) {
      filterData();
    }
  }, [timeRange, data, fetchFullData, filterData]);
  // console.log(
  //   Object.values(filteredData).map((item) => item && parseFloat(item["4. close"])),
  //   "data"
  // );
  // Define chart data
  const chartData = {
    labels: Object.keys(filteredData),
    datasets: [
      {
        label: "Stock Price",
        data: Object.keys(filteredData).length
          ? Object.values(filteredData).map((item) => {
              return parseFloat(item["4. close"]);
            })
          : [],
        borderColor: "blue",
        fill: false,
      },
    ],
  };
  console.log(chartData, "chartdata");
  return (
    <div>
      <div className="mb-2">
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="rounded-full p-2 border-2 border-gray-500"
        >
          <option value="1D">1 Day</option>
          <option value="1W">1 Week</option>
          <option value="1M">1 Month</option>
          <option value="3M">3 Months</option>
          <option value="6M">6 Months</option>
          <option value="1Y">1 Year</option>
        </select>
      </div>
      <p className="text-red">{error}</p>
      {!loading ? (
        error || <Line data={chartData} />
      ) : (
        <p className="text-sec text-center">Loading stock gragh...</p>
      )}
    </div>
  );
};

export default StockGraph;
