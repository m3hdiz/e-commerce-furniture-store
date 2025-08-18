import historyAbout from "../src/assets/historyAbout.svg";
import historyAbout1 from "../src/assets/historyAbout (1).svg";
import historyAbout2 from "../src/assets/historyAbout (2).svg";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

const AboutPageHistory = () => {
  return (
    <div className="md:px-[11vw]">
      <div className="flex flex-col md:flex-row md:h-[300px]">
        <Card className="bg-neutral200 md:px-8 border-none shadow-none rounded-none w-full md:w-1/2 justify-center order-2 md:order-1">
          <CardHeader>
            <CardTitle className="font-bold text-[28px] text-neutral800 text-center md:text-[20px]  lg:text-[28px]">
              1910
            </CardTitle>
            <CardDescription className="text-center text-neutral700 ">
              <p className="max-h-[200px] overflow-auto">
                Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
                phasellus mollis sit aliquam sit nullam neque ultrices.
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
      <div className="flex flex-col md:flex-row md:h-[300px]">
        <div className="w-full md:w-1/2 ">
          <img
            src={historyAbout1}
            alt="history"
            className="w-full h-[200px] md:h-full object-cover"
          />
        </div>
        <Card className="bg-neutral200 md:px-8 border-none shadow-none rounded-none w-full md:w-1/2  justify-center">
          <CardHeader>
            <CardTitle className="font-bold text-[28px] text-neutral800 text-center">
              1990
            </CardTitle>
            <CardDescription className="text-center text-neutral700">
              Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam
              nisi. dolor sit amet consectetur adipiscing eli mattis sit
              phasellus mollis sit aliquam sit
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className="flex flex-col md:flex-row md:h-[300px]">
        <Card className="bg-neutral200 md:px-8 border-none shadow-none rounded-none w-full md:w-1/2 justify-center order-2 md:order-1">
          <CardHeader>
            <CardTitle className="font-bold text-[28px] text-neutral800 text-center md:text-[20px]  lg:text-[28px]">
              2010
            </CardTitle>
            <CardDescription className="text-center text-neutral700 ">
              <p className="max-h-[200px] overflow-auto">
                Rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque
                tempus. sit aliquam sit nullam neque ultrices.
              </p>
            </CardDescription>
          </CardHeader>
        </Card>
        <div className="w-full  md:w-1/2 order-1 md:order-2">
          <img
            src={historyAbout2}
            alt="history"
            className="w-full h-[200px] md:h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPageHistory;
