import { NavLink } from "react-router-dom";
// components
import { Heading5, Input, Button } from "../../../components/common";

export const Login = () => {
  return (
    <>
      <Heading5 styles="dark:text-white my-[20px]">
        Enter your email and password to register.
      </Heading5>
      <form className="w-[100%] flex flex-col gap-[17px]">
        <Input placeholder={"almamun_uxui@outlook.com"} type={"email"} />
        <Input placeholder={"Password"} type={"password"} />
      </form>
      <div className="flex justify-end mt-[14px] w-[100%]">
        <NavLink
          to={"/"}
          className="text-green text-sm font-normal mb-[17px] font-cera-pro leading-none"
        >
          Forgot Password?
        </NavLink>
      </div>
      <Button styles="w-full py-[14px]">Login</Button>
    </>
  );
};
