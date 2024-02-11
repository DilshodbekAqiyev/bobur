import React from "react";
import { Heading3 } from "../../../common";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { plants } from "../../../../data/data";
import { Card } from "../../home/card/card";
import { FreeMode, Pagination } from "swiper/modules";

export const Releted = () => {
  return (
    <div>
      <Heading3 styles="text-green py-[12px] border-b">
        Releted Products
      </Heading3>
      <Swiper
        pagination={{
          clickable: true,
        }}
        slidesPerView={5}
        freeMode={true}
        modules={[Pagination,FreeMode]}
        className="py-[60px]"
      >
        {plants.map((plant)=><SwiperSlide  key={plant.id} className="inline-block"><Card plant={plant}/></SwiperSlide>)}
      </Swiper>
    </div>
  );
};
