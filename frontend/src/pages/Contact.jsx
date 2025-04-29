import Button from "../components/buttons/ButtonGetStart";
import SmallMap from "../components/cards/SmallMap";
import React, { useState } from "react";

function Contact() {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <section className="w-full h-[900px] bg-white flex justify-center items-center">
      <div className="w-[1440px] h-[900px] relative bg-white flex justify-center items-center">
        <div className="w-[1020px] h-[900px] flex items-center justify-center">
          <form
            className="flex flex-col items-center justify-center gap-10"
            action=""
          >
            <div className="w-[545px] flex flex-col items-end gap-5">
              <h1 className="w-[545px] font-bold text-[54px]">Get in Touch</h1>
              <p className="font-semibold text-[14px] leading-[24px] text-black">
                Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
                leo molestie vel, ornare non id blandit netus.
              </p>
              <input
                type="text"
                id="username"
                placeholder="Name"
                className="w-[545px] h-[50px] flex items-center gap-2.5 px-5 py-3 border border-solid border-[#e0e0e0]"
              />
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-[545px] h-[50px] flex items-center gap-2.5 px-5 py-3 border border-solid border-[#e0e0e0]"
              />
              <div className="relative w-[545px]">
                <button
                  onClick={(e) => toggleDropdown(e)}
                  className="w-full h-[50px] flex items-center justify-between cursor-pointer px-5 py-3 border border-solid border-[#e0e0e0] bg-white text-black rounded-md"
                >
                  <span>{selectedOption || "How did you find us?"}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-[#888]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div className="absolute w-full mt-1 bg-white border border-solid border-[#e0e0e0] rounded-md shadow-lg z-20">
                    <div
                      className="px-5 py-3 hover:bg-[#f0f0f0] cursor-pointer"
                      onClick={() => handleSelectOption("Search Engine")}
                    >
                      Search Engine
                    </div>
                    <div
                      className="px-5 py-3 hover:bg-[#f0f0f0] cursor-pointer"
                      onClick={() => handleSelectOption("Social Media")}
                    >
                      Social Media
                    </div>
                    <div
                      className="px-5 py-3 hover:bg-[#f0f0f0] cursor-pointer"
                      onClick={() => handleSelectOption("Friend")}
                    >
                      Friend
                    </div>
                    <div
                      className="px-5 py-3 hover:bg-[#f0f0f0] cursor-pointer"
                      onClick={() => handleSelectOption("Advertisement")}
                    >
                      Advertisement
                    </div>
                    <div
                      className="px-5 py-3 hover:bg-[#f0f0f0] cursor-pointer"
                      onClick={() => handleSelectOption("Other")}
                    >
                      Other
                    </div>
                  </div>
                )}
              </div>
              <textarea
                id="message"
                placeholder="Your message"
                className="w-[545px] h-[150px] resize-none px-5 py-3 border border-solid border-[#e0e0e0] rounded-md"
              />
              <Button type="submit" text="Submit" ariaLabel="Submit Button" />
            </div>
          </form>
        </div>
        <div className="absolute right-[100px] top-0 w-[520px] h-[900px] flex justify-center items-center">
          <SmallMap />
        </div>
        <div className="w-[419px] h-[900px] bg-[#ef3a45]"></div>
      </div>
    </section>
  );
}

export default Contact;
