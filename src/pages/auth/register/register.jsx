import { Button, Heading5, Input } from "../../../components/common";

export const Register = () => {
  return (
    <>
      <Heading5 styles='dark:text-white my-[20px]'>Enter your email and password to register.</Heading5>
      <form className="w-[100%] flex flex-col gap-[17px]">
        <Input placeholder={"Username"} type="text" />
        <Input placeholder={"almamun_uxui@outlook.com@"} type="email" />
        <Input placeholder={"Password"} type="password" />
        <Input placeholder={"Confirm Password"} type="password" />
      </form>
      <Button styles='w-full py-[13px] mt-[30px]'>Register</Button>
    </>
  );
};
