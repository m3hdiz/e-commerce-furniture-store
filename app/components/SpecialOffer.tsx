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
      <div className="flex flex-col md:flex-row md:h-[348px] max-w-[1110px] m-auto">
        <Card className="bg-neutral200 border-none shadow-none rounded-none w-full md:w-1/2 justify-center">
          <CardHeader>
            <CardTitle className="font-semibold text-Heading-7 text-center uppercase pb-5">
              <h2>
                Up to 40% off our <br /> Christmas collection
              </h2>
            </CardTitle>
            <CardDescription className="text-center text-Paragraph-Medium">
              Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
              phasellus mollis sit aliquam sit nullam neque ultrices.
            </CardDescription>
          </CardHeader>
          <CardFooter className="mx-auto">
            <CardAction className="font-bold text-sm text-neutral800 underline">
              SHOP NOW
            </CardAction>
          </CardFooter>
        </Card>
        <div className="w-full md:w-1/2">
          <img
            src={specialOffer}
            alt="specialOffer"
            className="w-full h-[200px] md:h-full  object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
