import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Autoplay, Pagination } from "swiper/modules";
const Supporters = () => {
  const slides = [
    "/logo1.jpg",
    "/logo2.jpg",
    "/logo3.jpg",
    "/logo1.jpg",
    "/logo2.jpg",
    "/logo3.jpg",
  ];
  return (
    <div className="mt-10  flex flex-col justify-center items-center w-full mx-auto gap-5">
      <h1 className="text-[#525560] uppercase text-center libre-baskerville-regular text-[22px] md:text-[30px] lg:text-[48px] ">
        Our Partners
      </h1>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full max-w-[80%] mx-auto cursor-pointer flex flex-row justify-center items-center  "
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide} alt="slide" className="object-cover h-[100px] " />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Supporters;
