import { Link } from "react-router";
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
      <h2 className="font-semibold text-Heading-7 text-center uppercase pb-12 max-md:pt-7.5">
        OUR BLOG
      </h2>
      <div className="flex flex-col md:flex-row-reverse md:max-w-[1110px] m-auto">
        <div className="w-full md:w-1/2 h-87">
          <img
            src={ourBlog}
            alt="ourBlog"
            className="w-full h-full object-cover"
          />
        </div>
        <Card className="bg-neutral200 dark:bg-background w-full gap-8 md:w-1/2 justify-center p-10 md:px-15 md:py-16">
          <CardHeader>
            <CardTitle className="font-semibold text-Display-4 uppercase text-neutral600 text-center">
              TableWare
            </CardTitle>
            <CardContent className="font-semibold text-Heading-7 text-center uppercase py-6">
              <h2>The secrets to a kitchen room</h2>
            </CardContent>
            <CardDescription className="text-center text-Paragraph-Medium">
              Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
              phasellus mollis sit aliquam sit nullam neque ultrices.
            </CardDescription>
          </CardHeader>
          <CardFooter className="mx-auto">
            <CardAction className="font-semibold uppercase underline">
              <Link to="/blog" prefetch="intent">
                read more
              </Link>
            </CardAction>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default OurBlog;
