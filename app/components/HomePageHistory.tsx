import history from "../src/assets/history.svg";
import history1 from "../src/assets/history (1).svg";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const HomePageHistory = () => {
  return (
    <div className="md:px-[11vw]">
      <div className="flex flex-col md:flex-row md:h-[300px]">
        <Card className="bg-neutral200 md:px-8 border-none shadow-none rounded-none w-full md:w-1/2 justify-center">
          <CardHeader>
            <CardTitle className="font-bold text-[28px] text-neutral800 text-center md:text-[20px]  lg:text-[28px]">
              Made in viet Nam since 1450
            </CardTitle>
            <CardDescription className="text-center text-neutral700 ">
              <p className="max-h-[200px] overflow-auto">
                Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
                phasellus mollis sit aliquam sit nullam neque ultrices.
              </p>
            </CardDescription>
          </CardHeader>
          <CardFooter className="mx-auto">
            <CardAction className="font-bold text-sm text-neutral800 underline">
              LEARN MORE
            </CardAction>
          </CardFooter>
        </Card>
        <div className="w-full  md:w-1/2">
          <img
            src={history}
            alt="history"
            className="w-full h-[200px] md:h-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:h-[300px]">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <img
            src={history1}
            alt="history"
            className="w-full h-[200px] md:h-full object-cover"
          />
        </div>
        <Card className="bg-neutral200 md:px-8 border-none shadow-none rounded-none w-full md:w-1/2 order-1 md:order-2 justify-center">
          <CardHeader>
            <CardTitle className="font-bold text-[28px] text-neutral800 text-center">
              Our History
            </CardTitle>
            <CardDescription className="text-center text-neutral700">
              Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
              phasellus mollis sit aliquam sit nullam neque ultrices.
            </CardDescription>
          </CardHeader>
          <CardFooter className="mx-auto">
            <CardAction className="font-bold text-sm text-neutral800 underline">
              LEARN MORE
            </CardAction>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default HomePageHistory;
