import { Link } from "react-router";
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
      <div className="flex flex-col md:flex-row md:h-87 max-w-[1110px] m-auto ">
        <Card className="bg-neutral200 dark:bg-warmBlack w-full gap-8 md:w-1/2 justify-center px-10 py-10 md:px-15 md:py-16">
          <CardHeader>
            <CardTitle className="font-semibold text-Heading-7 text-center uppercase pb-6">
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
            <CardAction className="font-semibold uppercase underline">
              <Link to="/shop" prefetch="intent">
                shop now
              </Link>
            </CardAction>
          </CardFooter>
        </Card>
        <div className="w-full h-87 md:w-1/2">
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
