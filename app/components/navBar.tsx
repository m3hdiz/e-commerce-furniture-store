import Search from "~/src/icons/search";
import LogoWithType from "../src/icons/LogoWithTypeHeader";
import Avatar from "~/src/icons/avatar";
import Heart from "~/src/icons/heart";
import ShoppingCart from "~/src/icons/Shopping cart";
import { NavLink } from "react-router";
import Menu from "~/src/icons/Menu";
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

export default function NavBar() {
  return (
    <nav className="dark:bg-warmBlack">
      <div className="px-[11vw]">
        <section className="flex max-md:grid max-md:grid-cols-3 items-center justify-between h-20.5 max-w-[1110px] mx-auto ">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost">
                  <Menu />
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
                    Make changes to your profile here. Click save when
                    you&apos;re done.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                  <div className="grid gap-3"></div>
                  <div className="grid gap-3"></div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button variant="outline">Close</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
          <div className="justify-self-center">
            <NavLink to="/">
              <LogoWithType />
            </NavLink>
          </div>
          <div className="max-md:hidden">
            <ul className="flex md:gap-8 lg:gap-15 text-Paragraph-Default">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="about">About</NavLink>
              </li>
              <li>
                <NavLink to="contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="max-md:hidden">
            <ul className="flex gap-6">
              <li>
                <Search />
              </li>
              <li>
                <NavLink to="profile">
                  <Avatar />
                </NavLink>
              </li>
              <li>
                <NavLink to="favorites">
                  <Heart />
                </NavLink>
              </li>
              <li>
                <NavLink to="cart">
                  <ShoppingCart />
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="md:hidden justify-self-end">
            <NavLink to="cart">
              <ShoppingCart />
            </NavLink>
          </div>
        </section>
      </div>
    </nav>
  );
}
