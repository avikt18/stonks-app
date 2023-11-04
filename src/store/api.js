import axios from "axios";

const API_KEY = "HI37AN5ZYD7NVCGH";

export const getTopGainers = async () => {
  const { data: {top_gainers} } = await axios.get(
    `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${API_KEY}`
  );
  console.log(top_gainers);
  return top_gainers;
};
