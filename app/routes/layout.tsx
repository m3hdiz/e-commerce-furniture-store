import NavBar from "~/components/Navbar";
import Footer from "~/components/footer";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
