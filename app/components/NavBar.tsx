import Search from "~/src/icons/search";
import LogoWithType from "../src/icons/LogoWithTypeHeader";
import Heart from "~/src/icons/heart";
import ShoppingCart from "~/src/icons/Shopping cart";
import { NavLink } from "react-router";
import { Menu as MenuIcon } from "../src/icons/Menu";
import SigningTab from "./SigningTab";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "./ui/sheet";

type NavBarProps = {
  userId: string | null;
  fullName: string | null;
};

export default function NavBar({ userId, fullName }: NavBarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-background dark:bg-warmBlack">
      <div className="px-[11vw]">
        <section className="flex max-md:grid max-md:grid-cols-3 items-center justify-between h-20.5 max-w-[1110px] mx-auto ">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="avatar">
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
                    Make changes to your profile here. Click save when
                    you&apos;re done.
                  </SheetDescription>
                </SheetHeader>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button variant="newOutline">Close</Button>
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
                <NavLink to="/">
                  {({ isActive }) => (
                    <span
                      className={
                        isActive ? "text-lightBrown text-Display-3" : ""
                      }
                    >
                      Home
                    </span>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="shop">
                  {({ isActive }) => (
                    <span
                      className={
                        isActive ? "text-lightBrown text-Display-3" : ""
                      }
                    >
                      Shop
                    </span>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="about">
                  {({ isActive }) => (
                    <span
                      className={
                        isActive ? "text-lightBrown text-Display-3" : ""
                      }
                    >
                      About
                    </span>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="contact">
                  {({ isActive }) => (
                    <span
                      className={
                        isActive ? "text-lightBrown text-Display-3" : ""
                      }
                    >
                      Contact
                    </span>
                  )}
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="max-md:hidden">
            <ul className="flex items-center gap-6">
              <li>
                <Search />
              </li>
              <li>
                <SigningTab userId={userId} fullName={fullName} />
              </li>
              <li>
                <NavLink to="favorites">
                  {({ isActive }) => (
                    <Heart
                      iconColor={isActive ? "var(--active)" : "var(--icons)"}
                    />
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="cart">
                  {({ isActive }) => (
                    <ShoppingCart
                      iconColor={isActive ? "var(--active)" : "var(--icons)"}
                    />
                  )}
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="md:hidden justify-self-end">
            <NavLink to="cart">
              {({ isActive }) => (
                <ShoppingCart
                  iconColor={isActive ? "var(--active)" : "var(--icons)"}
                />
              )}
            </NavLink>
          </div>
        </section>
      </div>
    </nav>
  );
}
