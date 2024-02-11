import React from "react";
import { Button, Heading3, Heading5 } from "../../../common";
// icon
import { FaArrowRight } from "react-icons/fa";

export const Information = () => {
  return (
    <div className="flex justify-between mt-[155px] gap-[50px]">
      <div className="flex items-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/9531/c63d/3f618aefdf1ccb10a5aa0e2d00f45d0b?Expires=1703462400&Signature=iE5LS17mRQbsPOqo6AXjg~j9k33dMyWSHUjg73DdaieeON3QoI-bbhsV4cCLz5u1fJBsbtnn4FeQbq-XNKm-Iq0VpXaD2wTFAbWTByvmTl~AjyGbmqrAuMaMKmv7eS40BiyCr~WZk36zaziCsxTGEzfH2gPZJfzOKsyyLg5EZoqH7NIq0CCPAcDPbZ1EPG4xXqPNjGeEWsBA0ByLcckAiE8Vg0jgnTMHMC1GEj~Bmltd3Ces6OJdxZbkzd6Nv~qYn6oPVEenVCp6W5TAaCYa07zdM93NHZzVzahnkWDXhvVnfb8J50WrUKEgKgnKkEyHtFl4vxcCVlI3kk5ztiQEWQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
          className="w-287px h-[287px]"
        />
        <div className="flex flex-col text-right  gap-[15px] items-end">
          <Heading3 styles="font-semibold uppercase">
            Summer cactus & succulents
          </Heading3>
          <Heading5>
            We are an online plant shop offering a wide range of cheap and
            trendy plants
          </Heading5>
          <Button
            svg={<FaArrowRight />}
            styles="p-[15px] gap-[5px] flex-row-reverse"
          >
            Find More
          </Button>
        </div>
      </div>
      <div className="flex items-center">
        <img
          src="https://i.ibb.co/Msq64Zb/image-2.png"
          alt=""
          className="w-287px h-[287px]"
        />
        <div className="flex flex-col text-right gap-[15px] items-end">
          <Heading3 styles="font-semibold uppercase">
            Styling Trends & much more
          </Heading3>
          <Heading5>
            We are an online plant shop offering a wide range of cheap and
            trendy plants
          </Heading5>
          <Button
            svg={<FaArrowRight />}
            styles="p-[15px] gap-[5px] flex-row-reverse"
          >
            Find More
          </Button>
        </div>
      </div>
    </div>
  );
};
