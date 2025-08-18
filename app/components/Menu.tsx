import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { NavLink } from "react-router";
import LogoWithType from "~/src/icons/LogoWithTypeHeader";
import { Menu as MenuIcon } from "../src/icons/Menu";

export default function Menu() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className="mx-auto">
              <NavLink to="/">
                <LogoWithType />
              </NavLink>
            </SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid flex-1 auto-rows-min gap-6 px-4">
            <div className="grid gap-3"></div>
            <div className="grid gap-3"></div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="newOutline">Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>  
  );
}

======= 
// import TableWare from "../src/images/TableWare.png";
// import Homedecor from "../src/images/Home decor.png";
// import holiday from "../src/images/holiday.png";
// import Collection from "../src/images/Collection.png";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselPrevious,
//   CarouselNext,
// } from "./ui/carousel";

// export default function Menu() {
//   return (
//     <div className="sm:mx-[11vw] max-sm:ml-3">
//       <section className="max-w-[1110px] m-auto my-20 text-Display-4 uppercase font-semibold">
//         <Carousel
//           opts={{
//             align: "start",
//           }}
//           className="max-sm:overflow-clip"
//         >
//           <CarouselContent className="max-sm:w-70">
//             <CarouselItem className="pl-0 md:basis-1/2 lg:basis-1/4">
//               <div className="flex flex-col items-center justify-center gap-6">
//                 <img className="w-63.75" src={TableWare} alt="TableWare" />
//                 <p>TableWare</p>
//               </div>
//             </CarouselItem>
//             <CarouselItem className="pl-0 md:basis-1/2 lg:basis-1/4">
//               <div className="flex flex-col items-center justify-center gap-6">
//                 <img className="w-63.75" src={Homedecor} alt="Homedecor" />
//                 <p>Homedecor</p>
//               </div>
//             </CarouselItem>
//             <CarouselItem className="pl-0 md:basis-1/2 lg:basis-1/4">
//               <div className="flex flex-col items-center justify-center gap-6">
//                 <img className="w-63.75" src={holiday} alt="holiday" />
//                 <p>holiday</p>
//               </div>
//             </CarouselItem>
//             <CarouselItem className="pl-0 md:basis-1/2 lg:basis-1/4">
//               <div className="flex flex-col items-center justify-center gap-6">
//                 <img className="w-63.75" src={Collection} alt="Collection" />
//                 <p>Collection</p>
//               </div>
//             </CarouselItem>
//           </CarouselContent>
//           <CarouselPrevious className="lg:hidden" />
//           <CarouselNext className="lg:hidden" />
//         </Carousel>
//       </section>
//     </div>
