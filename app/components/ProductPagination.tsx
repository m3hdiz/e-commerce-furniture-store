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

export default function ProductPagination() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [isDesktop, setIsDesktop] = React.useState(true);

  React.useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768); // md breakpoint
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    if (!api) return;

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

  const cardsPerSlide = isDesktop ? 9 : 8;

  return (
    <div className="md:w-3/4">
      <div className="flex items-center gap-2 sm:text-sm text-xs justify-end mb-1">
        <p className="-mt-20 md:mt-0">Sort by:</p>
        <SortBy />
      </div>

      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index}>
              <div
                className={cn(
                  "grid grid-cols-2 md:grid-cols-3 p-0.5 gap-x-2.5 gap-y-3 md:gap-x-7.5 md:gap-y-10"
                )}
              >
                {Array.from({ length: cardsPerSlide }).map((_, cardIndex) => (
                  <ProductCard key={cardIndex} />
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Carousel className="w-[188px] mx-auto md:mr-[4vw] mt-10">
        <CarouselContent className="flex">
          {Array.from({ length: count }).map((_, index) => (
            <CarouselItem
              key={index}
              className={cn(
                "basis-1/4 cursor-pointer",
                current === index + 1 ? "" : ""
              )}
              onClick={() => handleThumbClick(index)}
            >
              <Card
                className={cn(
                  "size-9 rounded-none flex justify-center items-center",
                  current === index + 1
                    ? "bg-warmBlack text-neutral200"
                    : "bg-background text-foreground hover:border border-warmBlack"
                )}
              >
                <CardContent className="p-0 flex aspect-square items-center justify-center">
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
