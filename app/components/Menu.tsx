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
