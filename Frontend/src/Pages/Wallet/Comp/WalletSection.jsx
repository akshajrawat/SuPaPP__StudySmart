import React from "react";
import { MdPayment } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { MdAddCard } from "react-icons/md";

const walletActions = [
  {
    id: 1,
    icon: <MdPayment />,
    name: "Send",
  },
  {
    id: 2,
    icon: <GiReceiveMoney />,
    name: "Receive",
  },
  {
    id: 3,
    icon: <MdAddCard />,
    name: "Add Money",
  },
];

const WalletSection = () => {
  return (
    <div className="h-full w-full flex flex-col  ">
      {/* top heading */}
      <h1 className="text-[#b6acf2bf] h-[15%] text-4xl flex justify-center items-center font-bold">
        {" "}
        Payment Wallet{" "}
      </h1>

      {/* wallet display */}
      <div className="h-[40%] flex flex-col justify-center">

        {/* smaller headding */}
        <h2 className="text-white font-bold text-2xl ml-1"> Wallet </h2>
        {/* money display */}
        <div className="text-3xl text-white font-bold flex justify-center items-center bg-[#b6acf2bf] w-full h-[45%] rounded-2xl">
          0.0$
        </div>

        {/* buttons section */}
        <div className="flex justify-around items-center mt-3 gap-1">
          {walletActions.map((item) => {
            return (
              <button className="bg-[#b6acf2bf] rounded-full text-white text-xl flex justify-start items-center font-bold h-[45px] w-[150px] gap-2 whitespace-nowrap p-3" key={item.id}>
                {item.icon}
                {item.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* transaction history section */}
      <div className="bg-[#b6acf2bf] w-full h-[45%] flex flex-col overflow-y-auto items-center text-xl rounded-2xl">
        <h3 className="text-4xl font-bold"> Transaction</h3>
        <p>anda</p>
        <p>anda</p>
        <p>anda</p>
        <p>anda</p>
        <p>anda</p>
        <p>anda</p>
        <p>anda</p>
        <p>anda</p>
        <p>anda</p>
        <p>anda</p>
        <p>anda</p>
        <p>anda</p>
        <p>anda</p>
        <p>anda</p>
        <p>anda</p>
        <p>anda</p>
        <p>anda</p>
        <p>anda</p>
      </div>
    </div>
  );
};

export default WalletSection;
