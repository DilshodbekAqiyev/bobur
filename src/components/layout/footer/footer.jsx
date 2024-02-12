import { Heading3, Heading5 } from "../../common";
import { CgFacebook } from "react-icons/cg";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FooterTop } from "./components/footer-top";

export const Footer = () => {
  return (
    <div>
      <FooterTop />
      <div className="flex justify-between items-center px-[23px] py-[31px] bg-grey dark:bg-slate-800 border-b">
        <div className="flex flex-col gap-[10px]">
          <Heading3>My Account</Heading3>
          <Heading5>My Account</Heading5>
          <Heading5>Our stores</Heading5>
          <Heading5> Contact us</Heading5>
          <Heading5>Career</Heading5>
          <Heading5>Specials</Heading5>
        </div>
        <div className="flex flex-col gap-[10px]">
          <Heading3>Help & Guide</Heading3>
          <Heading5>Help Center</Heading5>
          <Heading5>How to Buy</Heading5>
          <Heading5>Shipping & Delivery</Heading5>
          <Heading5>Product Policy</Heading5>
          <Heading5>How to Return</Heading5>
        </div>
        <div className="flex flex-col gap-[10px]">
          <Heading3>Categories</Heading3>
          <Heading5>House Plants</Heading5>
          <Heading5>Potter Plants</Heading5>
          <Heading5>Seeds</Heading5>
          <Heading5>Small Plants</Heading5>
          <Heading5>Accessories</Heading5>
        </div>
        <div className="flex flex-col gap-[22px]">
          <Heading3>Social Media</Heading3>
          <div className="flex gap-[10px]">
            <a
              href="https://facebook.com"
              target="_blank"
              className="flex items-center justify-center border border-[#46a35938] text-green rounded-[4px] w-[30px] h-[30px]"
            >
              <CgFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="flex items-center justify-center border border-[#46a35938] text-green rounded-[4px] w-[30px] h-[30px]"
            >
              <BsInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="flex items-center justify-center border border-[#46a35938] text-green rounded-[4px] w-[30px] h-[30px]"
            >
              <BsTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="flex items-center justify-center border border-[#46a35938] text-green rounded-[4px] w-[30px] h-[30px]"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <Heading3>We accept</Heading3>
          <img src="/img/collaborator.png" alt="" />
        </div>
      </div>
      <Heading5 styles="text-black py-[20px] text-center">
        © 2021 GreenShop. All Rights Reserved.
      </Heading5>
    </div>
  );
};
