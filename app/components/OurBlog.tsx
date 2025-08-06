import ourBlog from "../src/assets/ourBlog.svg";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const OurBlog = () => {
  return (
    <div className="md:px-[11vw]">
      <h2 className="text-center font-bold text-3xl text-neutral800 py-4 px-2 ">
        OUR BLOG
      </h2>
      <div className="flex flex-col md:flex-row  ">
        <div className="order-1 md:order-2 w-full md:w-1/2 ">
          <img
            src={ourBlog}
            alt="ourBlog"
            className="w-full h-full object-cover"
          />
        </div>
        <Card className="bg-neutral200 border-none shadow-none rounded-none order-2 md:order-1 w-full md:w-1/2 ">
          <CardHeader>
            <CardTitle className="font-semibold text-lg text-neutral600 text-center">
              TableWare
            </CardTitle>
            <CardContent className="font-bold text-[28px] text-neutral800 text-center ">
              The secrets to a kitchen room
            </CardContent>
            <CardDescription className="text-center text-neutral700">
              Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
              phasellus mollis sit aliquam sit nullam neque ultrices.
            </CardDescription>
          </CardHeader>
          <CardFooter className="mx-auto">
            <CardAction className="font-bold text-sm text-neutral700 underline">
              READ MORE
            </CardAction>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default OurBlog;
