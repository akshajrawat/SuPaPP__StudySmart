import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSearch,
  fetchProducts,
  searchProduct,
} from "../../../Store/Slice/shopSlice";
import CategorySection from "./Sections/CategorySection";
import TopSellingSection from "./Sections/TopSellingSection";
import BestDealSection from "./Sections/BestDealSection";
import SearchCard from "./Comp/SearchCard";

const EcommerceHome = () => {
  // state for search query
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const shop = useSelector((state) => state.shop);

  // fetching products from backend
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // for search quert
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim() === "") {
        dispatch(clearSearch());
      } else {
        dispatch(searchProduct(query));
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query, dispatch]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className=" max-w-full h-[calc(100vh-64.8px)] flex flex-col gap-6 p-3 overflow-scroll">
      {/* search box  */}
      <div className="flex items-center justify-center h-[8%]">
        <div className="flex items-center w-full bg-gray-100 dark:bg-[#19173a] rounded-full px-4 py-2 shadow-inner">
          <FaSearch className="text-gray-500 dark:text-[#8d8ea1] text-lg mr-2" />
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search"
            className="bg-transparent w-full text-sm text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-[#8d8ea1] outline-none"
          />
        </div>
      </div>

      {/* toggle between searchBar filled and not filled */}

      {shop.isLoading ? (
        <div className="flex justify-center items-start flex-row gap-2 h-[100vh] pt-55">
          <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
          <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
          <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
        </div>
      ) : query.trim() !== "" && shop.searchResult.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center text-white bg-[#19173a] rounded-xl shadow-md px-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
            alt="No Results"
            className="w-28 h-28 mb-4 opacity-80"
          />
          <h2 className="text-2xl font-semibold mb-2">No Products Found</h2>
          <p className="text-sm text-gray-400 max-w-sm">
            We couldn’t find any products matching your search. Try different
            keywords or browse from our categories.
          </p>
        </div>
      ) : shop.searchResult.length > 0 ? (
        shop.searchResult.map((item) => {
          return (
            <SearchCard item={item} isLoading={shop.isLoading} key={item.id} />
          );
        })
      ) : (
        <>
          {/* category section */}
          <CategorySection />

          {/* Top selling section */}
          <TopSellingSection />

          {/* best deals */}
          <BestDealSection />
        </>
      )}
    </div>
  );
};

export default EcommerceHome;
