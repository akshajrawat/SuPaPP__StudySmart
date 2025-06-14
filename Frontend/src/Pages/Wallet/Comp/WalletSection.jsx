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
    <div className="border-r-2 border-[#ffffff23] h-full w-full flex flex-col items-center gap-3 p-4 text-shadow-md text-shadow-[#00000041]">
      {/* heading */}
      <h1 className="text-4xl font-bold text-[#b6acf2bf]"> Payment </h1>

      {/* wallet box */}
      <div className=" w-full h-[50%] flex flex-col overflow-hidden">
        <h2 className="text-3xl font-medium text-white w-full h-[10%] ml-2">
          {" "}
          Wallet{" "}
        </h2>
        <div className="min-h-[80%] w-full  bg-[#b6acf2bf] rounded-2xl py-6 px-1 mt-1 shadow-md shadow-[#00000041]">
          {/* money */}
          <div className="text-6xl font-medium text-white h-[35%] flex justify-center items-center border-b-2 border-[#ffffff6d]">
            0.00$
          </div>

          {/* button section */}
          <div className="h-[50%] flex flex-wrap justify-center mt-4 gap-x-8 gap-y-5 text-white">
            {walletActions.map((item, index) => {
              return (
                <button
                  key={index}
                  className="h-[50px] w-[180px] rounded-full bg-black hover:bg-white hover:text-black flex items-center justify-center text-2xl font-bold gap-3 transition-all ease-in-out shadow-md shadow-[#00000041]"
                >
                  {item.icon}
                  {item.name}
                </button>
              );
            })}
            <button className="h-[50px] w-[300px] rounded-full bg-black hover:bg-white hover:text-black flex items-center justify-center text-2xl font-bold gap-3 transition-all ease-in-out shadow-md shadow-[#00000041]">
              <MdAddCard />
              Add Money
            </button>
          </div>
        </div>
      </div>

      {/* transaction history box */}

      <div className="h-[50%] over w-full bg-green-400 rounded-2xl flex flex-col">
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
