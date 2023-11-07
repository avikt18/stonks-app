const API_KEY = process.env.API_KEY;
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
