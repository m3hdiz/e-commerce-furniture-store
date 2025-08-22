import { Form } from "react-router";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

const CustomerEmail = () => {
  return (
    <div className="p-10 md-py-20 md:px-[11vw]">
      <Form className="flex flex-col justify-center items-center max-w-[1110px] m-auto gap-6">
        <p className="text-Display-3 font-semibold text-center text-neutral600">
          Sign up for emails
        </p>
        <h2 className="font-semibold text-Heading-7 text-center uppercase">
          For news, collections & more
        </h2>
        <div className="w-[350px] md:w-[390px] pb-2">
          <Input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="peer transition-all duration-300 text-center border-none focus:outline-none dark:bg-background"
          />
          <Separator className="bg-foreground transition-all duration-300 peer-focus:bg-background" />
        </div>
        <Button variant="newOutline">SING UP</Button>
      </Form>
    </div>
  );
};

export default CustomerEmail;
