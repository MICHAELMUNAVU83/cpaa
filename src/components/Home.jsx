import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Autoplay, Pagination } from "swiper/modules";

const HomeDesc = () => {
  const slidesData = [
    {
      title: "Welcome to the Center for Pan African Affairs - Kenya ",
      content: "Towards a united, peaceful and prosperous Africa",
      image: "/assets/bg1.png",
    },
    {
      title: "Empowering minds through knowledge sharing ",
      content: "Engage, Educate, Inspire",
      image: "/assets/PIC1.png",
    },
    {
      title: "Partnership for sustainable development",
      content: "Partnership for sustainable development",
      image: "/assets/PIX2.png",
    },
  ];
  return (
    <div>
      <section>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000 }}
          loop={true}
          className="w-[100%] cursor-pointer items-center bg-center h-[90vh] "
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="flex text-white flex-col justify-center items-center gap-4 bg-no-repeat  bg-cover w-[100%] h-[100%] text-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                <p className=" font-bold w-[80%] md:w-[50%] text-[32px] md:text-[40px]">
                  {slide.title}
                </p>
                <p className="font-normal mt-2  w-[80%] md:w-[50%] text-[18px] md:text-[22px]">
                  {slide.content}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default HomeDesc;
