import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import blog1 from "../src/assets/blog1.svg";
import blog2 from "../src/assets/blog2.svg";
import blog3 from "../src/assets/blog3.svg";

import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const SliderBlog = () => {
  const blogs = [
    {
      image: blog1,
      title: "What’s in a Garden set?",
      desc: "Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi. dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit",
    },
    {
      image: blog2,
      title: "The secrets to a Living Room set?",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis",
    },
    {
      image: blog3,
      title: "How Can I Use Ceramic When I Decorate?",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.",
    },
  ];
  const plugin = React.useRef(Autoplay({ delay: 4000 }));

  return (
    <div>
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{ align: "start", loop: true }}
        className="w-full"
      >
        <CarouselContent>
          {blogs.map((blog, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-col md:flex-row md:h-[400px]">
                <div className="w-full md:w-1/2">
                  <img
                    src={blog.image}
                    alt="Blog"
                    className="w-full h-[250px] md:h-full object-cover"
                  />
                </div>
                <Card className="bg-neutral200 border-none shadow-none rounded-none w-full md:w-1/2 justify-center h-[250px] md:h-full">
                  <CardHeader>
                    <CardTitle className="font-bold text-[28px] text-neutral800 text-center">
                      {blog.title}
                    </CardTitle>
                    <CardDescription className="text-center text-neutral700 px-[5vw]">
                      {blog.desc}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="absolute right-0" />
        <CarouselPrevious className="absolute left-0" />
      </Carousel>
    </div>
  );
};

export default SliderBlog;
