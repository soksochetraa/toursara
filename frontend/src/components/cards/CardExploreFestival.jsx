import React from "react";
import arrow from "../../assets/images/arrow_hotel.svg";

export default function CardExploreFestival({
  w = "780px",
  h = "615px",
  image,
  title,
  location,
}) {
  const width = parseInt(w);
  const height = parseInt(h);

  return (
    <div
      className="cursor-pointer overflow-hidden relative flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center rounded-lg group"
      style={{
        backgroundImage: `url(${image})`,
        width: width,
        height: height,
      }}
    >
      <p className="z-10 w-full h-[70px] text-white font-lato text-[30px] font-[700] absolute top-[80%] left-[10px] group-hover:top-[70%] transition-all duration-300">
        {title}
      </p>

      <span className="z-10 flex gap-5 w-full h-[32px] text-white font-lato pt-[12px] text-[18px] font-[500] absolute bottom-0 left-[10px] opacity-0 group-hover:opacity-100 group-hover:bottom-[17%] transition-all duration-300">
        {location}
      </span>

      <span className="z-0 absolute opacity-35 w-full h-full bg-gradient-to-b from-black to-black px-[23px] py-[50px] rounded-lg" />
    </div>
  );
}
