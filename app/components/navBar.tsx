import Search from "~/src/icons/search";
import LogoWithType from "../src/icons/LogoWithTypeHeader";
import Heart from "~/src/icons/heart";
import ShoppingCart from "~/src/icons/Shopping cart";
import { NavLink } from "react-router";
import Menu from "./Menu";

import { SignUp } from "./models/Signning";
import SigningTab from "./SigningTab";

export async function action({ request }) {
  const formData = await request.formData();
  switch (formData.get("_action")) {
    case "signin": {
      // return SignIn();
    }
    case "signup": {
      return SignUp();
    }
    default: {
      return null;
    }
  }

  // const username = formData.get("username");
  // const email = formData.get("email");
  // const password = formData.get("password");
  // const confirmPassword = formData.get("confirmPassword");

  // // Example basic validation
  // if (password !== confirmPassword) {
  //   return { error: "Passwords do not match" };
  // }

  // Normally you'd create the user in the database here
  // return SignUp();

  // Redirect after success
  // return redirect("/welcome");
}

export default function NavBar() {
  return (
    <nav className="dark:bg-warmBlack">
      <div className="px-[11vw]">
        <section className="flex max-md:grid max-md:grid-cols-3 items-center justify-between h-20.5 max-w-[1110px] mx-auto ">
          <div className="md:hidden">
            <Menu />
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
                <SigningTab />
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
