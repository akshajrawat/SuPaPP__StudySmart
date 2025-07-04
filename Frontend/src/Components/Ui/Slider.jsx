// STEP 1: Import required things
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper carousel components
import { Autoplay, Pagination, Navigation } from "swiper/modules"; // Swiper features (optional)

// STEP 2: Import Swiper CSS styles (without this, it looks broken)
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = ({ products }) => {
  return (
    <div className="max-w-full mx-auto ">
      {" "}
      {/* Centers the carousel */}
      {/* STEP 3: Swiper component is the main container */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation]} // Enable features
        spaceBetween={0} // 30px gap between slides
        slidesPerView={1} // Show 1 slide at a time
        loop={products.length > 1} // Infinite looping
        navigation={false} // Show next/prev arrows
        autoplay={{ delay: 2500, disableOnInteraction: false }} // Auto-slide
      >
        {products.map((item) => {
          return (
            // STEP 4: Each SwiperSlide is one slide in the carousel
            <SwiperSlide
              key={item.id}
              className="bg-gradient-to-b  from-[#b6acf2bf]   to-transparent"
            >
              <div className="w-full flex justify-center items-center">
                <div className="w-[200px] h-[200px] ">
                  <img
                    src={item.thumbnail}
                    alt="Slide 1"
                    className=" h-full w-full object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
