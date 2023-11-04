// const API_KEY = "HI37AN5ZYD7NVCGH";
const API_KEY = "NJ64BVB2BF81KX3E";
const BASE_URL = `https://www.alphavantage.co/query?apikey=${API_KEY}&`


export function getUrl(queryParams) {
    const url = new URL(BASE_URL);
  
    for (const key in queryParams) {
      if (queryParams.hasOwnProperty(key)) {
        url.searchParams.append(key, queryParams[key]);
      }
    }
  
    return url.href; // Get the final URL with query parameters
  }
