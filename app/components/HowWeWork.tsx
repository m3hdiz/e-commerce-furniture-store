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
    <div className="pt-12 md:pt-20 md:px-[11vw]">
      <div className="flex flex-col md:flex-row md:h-[340px] max-w-[1110px] m-auto">
        <div className="w-full md:w-1/2 ">
          <img
            src={howWeWork}
            alt="howWeWork"
            className="w-full h-[260px] md:h-full object-cover"
          />
        </div>
        <Card className="gap-6 w-full md:w-1/2 px-5 py-9">
          <CardHeader>
            <CardTitle className="font-semibold text-Heading-7 uppercase">
              <h2>HOW WE WORKS</h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <CardTitle className="font-semibold text-Paragraph-Medium">
              Product design
            </CardTitle>
            <CardDescription className="text-Paragraph-Medium text-neutral700 dark:text-neutral300">
              Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
              phasellus mollis.
            </CardDescription>
          </CardContent>
          <CardContent className="flex flex-col gap-4">
            <CardTitle className="font-semibold text-Paragraph-Medium">
              Crafted
            </CardTitle>
            <CardDescription className="text-Paragraph-Medium text-neutral700 dark:text-neutral300">
              Rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque
              tempus.
            </CardDescription>
          </CardContent>
          <CardContent className="flex flex-col gap-4">
            <CardTitle className="font-semibold text-Paragraph-Medium">
              Sell product
            </CardTitle>
            <CardDescription className="text-Paragraph-Medium text-neutral700 dark:text-neutral300">
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
