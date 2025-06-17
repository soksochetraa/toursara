import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HeroBg from "../assets/images/bg_hero_section_explore.jpg";
import ProvinceContainer from "../components/container/ProvincesContainer";
import DestinationsContainer from "../components/container/DestinationsContainer";
import GoogleMapComponent from "../components/cards/GoogleMapComponent";
import provinces from "../data/provinces";
import CardExploreFestival from "../components/cards/CardExploreFestival";
import HotelHighlightCard from "../components/cards/HotelHighlightCard";
import YouTubePlayer from "../components/media/YoutubePlayer";

function Explore() {
  const [activeDestination, setActiveDestination] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAmenity, setSelectedAmenity] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const guideStats = [
    { number: "80+", label: "Professional Guide" },
    { number: "150+", label: "Happy Travelers" },
    { number: "250+", label: "Destinations" },
    { number: "1", label: "Year Experience" },
  ];

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

  const [isVideoClicked, setIsVideoClicked] = useState(false);
  const handleVideoClick = () => {
    setIsVideoClicked(true);
  };

  return (
    <>
      <section
        className="absolute top-0 h-[590px] w-full flex flex-col justify-center items-center gap-[50px] px-[50px] py-2.5 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div className="flex flex-col items-center justify-center gap-2.5">
          <h1 className="font-medium text-[70px] leading-[84px] text-center text-[#58A6A0]">
            Find Next Place To Visit
          </h1>
          <p className="font-normal text-[14px] text-center text-[#222222]">
            Discover amazing places at exclusive deals. Eat, Shop, Visit
            <br />
            interesting places around the world.
          </p>
        </div>
      </section>

      <section className="w-full mt-[380px] flex flex-col justify-center items-center gap-[18px] py-[30px]">
        <div className="w-full flex flex-col justify-center items-center gap-2.5 px-[30px] pb-[50px]">
          <h1 className="w-[1440px] text-center font-bold text-[32px] text-[#222222]">
            Explore Cambodia's Gems
          </h1>
          <p className="w-[1120px] font-normal text-[16px] text-center text-[#363636]">
            Angkor is one of the most important archaeological sites in
            South-East Asia. Stretching over some 400 km2, including forested
            area, Angkor Archaeological Park contains the magnificent remains of
            the different capitals of the Khmer Empire, from the 9th to the 15th
            century.
          </p>
          <div
            className="relative object-cover py-[30px]"
            onClick={handleVideoClick}
          >
            <YouTubePlayer
              videoSrc="https://www.youtube.com/embed/gIebg7rI-rM?si=lhTwFRLvAik0FsBj"
              w="1200px"
              h="520px"
              autoplay={false}
            />
            {!isVideoClicked && (
              <div className="absolute w-[1200px] flex items-center justify-center gap-5 top-[80%]">
                {guideStats.map((stat, i) => (
                  <div
                    key={i}
                    className="w-[211px] h-[149px] flex flex-col justify-center items-center bg-[#58a6a0] rounded-2xl shadow-2xl"
                  >
                    <h1 className="text-[32px] text-center text-[#f0f0f0]">
                      {stat.number}
                    </h1>
                    <p className="font-normal text-[20px] text-center text-[#f0f0f0]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="w-[1440px] flex flex-col justify-center items-center gap-5 pb-[20px]">
          <h1 class="w-[1440px] text-start font-bold text-[32px] text-[#222222]">
            Experience the Colors, Culture, and Charm of Cambodia's Festivals!
          </h1>
          <p class="w-[1440px] font-normal text-[20px] text-start text-[#363636]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            felis id mi consectetur feugiat.{" "}
          </p>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-[10px] flex-wrap">
            <CardExploreFestival
              title="Bon Om Touk"
              location="Phnom Penh, November"
              image="https://thebettercambodia.com/wp-content/uploads/2023/11/dreamstime_xl_43951988.jpg"
              w="430px"
              h="450px"
            />
            <CardExploreFestival
              title="Pchum Ben"
              location="Nationwide, Sept - Oct"
              image="https://www.khmertimeskh.com/wp-content/uploads/2024/10/100509.jpg"
              w="430px"
              h="450px"
            />
            <CardExploreFestival
              title="Royal Ploughing Ceremony"
              location="Phnom Penh, May"
              image="https://static.officeholidays.com/images/935x475c/cambodia-royal-plowing-01.jpg"
              w="430px"
              h="450px"
            />
          </div>
        </div>
        <div className="w-[1440px] flex flex-col items-center justify-start py-[30px]">
          <h1 className="w-[1440px] font-bold text-[32px] text-[#222222]">
            Heritage
          </h1>
          <p className="w-[1440px] font-normal text-[20px] text-start text-neutral-600">
            Discover the rich heritage of Cambodia through its ancient temples,
            sacred sites, and timeless architecture.
          </p>

          <div className="w-[1440px] flex justify-center items-center gap-[10px] mt-[10px] px-[30px] flex-wrap">
            <HotelHighlightCard
              w="430px"
              h="280px"
              image="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqySiBRZ_79aQhQqAYY_Z71XkYeA2_6Z4srySCwL96uMFCO_wLo6cNSP9ZPjCKPn8qr2vY11zPZ0HMV53MR-f1T_AfjkheRQZCTHaAQr3Y3Q-Uw5W4YC0-CSKaFeEtjX91UZy0f=s1360-w1360-h1020-rw"
              title="Angkor Wat"
              location="Siem Reap, Cambodia"
              rating={0}
            />
            <HotelHighlightCard
              w="430px"
              h="280px"
              image="https://goldentemple.asia/hotel/wp-content/uploads/2017/03/Main6-qpr.jpg"
              title="Bayon Temple"
              location="Angkor Thom, Siem Reap"
              rating={0}
            />
            <HotelHighlightCard
              w="430px"
              h="280px"
              image="https://www.angkorenterprise.gov.kh/upload/images/1546938358291.jpg"
              title="Banteay Srei"
              location="Siem Reap, Cambodia"
              rating={0}
            />
          </div>
        </div>

        <div className="w-[1440px] flex flex-col items-center justify-start py-[30px]">
          <h1 className="w-[1440px] font-bold text-[32px] text-[#222222]">
            Nature & Beach
          </h1>
          <p className="w-[1440px] font-normal text-[20px] text-start text-neutral-600">
            Explore Cambodia's stunning natural landscapes, pristine beaches,
            and vibrant marine life.
          </p>

          <div className="w-[1440px] flex justify-center items-center gap-[10px] mt-[10px] px-[30px] flex-wrap">
            <HotelHighlightCard
              w="430px"
              h="280px"
              image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/ad/94/c1/the-first-foreign-business.jpg?w=1200&h=-1&s=1"
              title="Otres Beach"
              location="Sihanoukville, Cambodia"
              rating={0}
            />
            <HotelHighlightCard
              w="430px"
              h="280px"
              image="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRV6wngWA9N_KkmMnatBFD_3G7tI0uohlFazpt2hnpEK7hqxy9cp2X0dDYSW3nGwfK08mBz3lsOuvDwVIREBgcP-pDFQst-W4UlQrWLwA"
              title="Kampong Phluk"
              location="Floating Village, Tonlé Sap Lake"
              rating={0}
            />
            <HotelHighlightCard
              w="430px"
              h="280px"
              image="https://www.mrlinhadventure.com/UserFiles/image/Cambodia-highlights/Bokor-National-Park1.jpg"
              title="Bokor National Park"
              location="Kampot, Cambodia"
              rating={0}
            />
          </div>
        </div>
        <div className="w-[1440px] flex flex-col items-center justify-start py-[30px]">
          <h1 className="w-[1440px] font-bold text-[32px] text-[#222222]">
            Adventure
          </h1>
          <p className="w-[1440px] font-normal text-[20px] text-start text-neutral-600">
            Experience the thrill of adventure in Cambodia's diverse landscapes,
            from mountains to rivers and everything in between.
          </p>

          <div className="w-[1440px] flex justify-center items-center gap-[10px] mt-[10px] px-[30px] flex-wrap">
            <HotelHighlightCard
              w="430px"
              h="280px"
              image="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcT8M2gxSkFbrVlBu_sshdcZIXs_cAAXp-kxgLq3qREAGdHR8DHHSJUf8xGvWGtGdbkDlNnMZuw-ThygoQyjxRt5e9snBHCxbBNg4kC9cA"
              title="Cardamom Mountain"
              location="Southwest Cambodia"
              rating={0}
            />
            <HotelHighlightCard
              w="430px"
              h="280px"
              image="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrF5HTiGnfliQbqcJUiK3LDAPE7Aj48uUxumhejDSyS-0SIfbOVAUzGCKiMPgbkNP6RvdfXNWlhc6aA-Moq3eIm4P4KWWS1RE6ZoANDqaNaqvINj3c7B3TcCrv2ko2jL3ZVvNmi=s1360-w1360-h1020-rw"
              title="Bou Sra Waterfall"
              location="Mondulkiri Province"
              rating={0}
            />
            <HotelHighlightCard
              w="430px"
              h="280px"
              image="https://www.countrysidediscovery.com/wp-content/uploads/2018/06/IMG20190711102955.jpg"
              title="Mekong River"
              location="Kratié, Cambodia"
              rating={0}
            />
          </div>
        </div>

        <div>
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
        </div>
      </section>

      <section className="w-full flex flex-col justify-center items-center gap-[18px] p-[30px]">
        <div className="flex items-center justify-center gap-2.5 self-stretch p-[30px]">
          <h1 className="w-[1440px] text-start font-bold text-[32px] text-[#222222]">
            Search to Explore.
          </h1>
        </div>
        <div
          id="search-section"
          className="w-full flex justify-center items-start gap-[18px] p-[30px]"
          style={{
            transform: "scale(0.85)",
            transformOrigin: "top center",
            width: "117.65%",
            height: "117.65%",
          }}
        >
          <div className=" flex flex-col gap-4 px-10 pb-10">
            <div className="w-[870px] h-[48px] flex items-center gap-4 self-stretch bg-white pl-6 pr-1 py-1 rounded-full border border-solid border-gray-200">
              <input
                className="w-full outline-none text-base text-[14px]"
                type="text"
                placeholder="Search something..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>

            <DestinationsContainer
              searchQuery={searchQuery}
              selectedAmenity={selectedAmenity}
              onCardClick={(destination) => {
                setActiveDestination(destination);
              }}
            />
          </div>
          <GoogleMapComponent
            activeDestination={activeDestination}
            width="600px"
            height="890px"
          />
        </div>
      </section>
    </>
  );
}

export default Explore;
