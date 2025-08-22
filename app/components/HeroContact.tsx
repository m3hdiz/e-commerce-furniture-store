import hero from "../src/assets/heroContact.svg";
import heroMobile from "../src/assets/heroContactMobile.svg";
import Facebook from "~/src/icons/Facebook";
import Twitter from "~/src/icons/Twitter";
import Instagram from "~/src/icons/Instagram";
import Linkedin from "~/src/icons/Linkedin";
import Youtube from "~/src/icons/Youtube";
import { LogoContact, LogoContactMobile } from "~/src/icons/LogoContact";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full sm:h-[545px] sm:relative">
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
      <div className="bg-warmBlack sm:absolute sm:top-0 sm:left-1/9 h-[354px] sm:h-full sm:w-105 flex flex-col justify-center items-center gap-7 sm:gap-10">
        <div className="max-sm:hidden">
          <LogoContact />
        </div>
        <div className="sm:hidden">
          <LogoContactMobile />
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="font-semibold text-Heading-8 text-center border-b border-neutral-400 pb-7.5">
            CONTACT US
          </h2>
        </div>
        <div className="h-[114px] flex flex-col gap-5">
          <p className="font-semibold text-Display-2 text-center">
            Follow us on social media
          </p>
          <div className="flex gap-4 justify-center items-center">
            <Facebook />
            <Twitter />
            <Instagram />
            <Linkedin />
            <Youtube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
