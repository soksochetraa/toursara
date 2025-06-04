import React from "react";

const Button = ({ text, ariaLabel, className, onClick = () => {} }) => {
  return (
    <div className="flex flex-col justify-center items-center w-[225px] h-[75px] gap-2.5">
      <button
        onClick={onClick}
        className={`relative flex items-center justify-center h-[56px] w-[225px] px-[50px] py-[10px] 
        bg-[#58A6A0] text-white border-[1.5px] border-[#58A6A0] rounded-lg font-medium text-base mt-5 
        overflow-hidden z-10 group cursor-pointer transition-all duration-300 
        hover:shadow-[0px_7px_20px_0px_rgba(0,0,0,0.15)] 
        active:shadow-none 
        ${className}`}
        aria-label={ariaLabel}
      >
        <span className="font-medium transition-all duration-300 group-hover:text-[#58A6A0]">
          {text}
        </span>
        <span className="absolute top-[100%] left-[100%] w-[300px] h-[150px] bg-white rounded-full z-[-1] transition-all duration-300 group-hover:top-[-30px] group-hover:left-[-30px]"></span>
      </button>
    </div>
  );
};

export default Button;
