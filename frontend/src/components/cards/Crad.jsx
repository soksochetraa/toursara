import React from "react";
function Card(props) {
  return (
    <div>
      <div
        className="w-[455px] h-[300px] relative group"
        style={{ backgroundImage: `url(${props.bgImg})` }}
      >
        <p className="w-[363px] h-[71px] text-white font-lato text-[28px] font-[600] absolute top-[170px] left-[10px] group-hover:top-[156px] transition-all duration-300 ">
          {props.text}
          <span className="text-[#EF3A45]">.</span>
        </p>
        <p className="w-[174.736px] h-[32.863px] text-white font-poppins  pt-[10px] text-[11.222px] absolute bottom-0 left-[10px] opacity-0 group-hover:opacity-100 group-hover:bottom-[30px] transition-all duration-300">
          200 hotels, and 234 bus <br /> providers
        </p>

        <button className="flex justify-center items-center w-[125px] h-[39px] rounded-[50px] bg-[#EF3A45] text-white font-lato text-[12.825px] font-[600] cursor-pointer absolute left-[315px] top-[231px] active:bg-white active:text-[#EF3A45] active:scale-95 ">
          Explore
        </button>
      </div>
    </div>
  );
}

export default Card;
