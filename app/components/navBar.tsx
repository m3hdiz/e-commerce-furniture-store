import Search from "~/src/icons/search";
import LogoWithType from "../src/icons/LogoWithTypeHeader";
import Heart from "~/src/icons/heart";
import ShoppingCart from "~/src/icons/Shopping cart";
import { NavLink } from "react-router";
import { Menu as MenuIcon } from "../src/icons/Menu";
import SigningTab from "./SigningTab";

export default function NavBar() {
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
                <SigningTab />
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
