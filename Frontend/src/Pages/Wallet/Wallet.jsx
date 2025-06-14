import React from "react";
import WalletSection from "./Comp/WalletSection";
import CryptoSection from "./Comp/CryptoSection";

const Wallet = () => {
  return (
    <div className="flex w-full">
      {/* wallet section */}
      <div className="w-[30%] min-h-[calc(100vh-80.8px)]">
        <WalletSection />
      </div>

      {/* crypto activity section */}
      <div className="w-[70%] min-h-[calc(100vh-80.8px)]">
        <CryptoSection />
      </div>
    </div>
  );
};

export default Wallet;
