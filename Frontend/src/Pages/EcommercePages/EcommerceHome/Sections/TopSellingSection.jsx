import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import EcomCard from "../Comp/EcomCard";

const TopSellingSection = () => {
  const shop = useSelector((state) => state.shop);
  const products = shop.products;

  // highest rated
  const topRatedProducts = useMemo(() => {
    const top = products.filter((product) => product.rating > 4.8);
    return top;
  }, [products]);

  return (
    <div className="h-[50%] flex flex-col gap-3 ">
      <div className="flex justify-between items-center h-[10%]">
        <h2 className="text-white text-xl font-semibold "> Top Selling </h2>
      </div>

      {/* top selling showcase */}
      <div className=" h-[90%] flex gap-3 overflow-x-scroll justify-start ">
        {topRatedProducts.map((item) => {
          return (
            <div key={item.id} className="shrink-0">
              <EcomCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopSellingSection;
