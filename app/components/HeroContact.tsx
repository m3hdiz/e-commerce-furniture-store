import hero from "../src/assets/heroContact.svg";
import heroMobile from "../src/assets/heroContactMobile.svg";
import Logo from "../src/icons/LogoContact";
import Facebook from "~/src/icons/Facebook";
import Twitter from "~/src/icons/Twitter";
import Instagram from "~/src/icons/Instagram";
import Linkedin from "~/src/icons/Linkedin";
import Youtube from "~/src/icons/Youtube";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row w-full  md:h-[460px] md:relative ">
      <div className="w-full ">
        <img
          src={hero}
          alt="hero"
          className="w-full h-full hidden md:block object-cover"
        />
        <img
          src={heroMobile}
          alt="hero"
          className="w-full md:hidden object-cover"
        />
      </div>
      <div className="info-panel bg-warmBlack px-[5vw] py-15 md:absolute md:bottom-0 md:left-25 h-full  md:max-w-[32vw]">
        <div className="info-content flex flex-col justify-center items-center gap-5">
          <Logo />
          <h2 className="hero-title font-bold text-4xl text-neutral100 text-center">
            CONTACT US
          </h2>
          <div className="border-b bg-neutral400 w-full"></div>
          <div>
            <p className="font-semibold text-sm text-neutral100 py-2 mb-3 text-center">
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
    </div>
  );
};

export default Hero;
