import React from "react";

const SearchCard = ({ item }) => {
  const price = item.price;
  const discount = price * (item.discountPercentage / 100);
  const priceAfterDiscount = Math.round(price - discount);
  return (
    <div className="h-[150px] w-full bg-[#19173a] flex items-center rounded-xl">
      {/* Image */}
      <div className="w-[40%] h-full mt-1 overflow-hidden py-1">
        <img className="w-full h-full object-cover" src={item.thumbnail} />
      </div>

      {/* infos */}
      <div className="w-[60%] h-full p-1 flex flex-col justify-around items-start">
        <h3 className=" text-white w-full whitespace-nowrap overflow-x-auto text-lg py-2">
          {item.title}
        </h3>
        <p className="w-full text-yellow-400 text-lg pl-1">⭐{item.rating}</p>

        {/* price */}
        <p className="text-green-700 font-semibold w-full px-2 flex gap-1 text-lg">
          {priceAfterDiscount}
          <span className="line-through text-gray-500">{item.price}</span>
        </p>

        {/* add to cart button */}
        <button className=" rounded-full bg-[#0c0b21] shadow-sm shadow-[#0000004a] text-white flex justify-center items-center font-semibold text-xs py-2 px-3 ml-1">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default SearchCard;
