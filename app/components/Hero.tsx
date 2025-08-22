import { Link } from "react-router";
import hero from "../src/assets/hero.svg";
import heroMobile from "../src/assets/heroMobile.svg";
import { Logo, LogoMobile } from "../src/icons/Logo";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full sm:h-[640px] sm:relative">
      <div className="w-full">
        <img
          src={hero}
          alt="hero"
          className="w-full h-full hidden sm:block object-cover"
        />
        <img
          src={heroMobile}
          alt="hero"
          className="w-full sm:hidden object-cover"
        />
      </div>
      <div className="bg-green sm:absolute sm:top-0 sm:left-1/9 h-[354px] sm:h-full sm:w-105 flex flex-col justify-center items-center gap-7 sm:gap-10">
        <div className="max-sm:hidden">
          <Logo />
        </div>
        <div className="sm:hidden">
          <LogoMobile />
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-Paragraph-Medium text-center font-li">
            Handcrafted in Viet Nam since 1650
          </p>
          <h2 className="font-semibold text-Heading-8 text-center">
            BAT TRANG <br /> DINNER SET
          </h2>
        </div>

        <Button variant="hero" size="hero">
          <Link to="/shop" prefetch="intent">
            SHOP NOW
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
