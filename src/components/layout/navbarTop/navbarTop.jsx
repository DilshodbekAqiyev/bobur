import { Heading5 } from "/src/components/common/heading5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbPhoneCall } from "react-icons/tb";

export const NavbarTop = () => {
  return (
    <div className="flex gap-[60px] items-center justify-between px-[23px] py-[10px]  border-b-[1px]">
      <div className="flex gap-[12px] items-center">
        <HiOutlineLocationMarker className="text-green w-[12.5px] h-[15px]" />
        <Heading5 styles="text-black text-[13px]">
          <a
            href="https://www.google.com/maps/place/Termiz+Davlat+Universiteti+Axborot+Texnologiyalari+fakulteti/@37.2328316,67.2852467,798m/data=!3m1!1e3!4m14!1m7!3m6!1s0x3f353334d8cc5539:0x893f599ab1153aa7!2sTerdu!8m2!3d37.2610686!4d67.3085877!16s%2Fg%2F11pdxvc2kb!3m5!1s0x3f352da6b0f82173:0xce5acbd6b7550acb!8m2!3d37.2317828!4d67.2884525!16s%2Fg%2F11t0s_5hbc?entry=ttu"
            target="_blank"
            rel="noreferrer"
          >
            Surxondaryo v. Termez Sh. TerDU AM va IT Fakulteti
          </a>
        </Heading5>
      </div>

      <div className="flex gap-[12px] items-center ">
        <TbPhoneCall className="text-green w-[16px] h-[16px]" />
        <Heading5 styles="text-black text-[11px]">
          {" "}
          <a href="tel:+998919690712">91-969-07-12</a> ,{" "}
          <a href="tel:+998889698884">88-969-88-84</a>
        </Heading5>
      </div>
    </div>
  );
};
