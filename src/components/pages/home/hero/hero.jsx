import React from "react";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
// component
import { Button, Heading5 } from "../../../common";

export const Hero = () => {
  const page = (
    <div className="flex items-center justify-between">
      <div>
        <Heading5 styles="text-black uppercase tracking-[1.4px]">
          Welcome to GreenShop
        </Heading5>
        <h1 className="text-11 font-semibold leading-9 text-black uppercase">
          Let’s Make a <br /> Better <span className="text-green">Planet</span>
        </h1>
        <Heading5 styles="mb-[55px] mt-[5px]">
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use <br /> our plants to create an unique Urban Jungle. Order
          your favorite plants!
        </Heading5>
        <Button styles="py-[10px] px-[26px] ">shopNow</Button>
      </div>
      <div>
        <img src="/img/hero.png" alt="" />
      </div>
    </div>
  );
  return (
    <div className="bg-grey dark:bg-slate-800 mb-[50px] mt-[12px] px-[43px]">
      
      <Swiper pagination={{ clickable: true }} modules={[Pagination]}>
        <SwiperSlide>{page}</SwiperSlide>
        <SwiperSlide>{page}</SwiperSlide>
        <SwiperSlide>{page}</SwiperSlide>
      </Swiper>
    </div>
  );
};
