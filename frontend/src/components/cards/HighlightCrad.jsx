import React from "react";
function HighlightCrad(props) {
  return (
    <div>
      <div
        className="w-[455px] h-[300px] relative group rounded-[16px] cursor-pointer"
        style={{ backgroundImage: `url(${props.bgImg})` }}
      >
        <p className="w-[363px] h-[71px] text-white font-Lato text-[28px] font-[600] absolute top-[170px] left-[10px] group-hover:top-[156px] transition-all duration-300 ">
          {props.text}
          <span className="text-[#45807b]">.</span>
        </p>
        <p className="w-[174px] h-[32px] text-white font-  pt-[10px] text-[12px] absolute bottom-0 left-[10px] opacity-0 group-hover:opacity-100 group-hover:bottom-[30px] transition-all duration-300">
          200 hotels, and 234 bus <br /> providers
        </p>

        <button className="flex justify-center items-center w-[125px] h-[39px] rounded-[50px] bg-[#45807b] text-white font-Lato text-[12px] font-[600] cursor-pointer absolute left-[315px] top-[231px] active:bg-white active:text-[#45807b] active:scale-95 ">
          Explore
        </button>
      </div>
    </div>
  );
}

export default HighlightCrad;
