import React from "react";
import { MdPayment } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { MdAddCard } from "react-icons/md";

const walletActions = [
  {
    icon: <MdPayment />,
    name: "Send",
  },
  {
    icon: <GiReceiveMoney />,
    name: "Receive",
  },
];

const WalletSection = () => {
  return (
    <div className="border-r-2 border-[#ffffff23] h-full w-full flex flex-col items-center justify-center gap-3 p-4 text-shadow-md text-shadow-[#00000041]">
      {/* heading */}
      <h1 className="text-4xl h-[5%] flex justify-center items-center w-full font-bold text-[#b6acf2bf]"> Payment </h1>

      {/* wallet box */}
      <div className=" w-full h-[50%]  flex flex-col overflow-hidden gap-1 bg-green-500 rounded-2xl">
        v
      </div>

      {/* transaction history box */}

      <div className="h-[45%] overflow-scroll w-full bg-green-400 rounded-2xl flex flex-col">
        <p>ashcashgdas</p>
        <p>ashcashgdas</p>
        <p>ashcashgdas</p>
        <p>ashcashgdas</p>
        <p>ashcashgdas</p>
        <p>ashcashgdas</p>
        <p>ashcashgdas</p>
        <p>ashcashgdas</p>
        <p>ashcashgdas</p>
        <p>ashcashgdas</p>
        <p>ashcashgdas</p>
        <p>ashcashgdas</p>
        <p>ashcashgdas</p>
        <p>ashcashgdas</p>
        <p>ashcashgdas</p>
        <p>ashcashgdas</p>
      </div>
    </div>
  );
};

export default WalletSection;
