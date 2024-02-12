import React from "react";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay ,Pagination,Navigation} from "swiper/modules";
// component

export const Hero = () => {
  const img1 = ( <img className="w-[79.8%] pt-[8px]" src="/img/bobur-img.jpeg" alt="" />  );
  const img2 = ( <img className="w-[98%]   pt-[8px]" src="/img/babur-tahtda.jpg" alt="" />  );
  const img3 = ( <img className="w-[100%]  pt-[8px]" src="/img/babur-gul-rasmi.png" alt="" />  );
  const img4 = ( <img className="w-[79.8%] pt-[8px]" src="/img/bobur-haykali.jpg" alt="" />  );
  const img5 = ( <img className="w-[90.3%]   pt-[8px]" src="/img/tojmahal.jpg" alt="" />  );
  
  return (
    <div className="bg-grey dark:bg-slate-800 mb-[50px] mt-[12px] px-[43px] w-[92%]">
      <Swiper spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}>
        <SwiperSlide className="flex items-center justify-center">{img2}</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">{img3}</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">{img5}</SwiperSlide>
      </Swiper>
    </div>
  );
};
