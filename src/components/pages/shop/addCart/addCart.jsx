import React from "react";
import { FiSearch } from "react-icons/fi";
import { Button, Heading3, Heading4, Heading5 } from "../../../common";
// icon
import { TiStarFullOutline } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const AddCart = () => {
  return (
    <div className="mb-[100px]">
      <div className="flex gap-[50px]  my-[50px]">
        <div className="flex basis-1/2 gap-[30px]">
          <div className="basis-1/5 flex flex-col gap-[15px]">
            <img
              src="https://i.ibb.co/Jt843bD/image-1-removebg-preview.png"
              alt=""
              className="bg-grey dark:bg-slate-800"
            />
            <img
              src="https://i.ibb.co/Jt843bD/image-1-removebg-preview.png"
              alt=""
              className="bg-grey dark:bg-slate-800"
            />
            <img
              src="https://i.ibb.co/Jt843bD/image-1-removebg-preview.png"
              alt=""
              className="bg-grey dark:bg-slate-800"
            />
            <img
              src="https://i.ibb.co/Jt843bD/image-1-removebg-preview.png"
              alt=""
              className="bg-grey dark:bg-slate-800"
            />
          </div>
          <div className="basis-4/5 p-[15px] bg-grey dark:bg-slate-800 flex flex-col items-end rounded-md">
            <FiSearch className="text-black" size={18} />
            <img
              src="https://i.ibb.co/Jt843bD/image-1-removebg-preview.png"
              alt=""
              className="w-full"
            />
          </div>
        </div>
        <div className="basis-1/2">
          <Heading3 styles="text-8">Barberton Daisy</Heading3>
          <div className="flex items-center mt-[21px] mb-[15px] border-b">
            <Heading4 styles="text-7 basis-1/2">$119.00</Heading4>
            <div className="flex gap-[3px]">
              <TiStarFullOutline color="#FFAC0C" size={15} />
              <TiStarFullOutline color="#FFAC0C" size={15} />
              <TiStarFullOutline color="#FFAC0C" size={15} />
              <TiStarFullOutline color="#FFAC0C" size={15} />
              <TiStarFullOutline color="#C4C4C4" size={15} />
            </div>
            <Heading3 styles="text-3 font-normal ml-[11px]">
              19 Customer Review
            </Heading3>
          </div>
          <Heading3 styles="text-3 font-medium my-[12.5px]">
            Short Description
          </Heading3>
          <Heading5>
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.{" "}
          </Heading5>
          <Heading3 styles="text-3 font-medium my-[12.5px]">Size:</Heading3>
          <div className="text-grey-1 text font-bold">
            <span className="border w-[28px] mr-[10px] h-[28px] rounded-full inline-block text-center focus:text-green focus:border-green">
              S
            </span>
            <span className="border w-[28px] mr-[10px] h-[28px] rounded-full inline-block text-center focus:text-green focus:border-green">
              M
            </span>
            <span className="border w-[28px] mr-[10px] h-[28px] rounded-full inline-block text-center focus:text-green focus:border-green">
              L
            </span>
            <span className="border w-[28px] mr-[10px] h-[28px] rounded-full inline-block text-center focus:text-green focus:border-green">
              XL
            </span>
          </div>
          <div className="flex items-center justify-between  my-[25px]">
            <Button styles="px-[13px] text-8 py-[8px] rounded-full">-</Button>
            <Heading3 styles="w-[10px] text-6 font-normal">6</Heading3>
            <Button styles="px-[13px] text-7 py-[8px] rounded-full">+</Button>
            <Button styles="py-[10px] px-[32px]">BUY NOW</Button>
            <button className="py-[10px] border rounded-[6px] border-green text-green   px-[32px]">
              ADD TO CART
            </button>
            <button className="text-green border border-green p-[10px] rounded-[6px]">
              <FaRegHeart size={20} />
            </button>
          </div>
          <Heading5 styles="mb-[10px]">
            <span className="text-grey-2">SKU:</span>1995751877966
          </Heading5>
          <Heading5 styles="mb-[10px]">
            <span className="text-grey-2">Categories:</span>Potter Plants
          </Heading5>
          <Heading5 styles="mb-[10px]">
            <span className="text-grey-2">Tags:</span>Home, Garden, Plants
          </Heading5>
          <div className="flex gap-[20px]">
            <Heading3 styles="text-3">Share this products:</Heading3>
            <a href="https://facebook.com" target="_blank"><CgFacebook className="dark:text-white"/></a>
            <a href="https://twitter.com" target="_blank"><BsTwitter  className="dark:text-white"/></a>
            <a href="https://linkedin.com" target="_blank" ><FaLinkedinIn  className="dark:text-white"/></a>
            <a href="https://instagram.com" target="_blank"><BsInstagram  className="dark:text-white"/></a>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-[30px] border-b dark:text-grey-2">
          <NavLink to={''}>Product Description</NavLink>
          <NavLink to={''}>Reviews (19)</NavLink>
        </div>
        <div className="mt-[18px] leading-3">
          <Heading5>
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            fringilla augue nec est tristique auctor. Donec non est at libero
            vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
            Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
            <br />
            <br />
            Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat
            sem, quis fermentum turpis eros eget velit. Donec ac tempus ante.
            Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis
            vulputate, sapien libero hendrerit est, sed commodo augue nisi non
            neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in
            accumsan elit odio quis mi. Cras neque metus, consequat et blandit
            et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet
            ligula euismod eget. The ceramic cylinder planters come with a
            wooden stand to help elevate your plants off the ground.
          </Heading5>
          <Heading3 styles="mt-[18px] leading-3">Living Room:</Heading3>
          <Heading5>
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Heading5>
          <Heading3 styles="mt-[18px] leading-3">Dining Room:</Heading3>
          <Heading5>
            The benefits of houseplants are endless. In addition to cleaning the
            air of harmful toxins, they can help to improve your mood, reduce
            stress and provide you with better sleep. Fill every room of your
            home with houseplants and their restorative qualities will improve
            your life.
          </Heading5>
          <Heading3 styles="mt-[18px] leading-3">Office:</Heading3>
          <Heading5>
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Heading5>
        </div>
      </div>
    </div>
  );
};
