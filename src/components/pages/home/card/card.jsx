import React from "react";
import { Heading3, Heading4 } from "../../../common";
// icon
import { BsCartDash } from "react-icons/bs";
import { PiHeartBold } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { IoHeart } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { flowersActions } from "../../../../store/flowers-slice";
import { priceFormatter } from "../../../../constants/priceFormatter";
// React toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Card = ({ plant }) => {
  const dispatch = useDispatch();
  const notify = () =>
    toast("Added to cart", {
      autoClose: 1000,
      theme: "light",
      className:'shadow-none border w-full'
    });
  const addToCartHandler = () => {
    dispatch(flowersActions.addFlower(plant));
    notify();
  };
  return (
    <div className="bg-grey dark:bg-slate-800 inline-block border-t border-transparent transition  hover:border-green card">
      <div className="flex flex-col items-center bg-white relative h-[260px]">
        {plant.discount != 0 && (
          <div className="bg-green p-[5px] text-white absolute top-0 left-0">
            {plant.discount}% OFF
          </div>
        )}
        <img src={plant.imgUrl} alt="" className="w-[230px] h-[230px]" />
        <div className="hidden gap-[26px] items-center mb-[10px] icon">
          <BsCartDash
            className="hover:text-green cursor-pointer"
            onClick={addToCartHandler}
          />
          {plant.liked ? (
            <IoHeart className="fill-green" />
          ) : (
            <PiHeartBold className={`hover:text-green  cursor-pointer`} />
          )}
          <FiSearch className="hover:text-green  cursor-pointer" />
        </div>
      </div>
      <div className="py-[10px] px-[15px]">
        <Heading3 styles="text font-normal">{plant.name}</Heading3>
        <div className="flex justify-between  mt-[10px]">
          
          <Heading4 styles="text-5">
            {priceFormatter(plant.price,plant.currency,plant.discount).priceWithDiscount}
          </Heading4>
          <Heading4 styles="text-grey-2 line-through text-5">
            {plant.discount != 0 && priceFormatter(plant.price, plant.currency,plant.discount).priceWithoutDiscount}
          </Heading4>
        </div>
      </div>
    </div>
  );
};
