import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "../../../../styles/swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Plants } from "../plants/plants";

export const PlantsSwiper = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      };
  return (
    <Swiper pagination={pagination} modules={[Pagination]} className="pb-[120px]">
      <SwiperSlide>
        <Plants />
      </SwiperSlide>
      <SwiperSlide>
        <Plants />
      </SwiperSlide>
      <SwiperSlide>
        <Plants />
      </SwiperSlide>
    </Swiper>
  );
};
