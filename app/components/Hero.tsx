import hero from "../src/assets/hero.svg";
import heroMobile from "../src/assets/heroMobile.svg";
import Logo from "../src/icons/Logo";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row w-full  md:h-[460px] md:relative">
      <div className="w-full ">
        <img
          src={hero}
          alt="hero"
          className="w-full h-full hidden md:block object-cover"
        />
        <img
          src={heroMobile}
          alt="hero"
          className="w-full  md:hidden object-cover"
        />
      </div>
      <div className="info-panel bg-green px-4 py-15 md:absolute md:bottom-0 md:left-22 h-full  md:max-w-[32vw]">
        <div className="info-content flex flex-col justify-center items-center gap-5">
          <Logo />
          <p className="hero-subtitle text-neutral100 text-center">
            Handcrafted in Viet Nam since 1650
          </p>
          <h2 className="hero-title font-bold text-4xl text-neutral100 text-center">
            BAT TRANG DINNER SET
          </h2>

          <Button variant="hero" size="hero">
            SHOP NOW
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
