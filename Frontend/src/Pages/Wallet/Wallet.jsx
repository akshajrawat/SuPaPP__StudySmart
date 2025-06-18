import React from "react";
import WalletSection from "./Comp/WalletSection";
import CryptoSection from "./Comp/CryptoSection";

const Wallet = () => {
  return (
    <div className="flex w-full h-[calc(100vh-80.8px)] overflow-hidden">
      {/* wallet section */}
      <div className="w-[30%] h-full overflow-y-auto border-r-2 border-[#ffffff27] p-4">
        <WalletSection />
      </div>

      {/* crypto activity section */}
      <div className="w-[70%] h-full overflow-hidden">
        <CryptoSection />
      </div>
    </div>
  );
};

export default Wallet;
