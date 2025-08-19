import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/Home.tsx"),
    route("about", "routes/about.tsx"),
    route("blog", "routes/blog.tsx"),
    route("shop", "routes/shop.tsx"),
    route("cart", "routes/cart.tsx"),
    route("contact", "routes/contact.tsx"),
    route("checkout", "routes/checkout.tsx"),
    route("product", "routes/ProductPage.tsx"),
  ]),
] satisfies RouteConfig;
