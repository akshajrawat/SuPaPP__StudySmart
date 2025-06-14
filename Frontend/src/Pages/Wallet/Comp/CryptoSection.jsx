import React from "react";
import { useEffect } from "react";
import { axiosInstance } from "../../../Lib/axios";
import { useState } from "react";

const CryptoSection = () => {
  // useState for top 10 crypto
  const [crypto, setCrypto] = useState([]);

  // useEffect to call backend
  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get("/crypto/top");
      setCrypto(response.data);
    })();
  }, []);

  return (
    <div className=" overflow-scroll flex flex-col justify-start items-center w-full h-full ">
      {/* Header sectio */}
      <div className="text-4xl font-bold text-white mt-6">Crypto Activity</div>

      <table className=" w-full p-4 text-center border-separate border-spacing-y-4.5">
        <thead className="text-[#b6acf2bf]">
          <tr>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price (USD)</th>
            <th>24h Change (%)</th>
            <th>Market Cap</th>
            <th>Volume (24h)</th>
          </tr>
        </thead>
        <tbody className="text-white text-sm">
          {crypto.map((coin) => {
            return (
              <tr key={coin.id}>
                <td className="flex justify-center items-center">
                  <img src={coin.image} alt={coin.name} width="30" />
                </td>
                <td>{coin.name}</td>
                <td>{coin.symbol.toUpperCase()}</td>
                <td>${coin.current_price.toLocaleString()}</td>
                <td
                  className={
                    coin.price_change_percentage_24h >= 0
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  {coin.price_change_percentage_24h?.toFixed(2)}%
                </td>
                <td>${coin.market_cap.toLocaleString()}</td>
                <td>${coin.total_volume.toLocaleString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoSection;
