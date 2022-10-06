import { currentNetwork } from "./../constant";
import { toast } from "react-toastify";
import axios from "axios";

let eth_price = 0;

export const getEthPrice = async () => {
  const { data } = await axios.get(
    "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD"
  );

  eth_price = data.USD;
};

export const usdPrice = async (nft_price: number) => {
  if (!eth_price) return "";
  return `${(nft_price * eth_price).toFixed(2)} USD`;
};
