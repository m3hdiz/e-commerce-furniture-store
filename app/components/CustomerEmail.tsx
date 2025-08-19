import { Form } from "react-router";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const CustomerEmail = () => {
  return (
    <Form className="px-[11vw] flex flex-col justify-center items-center gap-4 p-10">
      <h2 className="text-neutral700 font-semibold text-center">
        Sign up for emails
      </h2>
      <p className="text-neutral800 font-bold text-[28px] text-center">
        For news, collections & more
      </p>
      <Input
        type="email"
        name="email"
        placeholder="Enter your email address"
        className="w-3/5 py-2 placeholder:text-center border-none border-b border-b-neutral800 focus:outline-none"
      />
      <Button variant="newOutline">SING UP</Button>
    </Form>
  );
};

export default CustomerEmail;
