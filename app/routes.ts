import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("blog", "routes/blog.tsx"),
    route("shop", "routes/shop.tsx"),
    route("cart", "routes/cart.tsx"),
    route("contact", "routes/contact.tsx"),
    route("checkout", "routes/checkout.tsx"),
  ]),
] satisfies RouteConfig;
