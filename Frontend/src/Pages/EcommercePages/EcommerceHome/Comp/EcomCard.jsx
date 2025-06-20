import React from "react";

const EcomCard = ({ item }) => {
  const price = item.price;
  const discount = price * (item.discountPercentage / 100);
  const priceAfterDiscount = Math.round(price-discount);
  return (
    <div className="h-full w-[180px] bg-[#19173a] flex flex-col items-center rounded-xl p-1">
      {/* Image */}
      <div className="w-[150px] h-[55%] mt-1 rounded-xl overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={item.thumbnail}
          alt={item.title}
        />
      </div>

      {/* infos */}

      <h3 className=" text-white w-[160px] whitespace-nowrap overflow-x-auto px-2 mt-1">
        {" "}
        {item.title}
      </h3>
      <p className="w-full text-yellow-400 text-sm px-1">⭐{item.rating}</p>

      {/* price */}
      <p className="text-green-700 font-semibold w-full px-2">${priceAfterDiscount} <span className="line-through text-gray-500">{item.price}</span></p>

      {/* add to cart button */}
      <button className="w-full h-[17%] mt-1 rounded-xl bg-[#0c0b21] shadow-sm shadow-[#0000004a] text-white flex justify-center items-center font-semibold">
        ADD TO CART
      </button>
    </div>
  );
};

export default EcomCard;
