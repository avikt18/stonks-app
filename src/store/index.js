import { getUrl } from "@/utils/getUrl";
import { create } from "zustand";

const data = {
  top_gainers: [
    {
      ticker: "LIFWZ",
      price: "0.14",
      change_amount: "0.1",
      change_percentage: "250.0%",
      volume: "14400",
    },
    {
      ticker: "HUBCZ",
      price: "0.43",
      change_amount: "0.2498",
      change_percentage: "138.6238%",
      volume: "18636",
    },
    {
      ticker: "BUJAW",
      price: "0.07",
      change_amount: "0.04",
      change_percentage: "133.3333%",
      volume: "900",
    },
    {
      ticker: "NXLIW",
      price: "0.024",
      change_amount: "0.0134",
      change_percentage: "126.4151%",
      volume: "5690",
    },
    {
      ticker: "BIAFW",
      price: "0.11",
      change_amount: "0.059",
      change_percentage: "115.6863%",
      volume: "100",
    },
    {
      ticker: "OXBRW",
      price: "0.09",
      change_amount: "0.0401",
      change_percentage: "80.3607%",
      volume: "4000",
    },
    {
      ticker: "AGRIW",
      price: "0.0176",
      change_amount: "0.0075",
      change_percentage: "74.2574%",
      volume: "1023",
    },
    {
      ticker: "TRKAW",
      price: "0.0129",
      change_amount: "0.0054",
      change_percentage: "72.0%",
      volume: "34350",
    },
    {
      ticker: "IGTAW",
      price: "0.0672",
      change_amount: "0.0272",
      change_percentage: "68.0%",
      volume: "49",
    },
    {
      ticker: "EUDAW",
      price: "0.1253",
      change_amount: "0.0501",
      change_percentage: "66.6223%",
      volume: "101",
    },
    {
      ticker: "CTOS+",
      price: "0.0249",
      change_amount: "0.0098",
      change_percentage: "64.9007%",
      volume: "7215",
    },
    {
      ticker: "SPRC",
      price: "5.62",
      change_amount: "2.21",
      change_percentage: "64.8094%",
      volume: "22499742",
    },
    {
      ticker: "INVZW",
      price: "0.5861",
      change_amount: "0.2261",
      change_percentage: "62.8056%",
      volume: "10839",
    },
    {
      ticker: "RCRTW",
      price: "0.0042",
      change_amount: "0.0016",
      change_percentage: "61.5385%",
      volume: "8400",
    },
    {
      ticker: "WEL+",
      price: "0.1204",
      change_amount: "0.0422",
      change_percentage: "53.9642%",
      volume: "1490",
    },
    {
      ticker: "RELIW",
      price: "0.13",
      change_amount: "0.0453",
      change_percentage: "53.4829%",
      volume: "2675",
    },
    {
      ticker: "GVP",
      price: "2.38",
      change_amount: "0.8",
      change_percentage: "50.6329%",
      volume: "377872",
    },
    {
      ticker: "BFRIW",
      price: "0.03",
      change_amount: "0.0099",
      change_percentage: "49.2537%",
      volume: "2900",
    },
    {
      ticker: "STIXW",
      price: "0.0149",
      change_amount: "0.0049",
      change_percentage: "49.0%",
      volume: "2601",
    },
    {
      ticker: "GIPRW",
      price: "0.455",
      change_amount: "0.1494",
      change_percentage: "48.8874%",
      volume: "1102",
    },
  ],
  top_losers: [
    {
      ticker: "ARTEW",
      price: "0.0012",
      change_amount: "-0.0585",
      change_percentage: "-97.9899%",
      volume: "48462",
    },
    {
      ticker: "HCDIZ",
      price: "0.0012",
      change_amount: "-0.0077",
      change_percentage: "-86.5169%",
      volume: "14814",
    },
    {
      ticker: "KTRA",
      price: "0.7469",
      change_amount: "-3.0831",
      change_percentage: "-80.4987%",
      volume: "2378367",
    },
    {
      ticker: "IMAQW",
      price: "0.0095",
      change_amount: "-0.0144",
      change_percentage: "-60.251%",
      volume: "415254",
    },
    {
      ticker: "SIEN",
      price: "0.64",
      change_amount: "-0.82",
      change_percentage: "-56.1644%",
      volume: "1631315",
    },
    {
      ticker: "SHAP+",
      price: "0.0132",
      change_amount: "-0.0168",
      change_percentage: "-56.0%",
      volume: "350",
    },
    {
      ticker: "GRTX",
      price: "0.0971",
      change_amount: "-0.1141",
      change_percentage: "-54.0246%",
      volume: "24375239",
    },
    {
      ticker: "APLMW",
      price: "0.013",
      change_amount: "-0.015",
      change_percentage: "-53.5714%",
      volume: "701641",
    },
    {
      ticker: "FOA+",
      price: "0.0526",
      change_amount: "-0.0474",
      change_percentage: "-47.4%",
      volume: "300",
    },
    {
      ticker: "HWELW",
      price: "0.0216",
      change_amount: "-0.0187",
      change_percentage: "-46.402%",
      volume: "24000",
    },
    {
      ticker: "TRCA+",
      price: "0.0261",
      change_amount: "-0.0209",
      change_percentage: "-44.4681%",
      volume: "4677",
    },
    {
      ticker: "PERF+",
      price: "0.02",
      change_amount: "-0.0158",
      change_percentage: "-44.1341%",
      volume: "164838",
    },
    {
      ticker: "VLN+",
      price: "0.0451",
      change_amount: "-0.0348",
      change_percentage: "-43.5544%",
      volume: "16167",
    },
    {
      ticker: "KBNTW",
      price: "0.0051",
      change_amount: "-0.0039",
      change_percentage: "-43.3333%",
      volume: "41387",
    },
    {
      ticker: "MWG",
      price: "0.2301",
      change_amount: "-0.1699",
      change_percentage: "-42.475%",
      volume: "859434",
    },
    {
      ticker: "ATEK+",
      price: "0.041",
      change_amount: "-0.029",
      change_percentage: "-41.4286%",
      volume: "712",
    },
    {
      ticker: "IMAQR",
      price: "0.032",
      change_amount: "-0.0221",
      change_percentage: "-40.8503%",
      volume: "606782",
    },
    {
      ticker: "BLEUW",
      price: "0.0153",
      change_amount: "-0.0102",
      change_percentage: "-40.0%",
      volume: "610",
    },
    {
      ticker: "SQLLW",
      price: "0.006",
      change_amount: "-0.004",
      change_percentage: "-40.0%",
      volume: "1265",
    },
    {
      ticker: "FAZEW",
      price: "0.01",
      change_amount: "-0.0066",
      change_percentage: "-39.759%",
      volume: "1719",
    },
  ],
};

let axios = {};
axios.get = () => {
  return new Promise((res) => setTimeout(() => res(data), 1000));
};

const TABS = {
  TOP_GAINERS: "TOP_GAINERS",
  TOP_LOSERS: "TOP_LOSERS",
};

const useStore = create((set, get) => ({
  topGainersData: [],
  topLosersData: [],
  currentTab: TABS.TOP_GAINERS,
  loading: true,
  setCurrentTab: (tab) => set({ currentTab: tab }),
  setLoading: (bool) => set({ loading: bool }),
  fetchTopGainersLosersData: async () => {
    const setLoading = get().setLoading
    setLoading(true);
    try {
      const topGainersLosersUrl = getUrl({ function: "TOP_GAINERS_LOSERS" });
      const res = await fetch(topGainersLosersUrl);
      const data = await res.json();
      set({ topGainersData: data.top_gainers, topLosersData: data.top_losers });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  },
}));

export default useStore;
