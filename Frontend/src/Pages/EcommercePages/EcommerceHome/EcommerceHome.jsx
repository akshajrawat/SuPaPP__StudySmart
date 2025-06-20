import React, { useEffect, useMemo } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../Store/Slice/shopSlice";
import CategoryCarousel from "./Comp/CategoryCarousel";
import EcomCard from "./Comp/EcomCard";

const EcommerceHome = () => {
  const dispatch = useDispatch();
  const shop = useSelector((state) => state.shop);
  const products = shop.products;
  // fetching products from backend
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

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

  // highest rated
  const topRatedProducts = useMemo(() => {
    const top = products.filter((product) => product.rating > 4.8);
    return top;
  }, [products]);

  // highest Discount
  const highDiscountProducts = useMemo(() => {
    const top = products.filter((product) => product.discountPercentage > 17);
    return top;
  }, [products]);

  return (
    <div className=" max-w-full h-[calc(100vh-64.8px)] flex flex-col gap-6 p-3 overflow-scroll">
      {/* search box  */}
      <div className="flex items-center justify-center h-[8%]">
        <div className="flex items-center w-full bg-gray-100 dark:bg-[#19173a] rounded-full px-4 py-2 shadow-inner">
          <FaSearch className="text-gray-500 dark:text-[#8d8ea1] text-lg mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent w-full text-sm text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-[#8d8ea1] outline-none"
          />
        </div>
      </div>

      {/* category section */}
      <div className=" h-[20%] flex flex-col gap-4">
        <div className="flex justify-between items-center h-[10%]">
          <h2 className="text-white text-xl font-semibold "> Categories </h2>
        </div>

        {/* category showcase */}
        <CategoryCarousel products={uniqueCategoryProducts} />
      </div>

      {/* Top selling */}
      <div className="h-[50%] flex flex-col gap-3 ">
        <div className="flex justify-between items-center h-[10%]">
          <h2 className="text-white text-xl font-semibold "> Top Selling </h2>
        </div>

        {/* top selling showcase */}
        <div className=" h-[90%] flex gap-3 overflow-x-scroll justify-start ">
          {topRatedProducts.map((item) => {
            return (
              <div key={item.id} className="shrink-0">
                {" "}
                <EcomCard item={item}  />{" "}
              </div>
            );
          })}
        </div>
      </div>

      {/* best deals */}
      <div className="h-[50%] flex flex-col gap-3 ">
        <div className="flex justify-between items-center h-[10%]">
          <h2 className="text-white text-xl font-semibold "> Best Deals </h2>
        </div>

        {/* top selling showcase */}
        <div className=" h-[90%] flex gap-3 overflow-x-scroll justify-start ">
          {highDiscountProducts.map((item) => {
            return <div key={item.id} className="shrink-0">
                {" "}
                <EcomCard item={item}  />{" "}
              </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default EcommerceHome;
