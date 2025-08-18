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
import BlogCard from "./BlogCard";

export default function ArticlesPagination() {
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
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className={cn("grid grid-cols-2 md:grid-cols-3 gap-2")}>
                {Array.from({ length: cardsPerSlide }).map((_, cardIndex) => (
                  <BlogCard />
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Carousel className="w-2/5 mx-auto md:mr-[4vw] mb-8">
        <CarouselContent className="flex">
          {Array.from({ length: count }).map((_, index) => (
            <CarouselItem
              key={index}
              className={cn(
                "basis-1/5 cursor-pointer",
                current === index + 1 ? "opacity-100" : "opacity-50"
              )}
              onClick={() => handleThumbClick(index)}
            >
              <Card
                className={cn(
                  "py-1 px-[2vw] rounded-none flex justify-center items-center",
                  current === index + 1
                    ? "bg-neutral800 text-white"
                    : "bg-white text-neutral800"
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
