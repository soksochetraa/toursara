import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroBg from "../assets/images/bg_hero_section_explore.jpg";
import ProvinceContainer from "../components/container/ProvincesContainer";
import provinces from "../data/provinces";
import DestinationsContainer from "../components/container/DestinationsContainer";
import GoogleMapComponent from "../components/cards/GoogleMapComponent";

function Explore() {
  const [activeDestination, setActiveDestination] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAmenity, setSelectedAmenity] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.state?.search) {
      setSearchQuery(location.state.search);
      document
        .getElementById("search-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.state]);

  const handleSearchClick = () => {
    setSearchQuery(searchQuery);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <>
      <section
        className="absolute top-0 h-[590px] w-full flex flex-col justify-center items-center gap-[50px] px-[50px] py-2.5 bg-cover bg-no-repeat bg-center"
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

      <section className="w-full mt-[470px] flex flex-col justify-center items-center gap-[18px] p-[30px]">
        <h1 className="w-[1440px] text-start font-bold text-[32px] text-[#222222]">
          Explore Cambodia's Province
        </h1>
        <div className="w-[1440px] overflow-x-auto">
          <div className="flex flex-nowrap gap-4">
            <ProvinceContainer
              provinces={provinces}
              onProvinceClick={(name) => {
                setSearchQuery(name);
                document
                  .getElementById("search-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-center gap-2.5 self-stretch p-[30px]">
          <h1 className="w-[1440px] text-start font-bold text-[32px] text-[#222222]">
            Search to Explore.
          </h1>
        </div>

        <div
          id="search-section"
          className="w-full flex justify-center items-start gap-[18px] p-[30px]"
          style={{
            transform: "scale(0.75)",
            transformOrigin: "top left",
            width: "133.3333%",
            height: "133.3333%",
          }}
        >
          <div className="w-[840px] flex flex-col gap-4 px-10 pb-10">
            <div className="w-[760px] h-[48px] flex items-center gap-4 self-stretch bg-white pl-6 pr-1 py-1 rounded-full border border-solid border-gray-200">
              <input
                className="w-full outline-none text-base text-[14px]"
                type="text"
                placeholder="Search something..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <p className="font-normal text-base text-gray-500">
              200+ Destinations to explore.
            </p>

            <DestinationsContainer
              searchQuery={searchQuery}
              selectedAmenity={selectedAmenity}
              onCardClick={(destination) => {
                setActiveDestination(destination);
                navigate("/explore/detail");
              }}
            />
          </div>
          <GoogleMapComponent activeDestination={activeDestination} />
        </div>
      </section>
    </>
  );
}

export default Explore;
