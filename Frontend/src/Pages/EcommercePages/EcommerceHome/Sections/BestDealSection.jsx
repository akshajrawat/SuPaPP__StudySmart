import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import EcomCard from "../Comp/EcomCard";

const BestDealSection = () => {
  const shop = useSelector((state) => state.shop);
  const products = shop.products;

  // highest Discount
  const highDiscountProducts = useMemo(() => {
    const top = products.filter((product) => product.discountPercentage > 17);
    return top;
  }, [products]);

  return (
    <div className="h-[50%] flex flex-col gap-3 ">
      <div className="flex justify-between items-center h-[10%]">
        <h2 className="text-white text-xl font-semibold "> Best Deals </h2>
      </div>

      {/* top selling showcase */}
      <div className=" h-[90%] flex gap-3 overflow-x-scroll justify-start ">
        {highDiscountProducts.map((item) => {
          return (
            <div key={item.id} className="shrink-0">
              {" "}
              <EcomCard item={item} />{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestDealSection;
