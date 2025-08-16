import * as React from "react";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";
import { cn } from "~/lib/utils";
import ProductCard from "./ProductCard";
import SortBy from "./SortBy";
export default function CarouselWithThumbs() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  const handleThumbClick = React.useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );
  return (
    <div className=" md:w-3/4">
      <div className="flex items-center gap-2 text-sm mb-1 justify-end">
        <p> Sort by:</p>
        <SortBy />
      </div>
      <Carousel setApi={setApi} className="w-full ">
        <CarouselContent>
          {/* {Array.from({ length: 12 }).map((_, index) => ( */}
          <CarouselItem
          //  key={index}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 ">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <div className="hidden md:block">
                <ProductCard />
              </div>
            </div>
            {/* <Card>
                <CardContent className="flex aspect-video items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card> */}
          </CarouselItem>
          {/* ))} */}
        </CarouselContent>
      </Carousel>
      <Carousel className="w-2/5 mx-auto md:mr-[4vw] mb-8 ">
        <CarouselContent className="flex">
          {Array.from({ length: count }).map((_, index) => (
            <CarouselItem
              key={index}
              className={cn(
                "basis-1/5 cursor-pointer",
                current === index + 1 ? "opacity-100 " : "opacity-50 "
              )}
              onClick={() => handleThumbClick(index)}
            >
              <Card
                className={cn(
                  "py-1 px-4 rounded-none flex justify-center items-center",
                  current === index + 1
                    ? "bg-neutral800 text-white"
                    : "bg-white text-neutral800"
                )}
              >
                <CardContent className="p-0 flex aspect-square items-center justify-center ">
                  <div className="text-sm font-semibold">{index + 1}</div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border-none" />
        <CarouselNext className="border-none" />
      </Carousel>
    </div>
  );
}
