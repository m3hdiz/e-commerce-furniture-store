import Filter from "~/src/icons/Filter";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

function Sidebar() {
  return (
    <aside className="md:w-[20vw] ">
      {/* <div className="flex justify-center items-center gap-3 md:hidden">
        <Filter />
        <h2 className="font-semibold text-sm ">FILTER</h2>
      </div> */}
      <h2 className="font-semibold text-sm md:pb-5 md:border-b border-neutral600 border-b-0 hidden md:block">
        Showing 120 items
      </h2>
      <div className=" hidden md:block">
        <div className="border-b py-4 border-neutral600 flex flex-col gap-3">
          <h3 className="font-semibold text-sm text-neutral800">Category</h3>
          <label
            htmlFor="Dinnerware"
            className="flex items-center gap-2 text-sm"
          >
            <Checkbox
              id="Dinnerware"
              className="border border-warmBlack rounded-none"
            />
            Dinnerware
          </label>
          <label htmlFor="Ceramic" className="flex items-center gap-2 text-sm">
            <Checkbox
              id="Ceramic"
              className="border border-warmBlack rounded-none"
            />
            Ceramic
          </label>
          <label
            htmlFor="Furniture"
            className="flex items-center gap-2 text-sm"
          >
            <Checkbox
              id="Furniture"
              className="border border-warmBlack rounded-none"
            />
            Furniture
          </label>
          <label htmlFor="DecorArt" className="flex items-center gap-2 text-sm">
            <Checkbox
              id="DecorArt"
              className="border border-warmBlack rounded-none"
            />
            Decor Art
          </label>
          <label htmlFor="GiftSets" className="flex items-center gap-2 text-sm">
            <Checkbox
              id="GiftSets"
              className="border border-warmBlack rounded-none"
            />
            Gifts Sets
          </label>
        </div>
        <div className="border-b border-neutral600 py-4 flex flex-col gap-3">
          <h3 className="font-semibold text-sm text-neutral800">Price Range</h3>
          <label htmlFor="p0-10" className="flex items-center gap-2 text-sm">
            <Checkbox
              id="p0-10"
              className="border border-warmBlack rounded-none"
            />
            $0 - $10
          </label>
          <label htmlFor="p10-50" className="flex items-center gap-2 text-sm">
            <Checkbox
              id="p10-50"
              className="border border-warmBlack rounded-none"
            />
            $10 - $50
          </label>
          <label htmlFor="p50-100" className="flex items-center gap-2 text-sm">
            <Checkbox
              id="p50-100"
              className="border border-warmBlack rounded-none"
            />
            $50 - $100
          </label>
          <label htmlFor="p100-200" className="flex items-center gap-2 text-sm">
            <Checkbox
              id="p100-200"
              className="border border-warmBlack rounded-none"
            />
            $100 - $200
          </label>
          <label htmlFor="p200plus" className="flex items-center gap-2 text-sm">
            <Checkbox
              id="p200plus"
              className="border border-warmBlack rounded-none"
            />
            &gt; $200
          </label>
        </div>
        <div className="border-b border-neutral600 py-4 flex flex-col gap-3">
          <h3 className="font-semibold text-sm text-neutral800">Color</h3>
          <div className="flex gap-4">
            <div className="w-4 h-4 border"></div>
            <div className="w-4 h-4 bg-lightBrown"></div>
            <div className="w-4 h-4 bg-[#ccd8ce]"></div>
            <div className="w-4 h-4 bg-[#B4555D]"></div>
            <div className="w-4 h-4 bg-[#9B92A1]"></div>
          </div>
        </div>
        <div className="py-4 flex flex-col gap-3">
          <h3 className="font-semibold text-sm text-neutral800">Tags</h3>
          <label
            htmlFor="tDinnerware"
            className="flex items-center gap-2 text-sm"
          >
            <Checkbox
              id="tDinnerware"
              className="border border-warmBlack rounded-none"
            />
            Dinnerware
          </label>
          <label htmlFor="tCeramic" className="flex items-center gap-2 text-sm">
            <Checkbox
              id="tCeramic"
              className="border border-warmBlack rounded-none"
            />
            Ceramic
          </label>
          <label
            htmlFor="tFurniture"
            className="flex items-center gap-2 text-sm"
          >
            <Checkbox
              id="tFurniture"
              className="border border-warmBlack rounded-none"
            />
            Furniture
          </label>
          <label
            htmlFor="tDecorArt"
            className="flex items-center gap-2 text-sm"
          >
            <Checkbox
              id="tDecorArt"
              className="border border-warmBlack rounded-none"
            />
            Decor Art
          </label>
          <label
            htmlFor="tGiftSets"
            className="flex items-center gap-2 text-sm"
          >
            <Checkbox
              id="tGiftSets"
              className="border border-warmBlack rounded-none"
            />
            Gifts Sets
          </label>
        </div>
      </div>
    </aside>
  );
}

function SideBarFiltration() {
  return (
    <>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <div className="flex justify-center items-center gap-3 md:hidden">
              <Filter />
              <h2 className="font-semibold text-sm ">FILTER</h2>
            </div>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle className="mx-auto"></SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            <Sidebar />
            <SheetFooter>
              <SheetClose asChild>
                <Button variant="outline">Close</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      <Sidebar />
    </>
  );
}

export default SideBarFiltration;
