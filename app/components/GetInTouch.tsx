import ArrowRight from "~/src/icons/ArrowRight";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function GetInTouch() {
  return (
    <div className="px-5 py-10 sm:px-[11vw] sm:py-12.5">
      <section className="flex flex-col justify-center items-center text-center gap-10 sm:gap-12.5 max-w-[1110px] m-auto">
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-Display-8 leading-10 font-bold uppercase">
            Get in touch with us
          </h1>
          <p className="text-Paragraph-Medium text-center font-light">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            <br />
            phasellus mollis sit aliquam sit nullam.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <div>
            <p className="text-Display-2 font-medium">Office Hours :</p>
            <p className="text-Display-2 font-medium text-lightBrown">
              Monday - Friday 8:00 am to 5:00 pm
            </p>
          </div>
          <div>
            <p className="text-Display-2 font-medium">Email :</p>
            <p className="text-Display-2 font-medium text-lightBrown">
              contact@company.com
            </p>
          </div>
          <div>
            <p className="text-Display-2 font-medium">Phone :</p>
            <p className="text-Display-2 font-medium text-lightBrown">
              (414) 687 - 5892
            </p>
          </div>
          <div>
            <p className="text-Display-2 font-medium">Location :</p>
            <p className="text-Display-2 font-medium text-lightBrown">
              59 Middle Point Rd <br />
              San Francisco, 80412
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-x-5 gap-y-7.5 w-full max-w-[822px]">
          <div className="flex flex-col space-y-3">
            <Label className="text-left" htmlFor="Message">
              Name
            </Label>
            <Input className="w-full"></Input>
          </div>
          <div className="flex flex-col space-y-3">
            <Label className="text-left" htmlFor="Message">
              Email
            </Label>
            <Input className="w-full"></Input>
          </div>
          <div className="flex flex-col space-y-3">
            <Label className="text-left" htmlFor="Message">
              Phone
            </Label>
            <Input></Input>
          </div>
          <div className="flex flex-col space-y-3">
            <Label className="text-left" htmlFor="Message">
              Company
            </Label>
            <Input></Input>
          </div>
          <div className="col-span-full flex flex-col space-y-3">
            <Label className="text-left" htmlFor="Message">
              Message
            </Label>
            <Input className="h-35" name="Message" id="Message"></Input>
          </div>
          <Button variant="solid" className="col-span-full flex items-center">
            Send message
            <ArrowRight />
          </Button>
        </div>
      </section>
    </div>
  );
}
