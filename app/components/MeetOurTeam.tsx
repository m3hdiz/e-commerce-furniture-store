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
    <div className="sm:mx-[11vw] max-sm:ml-3">
      <section className="max-w-[1110px] m-auto my-4">
        <h2 className="font-bold text-4xl text-center mb-6 text-neutral800">
          MEET OUR TEAM
        </h2>
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
                <h3 className="font-semibold text-sm text-warmBlack">
                  BERNIE PATTERSON
                </h3>
                <p className="text-sm text-neutral600">CEO & Founder</p>
              </div>
            </CarouselItem>
            <CarouselItem className=" md:basis-1/2 lg:basis-1/4">
              <div className="flex flex-col items-center justify-center gap-3">
                <img
                  className="w-63.75"
                  src={CreativeDirector}
                  alt="CreativeDirector"
                />
                <h3 className="font-semibold text-sm text-warmBlack">
                  OPHELIA VASE
                </h3>
                <p className="text-sm text-neutral600">Creative Director</p>
              </div>
            </CarouselItem>
            <CarouselItem className=" md:basis-1/2 lg:basis-1/4">
              <div className="flex flex-col items-center justify-center gap-3">
                <img className="w-63.75" src={Artist} alt="Artist" />
                <h3 className="font-semibold text-sm text-warmBlack">
                  CORBIN HOSSAIN
                </h3>
                <p className="text-sm text-neutral600">Artist</p>
              </div>
            </CarouselItem>
            <CarouselItem className=" md:basis-1/2 lg:basis-1/4">
              <div className="flex flex-col items-center justify-center gap-3">
                <img className="w-63.75" src={Marketing} alt="Marketing" />
                <h3 className="font-semibold text-sm text-warmBlack">
                  SEREN BOWL
                </h3>
                <p className="text-sm text-neutral600">Marketing</p>
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
