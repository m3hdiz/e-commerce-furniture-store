import historyAbout from "../src/assets/historyAbout.svg";
import historyAbout1 from "../src/assets/historyAbout (1).svg";
import historyAbout2 from "../src/assets/historyAbout (2).svg";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

const AboutPageHistory = () => {
  return (
    <div className="md:px-[11vw]">
      <div className="max-w-[1110px] m-auto">
        <div className="flex flex-col md:flex-row">
          <Card className="bg-neutral200 dark:bg-warmBlack md:h-87 w-full md:w-1/2 justify-center px-10 py-10 md:px-15 md:py-16 gap-8 order-2 md:order-1">
            <CardHeader>
              <CardTitle className="font-bold text-Heading-7 text-center uppercase pb-6">
                <h2>1910</h2>
              </CardTitle>
              <CardDescription>
                <p className="text-center text-Paragraph-Medium text-neutral700 dark:text-neutral300">
                  Lorem ipsum dolor sit amet consectetur adipiscing eli mattis
                  sit phasellus mollis sit aliquam sit nullam neque ultrices.
                </p>
              </CardDescription>
            </CardHeader>
          </Card>
          <div className="w-full  md:w-1/2 order-1 md:order-2">
            <img
              src={historyAbout}
              alt="history"
              className="w-full h-[200px] md:h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 ">
            <img
              src={historyAbout1}
              alt="history"
              className="w-full h-[200px] md:h-full object-cover"
            />
          </div>
          <Card className="bg-neutral200 dark:bg-warmBlack md:h-87 w-full md:w-1/2 justify-center px-10 py-10 md:px-15 md:py-16 gap-8">
            <CardHeader>
              <CardTitle className="font-bold text-Heading-7 text-center uppercase pb-6">
                <h2>1990</h2>
              </CardTitle>
              <CardDescription>
                <p className="text-center text-Paragraph-Medium text-neutral700 dark:text-neutral300">
                  Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam
                  nisi. dolor sit amet consectetur adipiscing eli mattis sit
                  phasellus mollis sit aliquam sit
                </p>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="flex flex-col md:flex-row">
          <Card className="bg-neutral200 dark:bg-warmBlack md:h-87 w-full md:w-1/2 justify-center px-10 py-10 md:px-15 md:py-16 gap-8 order-2 md:order-1">
            <CardHeader>
              <CardTitle className="font-bold text-Heading-7 text-center uppercase pb-6">
                <h2>2010</h2>
              </CardTitle>
              <CardDescription>
                <p className="text-center text-Paragraph-Medium text-neutral700 dark:text-neutral300">
                  Rutrum vitae risus eget, vulputate aliquam nisi ex gravida
                  neque tempus. sit aliquam sit nullam neque ultrices.
                </p>
              </CardDescription>
            </CardHeader>
          </Card>
          <div className="w-full  md:w-1/2 order-1 md:order-2">
            <img
              src={historyAbout2}
              alt="history"
              className="w-full md:h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageHistory;
