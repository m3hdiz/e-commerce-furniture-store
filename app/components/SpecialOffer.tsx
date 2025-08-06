import specialOffer from "../src/assets/specialOffer.svg";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const SpecialOffer = () => {
  return (
    <div className="md:px-[11vw]">
      <div className="flex flex-col md:flex-row md:h-[300px]  ">
        <Card className="bg-neutral200 border-none shadow-none rounded-none w-full md:w-1/2">
          <CardHeader>
            <CardTitle className="font-bold text-[28px] text-neutral800 text-center">
              Up to 40% off our Christmas collection
            </CardTitle>
            <CardDescription className="text-center text-neutral700">
              Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
              phasellus mollis sit aliquam sit nullam neque ultrices.
            </CardDescription>
          </CardHeader>
          <CardFooter className="mx-auto my-auto">
            <CardAction className="font-bold text-sm text-neutral800 underline">
              SHOP NOW
            </CardAction>
          </CardFooter>
        </Card>
        <div className="w-full md:w-1/2">
          <img
            src={specialOffer}
            alt="specialOffer"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
