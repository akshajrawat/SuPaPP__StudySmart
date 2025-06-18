import React from "react";

const CategoryCarousel = ({products}) => {
  return (
    <div className="flex gap-8 justify-start item-center overflow-x-auto h-[90%]">
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className=" h-full w-[100px] flex flex-col justify-center items-center gap-1"
          >
            <div className="w-[60px] h-[60px]">
              <img
                className="w-full h-full object-cover rounded-full bg-white"
                src={product.thumbnail}
                alt={product.title}
              />
            </div>
            <span className="text-white whitespace-nowrap">
              {" "}
              {product.category}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryCarousel;
