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
import { Link } from "react-router";

const HomePageHistory = () => {
  return (
    <div className="md:px-[11vw]">
      <div className="max-w-[1110px] m-auto">
        <div className="flex flex-col md:flex-row">
          <Card className="bg-neutral200 dark:bg-background md:h-87 w-full md:w-1/2 justify-center px-10 py-10 md:px-15 md:py-16 gap-8">
            <CardHeader>
              <CardTitle className="font-semibold text-Heading-7 text-center uppercase pb-6">
                <h2>
                  Made in viet Nam <br /> since 1450
                </h2>
              </CardTitle>
              <CardDescription className="text-center">
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipiscing eli mattis
                  sit phasellus mollis sit aliquam sit nullam neque ultrices.
                </p>
              </CardDescription>
            </CardHeader>
            <CardFooter className="mx-auto">
              <CardAction className="font-semibold uppercase underline">
                <Link to="/about" prefetch="intent">
                  learn more
                </Link>
              </CardAction>
            </CardFooter>
          </Card>
          <div className="w-full h-87 md:w-1/2">
            <img
              src={history}
              alt="history"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full h-87 md:w-1/2 order-2 md:order-1">
            <img
              src={history1}
              alt="history"
              className="w-full h-full object-cover"
            />
          </div>
          <Card className="bg-neutral200 dark:bg-background md:h-87 w-full md:w-1/2 justify-center px-10 py-10 md:px-15 md:py-16 gap-8 order-1 md:order-2">
            <CardHeader>
              <CardTitle className="font-semibold text-Heading-7 text-center uppercase pb-6">
                <h2>Our History</h2>
              </CardTitle>
              <CardDescription className="text-center">
                Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
                phasellus mollis sit aliquam sit nullam neque ultrices.
              </CardDescription>
            </CardHeader>
            <CardFooter className="mx-auto">
              <CardAction className="font-semibold uppercase underline">
                <Link to="/about" prefetch="intent">
                  learn more
                </Link>
              </CardAction>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomePageHistory;
