import logo from "../../assets/images/toursara_logo.svg";
import { Facebook, Instagram, Youtube, Phone, AtSign } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full flex justify-center items-center">
      <div className="h-[332px] w-[1440px] flex flex-col items-center gap-5">
        <div className="flex justify-between self-stretch px-[120px]">
          <div className="flex flex-col gap-[31px] grow">
            <img src={logo} alt="Logo" className="w-[75px] h-[85px]" />
            <p className="font-normal text-[14px] leading-[24px] text-[#3a3a3a]">
              Toursara is a vibrant community where travelers, explorers,
              <br /> and culture lovers connect to share experiences, discover
              <br /> hidden gems, and inspire one another.
            </p>
            <div className="flex items-center gap-[15px]">
              <Youtube color="#ef3a45" className="cursor-pointer" />
              <Instagram color="#ef3a45" className="cursor-pointer" />
              <Facebook color="#ef3a45" className="cursor-pointer" />
            </div>
          </div>
          <div className="flex gap-10">
            <div className="w-[150px] flex flex-col gap-3">
              <h4 className="font-bold text-base text-[#282828]">Toursara</h4>
              <ul className="flex flex-col gap-2.5">
                <li className="font-normal text-[14px] text-[#3a3a3a] cursor-pointer hover:text-[#ef3a45]">
                  Home
                </li>
                <li className="font-normal text-[14px] text-[#3a3a3a] cursor-pointer hover:text-[#ef3a45]">
                  About Us
                </li>
                <li className="font-normal text-[14px] text-[#3a3a3a] cursor-pointer hover:text-[#ef3a45]">
                  About Cambodia
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-base text-[#282828]">Contact</h4>
              <ul className="flex flex-col gap-2.5">
                <li className="flex items-center gap-2">
                  <Phone color="#ef3a45" />
                  <span className="font-normal text-[14px] text-[#3a3a3a] cursor-pointer">
                    +855 12 345 678
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <AtSign color="#ef3a45" />
                  <span className="font-normal text-[14px] text-[#3a3a3a] cursor-pointer">
                    example@toursara.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <span className="w-full h-[1.5px] bg-[#DFDFDF]"></span>
        <div className="flex justify-between self-stretch px-[120px]">
          <p className="font-normal text-[14px] text-[#3a3a3a]">
            © 2023 Toursara. All rights reserved.
          </p>
          <p className="font-normal text-[14px] text-[#3a3a3a]">
            Terms of Service
            <span className="inline-block mx-[25px]"></span>
            Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
