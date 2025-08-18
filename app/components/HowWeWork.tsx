import howWeWork from "../src/assets/howWeWork.svg";

import {
  Card,
  CardDescription,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";

const HowWeWork = () => {
  return (
    <div className="md:px-[11vw] ">
      <div className="flex flex-col md:flex-row md:h-[340px]">
        <div className="w-full md:w-1/2 ">
          <img
            src={howWeWork}
            alt="howWeWork"
            className="w-full h-[260px] md:h-full object-cover"
          />
        </div>
        <Card className=" border-none shadow-none rounded-none w-full md:w-1/2 pl-3 ">
          <CardHeader>
            <CardTitle className="font-bold text-[28px] text-neutral800 ">
              HOW WE WORKS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardTitle className="font-semibold text-lg text-neutral800 ">
              Product design
            </CardTitle>
            <CardDescription className=" text-neutral700">
              Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
              phasellus mollis.
            </CardDescription>
            <CardTitle className="font-semibold text-lg text-neutral800 ">
              Crafted
            </CardTitle>
            <CardDescription className=" text-neutral700">
              Rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque
              tempus.
            </CardDescription>
            <CardTitle className="font-semibold text-lg text-neutral800 ">
              Sell product
            </CardTitle>
            <CardDescription className=" text-neutral700">
              Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam
              nisi.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HowWeWork;
