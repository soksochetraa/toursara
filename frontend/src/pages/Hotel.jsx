import HeroBg from "../assets/images/bg_hero_section_explore.jpg";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import HotelsContainer from "../components/container/HotelsContainer";
import GoogleMapComponent from "../components/cards/GoogleMapComponent";
import hotels from "../data/hotels";
import HotelHighlightCard from "../components/cards/HotelHighlightCard";

import {
  Hotel,
  Wifi,
  Coffee,
  Car,
  ChevronLeft,
  ChevronRight,
  Utensils,
  Dumbbell,
  Bath,
  Tv,
  AirVent,
  ParkingCircle,
  Leaf,
} from "lucide-react";

function HotelPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAmenity, setSelectedAmenity] = useState("");
  const [activeDestination, setActiveDestination] = useState(null);
  const [startIndex, setStartIndex] = useState(0);

  const handleLikeToggle = () => {
    console.log("Like toggled");
  };

  const hotelImage =
    "https://images.unsplash.com/photo-1560185127-6c8b1f0d3e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

  const navigate = useNavigate();

  const visibleCount = 5;
  const buttonGap = 12;
  const buttonWidth = 80;
  const totalButtonWidth = buttonWidth + buttonGap;

  const amenityIcons = {
    WIFI: Wifi,
    Breakfast: Coffee,
    Parking: ParkingCircle,
    Conditioner: AirVent,
    TV: Tv,
    Gym: Dumbbell,
    Bath: Bath,
    Restaurant: Utensils,
    Shuttle: Car,
    Eco: Leaf,
  };

  const allAmenities = useMemo(() => {
    const set = new Set();
    hotels.forEach((hotel) => {
      hotel.amenities?.forEach((a) => set.add(a.trim()));
    });
    return Array.from(set);
  }, []);

  const maxStartIndex = Math.max(0, allAmenities.length - visibleCount);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("Search triggered for:", searchQuery);
    }
  };

  return (
    <>
      <section
        className="absolute top-0 h-[590px] w-full flex flex-col justify-center items-center gap-[50px] px-[50px] py-2.5 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(https://i.pinimg.com/736x/98/8a/64/988a64a96b23993217a11c8744e39166.jpg)`,
        }}
      >
        <div className="flex flex-col items-center justify-center gap-2.5">
          <h1 className="font-medium text-[70px] leading-[84px] text-center text-[#58A6A0]">
            Find Next Place To Stays
          </h1>
          <p className="font-normal text-[14px] text-center text-[#222222]">
            Discover amazing places at exclusive deals. Eat, Shop, Visit
            <br />
            interesting places around the world.
          </p>
        </div>
      </section>

      <div className="w-full flex flex-col items-center justify-center mt-[420px]">
        <div className="w-[1320px] flex flex-col items-start justify-start">
          <h1 className="px-[30px] font-bold text-[46px] text-[#222222]">
            Our Most Amazing Visited Hotel on 2025!
          </h1>
          <p className="font-normal text-[20px] text-center text-neutral-600 px-[30px]">
            Discover the best places to stay across Cambodia—from timeless
            colonial elegance to luxurious modern retreats.
          </p>
          <div className="px-[30px] flex justify-center items-start gap-[10px] mt-[10px]">
            <HotelHighlightCard
              w="780px"
              h="615px"
              image="https://lh3.googleusercontent.com/p/AF1QipOJ0dNJHPNI_SIbWa_SPkJHie1YGL_yRq3iHFzC=s1360-w1360-h1020-rw"
              title="Raffles Hotel Le Royal"
              location="Phnom Penh, Cambodia"
              rating={4.9}
            />
            <div className="flex flex-col gap-[10px]">
              <HotelHighlightCard
                w="518px"
                h="302px"
                image="https://lh3.googleusercontent.com/p/AF1QipM3nRdNJq4R-P-onbuF2VBcWxHwib9FqlaASUwf=s1360-w1360-h1020-rw"
                title="Rosewood Phnom Penh"
                location="Phnom Penh, Cambodia"
                rating={4.8}
              />
              <HotelHighlightCard
                w="518px"
                h="302px"
                image="https://lh3.googleusercontent.com/p/AF1QipMVSPedeR0DE6Li7sMp5npdFeSNELSo42mJw6Al=s1360-w1360-h1020-rw"
                title="Hyatt Regency Phnom Penh"
                location="Phnom Penh, Cambodia"
                rating={4.7}
              />
            </div>
          </div>
        </div>
        <div className="w-[1320px] flex flex-col items-start justify-start py-[30px]">
          <h1 className="px-[30px] font-bold text-[32px] text-[#222222]">
            City
          </h1>
          <p className="font-normal text-[20px] text-center text-neutral-600 px-[30px]">
            Explore the best hotels in the city with our curated list of top
            destinations. From luxury resorts to cozy homestays, find the
            perfect place to stay.
          </p>
          <div className="px-[30px] flex justify-center items-start gap-[10px] mt-[10px]">
            <HotelHighlightCard
              w="430px"
              h="280px"
              image="https://lh3.googleusercontent.com/p/AF1QipMNsLizxJA61GJ4R-ovWedVo3orJA8l3BuFHhV5=s1360-w1360-h1020-rw"
              title="Sofitel Phnom Penh Phokeethra"
              location="Phnom Penh, Cambodia"
              rating={4.6}
            />
            <HotelHighlightCard
              w="430px"
              h="280px"
              image="https://lh3.googleusercontent.com/p/AF1QipNj01TAmhLWF55R8vWWKeXKdQrw7lDy2DDYMY5x=s1360-w1360-h1020-rw"
              title="Plantation Urban Resort & Spa"
              location="Phnom Penh, Cambodia"
              rating={4.5}
            />
            <HotelHighlightCard
              w="430px"
              h="280px"
              image="https://cdn.palacegatepp.com/wp-content/uploads/2023/02/Palace-Gate-Hotel-Pool.png"
              title="Palace Gate Hotel & Resort"
              location="Phnom Penh, Cambodia"
              rating={4.5}
            />
          </div>
        </div>
        <div className="w-[1320px] flex flex-col items-start justify-start py-[30px]">
          <h1 className="px-[30px] font-bold text-[32px] text-[#222222]">
            Beach
          </h1>
          <p className="font-normal text-[20px] text-center text-neutral-600 px-[30px]">
            Relax and unwind at the best beach hotels with stunning views and
            top-notch amenities.
          </p>
          <div className="px-[30px] flex justify-center items-start gap-[10px] mt-[10px]">
            <HotelHighlightCard
              w="430px"
              h="280px"
              image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/4b/94/70/aussicht.jpg?w=900&h=500&s=1"
              title="TUI BLUE Kep Resort"
              location="Kep, Cambodia"
              rating={4.3}
            />
            <HotelHighlightCard
              w="430px"
              h="280px"
              image="https://lh3.googleusercontent.com/p/AF1QipNetQ6dLfFREEKRRboKhnZm52Xe4OMeOyEb5Uy8=s1360-w1360-h1020-rw"
              title="Knai Bang Chatt"
              location="Kep, Cambodia"
              rating={4.4}
            />
            <HotelHighlightCard
              w="430px"
              h="280px"
              image="https://lh3.googleusercontent.com/p/AF1QipMRA6xID8ruJA04ZdUX7Yk6tfhIQiOPtWdXa1Fg=s1360-w1360-h1020-rw"
              title="Sokha Beach Resort"
              location="Sihanoukville, Cambodia"
              rating={4.2}
            />
          </div>
        </div>
        <div className="w-[1320px] flex flex-col items-start justify-start py-[30px]">
          <h1 className="px-[30px] font-bold text-[32px] text-[#222222]">
            Heritage
          </h1>
          <p className="font-normal text-[20px] text-center text-neutral-600 px-[30px]">
            Stay close to ancient wonders in hotels that blend modern comfort
            with cultural charm.
          </p>
          <div className="px-[30px] flex justify-center items-start gap-[10px] mt-[10px]">
            <HotelHighlightCard
              w="430px"
              h="280px"
              image="https://images.trvl-media.com/lodging/5000000/4050000/4043700/4043615/108773a3.jpg?impolicy=resizecrop&rw=1200&ra=fit"
              title="Golden Temple Hotel"
              location="Siem Reap, Cambodia"
              rating={4.9}
            />
            <HotelHighlightCard
              w="430px"
              h="280px"
              image="https://cf.bstatic.com/xdata/images/hotel/max1024x768/87262079.jpg?k=6d95c4102a74f9f0776d945237cf7791b348858b19518677269c2f32f898a0d1&o=&hp=1"
              title="Jaya House"
              location="Siem Reap, Cambodia"
              rating={4.8}
            />
            <HotelHighlightCard
              w="430px"
              h="280px"
              image="https://lh3.googleusercontent.com/p/AF1QipMrsGD0LW1y590boZ2bBxia6nHyWc1g-H3933M2=s1360-w1360-h1020-rw"
              title="Zannier Hotels"
              location="Siem Reap, Cambodia"
              rating={4.7}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2.5 self-stretch p-[30px]">
        <h2 className="px-[90px] font-bold text-[64px] leading-[45px] text-[#222222]">
          Where to stays ?
        </h2>
      </div>

      <section className="w-full flex justify-center items-start">
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
          <div className="flex flex-col gap-4 px-10 pb-10">
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

            <div className="w-[870px] mb-2 relative">
              <div className="flex items-center justify-center gap-4">
                <div
                  className="flex transition-transform duration-300"
                  style={{
                    transform: `translateX(-${
                      startIndex * totalButtonWidth
                    }px)`,
                    width: `${allAmenities.length * totalButtonWidth}px`,
                  }}
                >
                  {allAmenities.map((amenity) => {
                    const isSelected = selectedAmenity === amenity;
                    const Icon = amenityIcons[amenity] || Hotel;

                    return (
                      <div
                        key={amenity}
                        style={{
                          width: `${buttonWidth}px`,
                          marginRight: `${buttonGap}px`,
                        }}
                        className="flex flex-col pt-3 pb-2.5"
                      >
                        <div
                          onClick={() =>
                            setSelectedAmenity(isSelected ? "" : amenity)
                          }
                          className="flex flex-col items-center cursor-pointer"
                        >
                          <Icon
                            className={`w-6 h-6 mb-1 ${
                              isSelected ? "text-black" : "text-gray-400"
                            }`}
                          />
                          <span
                            className={`text-xs text-center ${
                              isSelected
                                ? "text-black font-semibold"
                                : "text-gray-500"
                            }`}
                          >
                            {amenity}
                          </span>
                          {isSelected && (
                            <div className="w-6 h-[2px] bg-black rounded-full mt-1" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <HotelsContainer
              searchQuery={searchQuery}
              selectedAmenity={selectedAmenity}
              onCardClick={(destination) => setActiveDestination(destination)}
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

export default HotelPage;
