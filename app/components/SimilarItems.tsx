import ProductCard from "./ProductCard";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const SimilarItems = () => {
  return (
    <div className="md:px-[11vw] py-6">
      <h2 className="font-bold text-2xl sm:text-4xl text-neutral-800 mb-4 px-[5vw] md:px-0">
        SIMILAR ITEMS
      </h2>
      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="
                shrink-0
                basis-[85%]     
                sm:basis-[60%]   
                md:basis-[40%]   
                lg:basis-[25%] 
               "
            >
              <ProductCard />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default SimilarItems;
