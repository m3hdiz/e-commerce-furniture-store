import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/Home.tsx"),
    route("about", "routes/About.tsx"),
    route("blog", "routes/Blog.tsx"),
    route("shop", "routes/Shop.tsx"),
    route("contact", "routes/Contact.tsx"),
    route("checkout", "routes/Checkout.tsx"),
    route("product", "routes/ProductPage.tsx"),
    route("login", "routes/Login.tsx"),
    route("logout", "routes/Logout.tsx"),
    route("cart", "routes/Protected.tsx", [index("routes/Cart.tsx")]),
  ]),
] satisfies RouteConfig;
