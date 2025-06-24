import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import CategoryCarousel from "../Comp/CategoryCarousel";

const CategorySection = () => {
  const shop = useSelector((state) => state.shop);
  const products = shop.products;

  // category selection
  const uniqueCategoryProducts = useMemo(() => {
    const result = [];
    const seen = new Set();
    for (const product of products) {
      if (!seen.has(product.category)) {
        result.push(product);
        seen.add(product.category);
      }
    }
    return result;
  }, [products]);

  return (
    <div className=" h-[20%] flex flex-col gap-4">
      <div className="flex justify-between items-center h-[10%]">
        <h2 className="text-white text-xl font-semibold "> Categories </h2>
      </div>

      {/* category showcase */}
      <CategoryCarousel products={uniqueCategoryProducts} />
    </div>
  );
};

export default CategorySection;
