import { Form } from "react-router";
import { Button } from "./ui/button";

const CustomerEmail = () => {
  return (
    <Form className="px-[11vw] flex flex-col justify-center items-center gap-4 p-10">
      <h2 className="text-neutral700 font-semibold text-center">
        Sign up for emails
      </h2>
      <p className="text-neutral800 font-bold text-[28px] text-center">
        For news, collections & more
      </p>
      <input
        type="email"
        name="email"
        placeholder="Enter your email address"
        className="w-3/5 py-2 placeholder:text-center placeholder:text-neutral700 border-b border-neutral800 text-neutral800 focus:outline-none text-xs sm:text-base "
      />
      <Button className="border-neutral800 border text-neutral800 text-neutral800s bg-white hover:bg-lightBrown font-semibold text-xs rounded-none">
        SING UP
      </Button>
    </Form>
  );
};

export default CustomerEmail;
