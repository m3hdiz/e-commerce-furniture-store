import Search from "~/src/icons/search";
import LogoWithType from "../src/icons/LogoWithTypeHeader";
import Heart from "~/src/icons/heart";
import ShoppingCart from "~/src/icons/Shopping cart";
import { NavLink } from "react-router";
import { Menu as MenuIcon } from "../src/icons/Menu";
import SigningTab from "./SigningTab";

type NavBarProps = {
  userId: string | null;
  fullName: string | null;
};

export default function NavBar({ userId, fullName }: NavBarProps) {
  return (
    <nav className="dark:bg-warmBlack">
      <div className="px-[11vw]">
        <section className="flex max-md:grid max-md:grid-cols-3 items-center justify-between h-20.5 max-w-[1110px] mx-auto ">
          <div className="md:hidden">
            <MenuIcon />
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
            <ul className="flex items-center gap-6">
              <li>
                <Search />
              </li>
              <li>
                <SigningTab userId={userId} fullName={fullName} />
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
