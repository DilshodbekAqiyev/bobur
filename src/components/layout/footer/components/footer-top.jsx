import { Button, Heading3, Heading5 } from "components/common/index";

export const FooterTop = () => {
  return (
    <div className="flex justify-between items-center px-[23px] py-[27px] bg-grey dark:bg-slate-800">
      <div className="pl-[31px]">
        <Heading3>Subcribe our Newsletter</Heading3>
        <Heading5>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
          consequatur rerum aperiam dicta, libero explicabo earum expedita,
          doloremque ipsam optio assumenda? Suscipit, dolor cupiditate nulla.
        </Heading5>
      </div>
      <div className="pl-[31px]">
        <form className="flex my-[18px]">
          <input
            type="text"
            placeholder="Enter your email address..."
            className="w-[75%] py-[12px] px-[11px] rounded-[6px] text-black"
          />
          <Button styles="w-[25%] rounded-l-none">Join</Button>
        </form>
      </div>
    </div>
  );
};
