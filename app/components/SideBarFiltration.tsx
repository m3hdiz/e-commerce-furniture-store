import Filter from "~/src/icons/Filter";
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
import SideBarShop from "./SideBarShop";

function SideBarFiltration() {
  return (
    <>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <div className="flex flex-col items-start gap-1">
              <div className="flex items-center gap-2 pb-2">
                <Filter />
                <h2 className="font-semibold sm:text-sm text-xs">FILTER</h2>
              </div>
              <p className="font-semibold text-sm  text-neutral-600 ">
                Showing 120 items
              </p>
            </div>
          </SheetTrigger>
          <SheetContent side="left" className="w-[50vw] h-full overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="mx-auto">Filters</SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            <SideBarShop />
            <SheetFooter></SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:block">
        <SideBarShop />
      </div>
    </>
  );
}

export default SideBarFiltration;
