import Search from "~/src/icons/search";
import LogoWithType from "./Logo";
import Avatar from "~/src/icons/avatar";
import Heart from "~/src/icons/heart";
import ShoppingCart from "~/src/icons/Shopping cart";
import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <div className="px-[11vw]">
      <nav className="flex items-center justify-between h-20.5 max-w-[1110px] mx-auto ">
        <div>
          <LogoWithType />
        </div>
        <div>
          <ul className="flex gap-15 text-Paragraph-Default">
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
        <div>
          <ul className="flex gap-6">
            <li>
              <Search />
            </li>
            <li>
              <Avatar />
            </li>
            <li>
              <Heart />
            </li>
            <li>
              <ShoppingCart />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
