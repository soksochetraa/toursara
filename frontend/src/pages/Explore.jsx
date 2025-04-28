import React from "react";
import HeroBg from "../assets/images/bg_hero_section_explore.jpg";
import ProvinceContainer from "../components/container/ProvincesContainer";
import provinces from "../data/provinces";

function Explore() {
  return (
    <>
      <section
        className="absolute top-0 h-[672px] w-full flex flex-col justify-center items-center gap-[50px] px-[50px] py-2.5 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${HeroBg})`,
        }}
      >
        <div className="flex flex-col items-center justify-center gap-2.5">
          <h1 className="font-medium text-[70px] leading-[84px] text-center text-[#ef3a45]">
            Find Next Place To Visit
          </h1>
          <p className="font-normal text-[14px] text-center text-[#222222]">
            Discover amazing places at exclusive deals. Eat, Shop, Visit
            <br />
            interesting places around the world.
          </p>
        </div>
      </section>

      <section className="mt-[470px] flex flex-col items-start gap-[18px] p-[30px]">
        <h1 className="font-bold text-[32px] text-[#222222]">
          Explore Cambodia's Province
        </h1>
        <ProvinceContainer provinces={provinces} />
      </section>
    </>
  );
}

export default Explore;
