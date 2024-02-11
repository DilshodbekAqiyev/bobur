import React from "react";
import { Heading3, Heading5 } from "../../../common";
// icon
import { FaArrowRight } from "react-icons/fa";

export const Post = ({ img, type }) => {
  return (
    <div>
      <img src={img} alt="" />
      <div className="flex flex-col gap-[5px] text-start p-[15px]">
        <Heading5 styles="text-[#46A358]">
          September 12 I Read in 6 minutes
        </Heading5>
        <Heading3 styles="text-6">{type}</Heading3>
        <Heading5>
          Cacti are succulents are easy care plants for any home or patio.{" "}
        </Heading5>
        <a
          href="#"
          target="_blank"
          className="flex items-center text-black hover:text-green transition font-bold leading"
        >
          Read More <FaArrowRight />
        </a>
      </div>
    </div>
  );
};
