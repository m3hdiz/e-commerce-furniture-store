import CEO from "../src/assets/CEO&Founder.svg";
import CreativeDirector from "../src/assets/CreativeDirector.svg";
import Artist from "../src/assets/Artist.svg";
import Marketing from "../src/assets/Marketing.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

export default function MeetOurTeam() {
  return (
    <div className="my-9 md:my-20 sm:mx-[11vw] max-sm:ml-3">
      <section className="max-w-[1110px] m-auto">
        <h2 className="font-bold text-4xl text-center mb-6">MEET OUR TEAM</h2>
        <Carousel
          opts={{
            align: "start",
          }}
          className="max-sm:overflow-clip"
        >
          <CarouselContent className="max-sm:w-70">
            <CarouselItem className=" md:basis-1/2 lg:basis-1/4">
              <div className="flex flex-col items-center justify-center gap-3">
                <img className="w-63.75" src={CEO} alt="CEO" />
                <p className="font-semibold text-Display-2 uppercase">
                  BERNIE PATTERSON
                </p>
                <p className="text-Paragraph-Default text-neutral600 dark:text-neutral300">
                  CEO & Founder
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className=" md:basis-1/2 lg:basis-1/4">
              <div className="flex flex-col items-center justify-center gap-3">
                <img
                  className="w-63.75"
                  src={CreativeDirector}
                  alt="CreativeDirector"
                />
                <p className="font-semibold text-Display-2 uppercase">
                  OPHELIA VASE
                </p>
                <p className="text-Paragraph-Default text-neutral600 dark:text-neutral300">
                  Creative Director
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className=" md:basis-1/2 lg:basis-1/4">
              <div className="flex flex-col items-center justify-center gap-3">
                <img className="w-63.75" src={Artist} alt="Artist" />
                <p className="font-semibold text-Display-2 uppercase">
                  CORBIN HOSSAIN
                </p>
                <p className="text-Paragraph-Default text-neutral600 dark:text-neutral300">
                  Artist
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className=" md:basis-1/2 lg:basis-1/4">
              <div className="flex flex-col items-center justify-center gap-3">
                <img className="w-63.75" src={Marketing} alt="Marketing" />
                <p className="font-semibold text-Display-2 uppercase">
                  SEREN BOWL
                </p>
                <p className="text-Paragraph-Default text-neutral600 dark:text-neutral300">
                  Marketing
                </p>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="lg:hidden" />
          <CarouselNext className="lg:hidden" />
        </Carousel>
      </section>
    </div>
  );
}
