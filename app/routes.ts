import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("routes/Layout.tsx", [
    index("routes/Home.tsx"),
    route("about", "routes/About.tsx"),
    route("blog", "routes/Blog.tsx"),
    route("shop", "routes/Shop.tsx"),
    route("cart", "routes/Cart.tsx"),
    route("contact", "routes/Contact.tsx"),
    route("checkout", "routes/Checkout.tsx", [
      index("components/BillingDetails.tsx"),
    ]),
    route("product", "routes/ProductPage.tsx"),
    route("login", "routes/Login.tsx"),
    route("favorites", "routes/Favorites.tsx"),
  ]),
] satisfies RouteConfig;
