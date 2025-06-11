import React from "react";
import WalletSection from "./Comp/WalletSection";
import CryptoSection from "./Comp/CryptoSection";

const Wallet = () => {
  return (
    <div className="flex">
      {/* wallet section */}
      <WalletSection />

      {/* crypto activity section */}
      <CryptoSection />
    </div>
  );
};

export default Wallet;
