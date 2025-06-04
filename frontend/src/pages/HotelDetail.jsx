import { useState } from "react";
import { Sparkles, Leaf, Wifi, Microwave, Bone } from "lucide-react";
import { DateRange } from "react-date-range";
import { format, differenceInCalendarDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import SmallMap from "../components/cards/SmallMap";
import ReviewerContainer from "../components/container/ReviewerContainer";

const NIGHTLY_PRICE = 75;

function HotelDetail() {
  const [expanded, setExpanded] = useState(false);
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [guests, setGuests] = useState(1);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const nights = Math.max(
    differenceInCalendarDays(dateRange[0].endDate, dateRange[0].startDate),
    1
  );
  const totalPrice = nights * NIGHTLY_PRICE;

  const [isOpen, setIsOpen] = useState(false);
  const options = [1, 2, 3, 4, 5];

  const handleSelect = (value) => {
    setGuests(value);
    setIsOpen(false);
  };

  const fullText = `Come and stay in this superb duplex T2, in the heart of the
historic center of Bordeaux. Spacious and bright, in a real
Bordeaux building in exposed stone, you will enjoy all the charms
of the city thanks to its ideal location. Close to many shops,
bars and restaurants, you can access the apartment by tram A and C
and bus routes 27 and 44. lorem ipsum dolor sit amet, consectetur adipiscing elit. Come and stay in this superb duplex T2, in the heart of the
historic center of Bordeaux. Spacious and bright, in a real
Bordeaux building in exposed stone, you will enjoy all the charms
of the city thanks to its ideal location. Close to many shops,
bars and restaurants, you can access the apartment by tram A and C
and bus routes 27 and 44. lorem ipsum dolor sit amet, consectetur adipiscing elit.Come and stay in this superb duplex T2, in the heart of the
historic center of Bordeaux. Spacious and bright, in a real
Bordeaux building in exposed stone, you will enjoy all the charms
of the city thanks to its ideal location. Close to many shops,
bars and restaurants, you can access the apartment by tram A and C
and bus routes 27 and 44. lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

  const shortText = fullText.substring(0, 200);

  return (
    <>
      <section className="flex flex-col items-center justify-start gap-[30px]">
        <div className="w-[1120px] flex flex-col gap-2">
          <h2 className="font-medium text-[30px] leading-[40px] text-black">
            Bordeaux Getaway
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Sparkles color="#DE3151" />
              <h4 className="font-medium text-xl text-black">5.0</h4>
            </div>
            <h4 className="font-medium text-xl underline text-black">
              700 reviews
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-[8px]">
          <img
            className="w-[556px] h-[400px] object-cover rounded-bl-[16px] rounded-tl-[16px]"
            src="https://images.pexels.com/photos/31974890/pexels-photo-31974890/free-photo-of-tropical-resort-poolside-with-lush-greenery.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <div className="flex flex-col items-center gap-[8px]">
            <img
              className="w-[274px] h-[196px] object-cover"
              src="https://images.pexels.com/photos/31967701/pexels-photo-31967701/free-photo-of-cozy-modern-hotel-room-interior-at-night.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <img
              className="w-[274px] h-[196px] object-cover"
              src="https://images.pexels.com/photos/31976099/pexels-photo-31976099/free-photo-of-rustic-stone-wall-with-floral-decor-and-signage.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center gap-[8px]">
            <img
              className="w-[274px] h-[196px] object-cover rounded-tr-[16px]"
              src="https://images.pexels.com/photos/8081396/pexels-photo-8081396.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
            <img
              className="w-[274px] h-[196px] object-cover rounded-br-[16px]"
              src="https://img.freepik.com/free-photo/spa-pool-sky-leisure-background_1203-4946.jpg?t=st=1746637370~exp=1746640970~hmac=3180adc513e712efafaca18016f712f43f9f9891439cfd0fea467274c2f6b0e7&w=1380"
              alt=""
            />
          </div>
        </div>

        <section className="w-[1120px] flex gap-20">
          <div className="flex flex-col gap-8 grow">
            <div className="flex items-start gap-4">
              <div className="flex flex-col gap-8 grow">
                <h2 className="font-medium text-2xl text-black">
                  Entire rental unit hosted by Ghazal
                </h2>
                <p className="w-[670px] font-regular text-[14px] text-black">
                  {expanded ? fullText : shortText}
                  <span
                    className="pt-5 flex items-center text-[#58A6A0] cursor-pointer hover:underline w-fit"
                    onClick={() => setExpanded(!expanded)}
                  >
                    {expanded ? "See less..." : "See more..."}
                  </span>
                </p>
                <div className="w-[670px] h-[2px] bg-[#E5E7EB] rounded-full"></div>
                <div className="flex flex-col gap-8">
                  <h2 className="font-medium text-2xl text-black">
                    What this place offers
                  </h2>
                  <div className="flex gap-6">
                    <div className="w-[323px] flex flex-col gap-4">
                      <span className="flex items-center gap-4 font-normal text-base text-black">
                        <Leaf color="#DE3151" />
                        Garden view
                      </span>
                      <span className="flex items-center gap-4 font-normal text-base text-black">
                        <Wifi color="#DE3151" />
                        Free Wi-Fi
                      </span>
                    </div>
                    <div className="w-[323px] flex flex-col gap-4">
                      <span className="flex items-center gap-4 font-normal text-base text-black">
                        <Microwave color="#DE3151" />
                        Kitchen
                      </span>
                      <span className="flex items-center gap-4 font-normal text-base text-black">
                        <Bone color="#DE3151" />
                        Pet Allowed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[370px] h-[auto] flex flex-col items-center gap-4 bg-white p-6 rounded-lg border border-solid border-gray-200 box-border relative">
                <div className="w-full flex justify-between items-center">
                  <h3 className="font-medium text-[20px] text-black">
                    ${NIGHTLY_PRICE} / night
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4">
                        <Sparkles size={14} color="#DE3151" />
                      </div>
                      <span className="font-medium text-sm text-black">
                        5.0
                      </span>
                    </div>
                    <span className="font-medium text-sm underline text-black">
                      70 reviews
                    </span>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-3">
                  <label className="flex flex-col  text-sm text-gray-600 relative">
                    Dates
                    <button
                      onClick={() => setOpenDatePicker(!openDatePicker)}
                      className="cursor-pointer h-[50px] mt-1 py-2 px-5 border border-gray-300 rounded-md text-black text-left hover:border-[#58A6A0] focus:border-[#58A6A0] focus:ring-[#58A6A0] focus:outline-none transition-colors"
                    >
                      {`${format(
                        dateRange[0].startDate,
                        "dd MMM yyyy"
                      )} → ${format(dateRange[0].endDate, "dd MMM yyyy")}`}
                    </button>
                    {openDatePicker && (
                      <div className="absolute top-[60px] left-0 z-50 bg-white shadow-lg rounded-md border border-gray-200">
                        <DateRange
                          editableDateInputs={true}
                          onChange={(item) => setDateRange([item.selection])}
                          moveRangeOnFirstSelection={false}
                          ranges={dateRange}
                          className="text-[18px]"
                          rangeColors={["#58A6A0"]}
                        />
                      </div>
                    )}
                  </label>

                  <div className="relative w-[100%]">
                    <label className="block text-sm text-gray-600 mb-1">
                      Guests
                    </label>
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="cursor-pointer w-full h-[50px] flex items-center justify-between px-5 py-3 border border-[#e0e0e0] bg-white text-black rounded-md hover:border-[#58A6A0] focus:border-[#58A6A0] transition-colors"
                    >
                      <span className="text-left">
                        {guests
                          ? `${guests} Guest${guests > 1 ? "s" : ""}`
                          : "Select Guests"}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-500"
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
                      <div className="absolute w-full mt-2 bg-white border border-[#e0e0e0] rounded-md shadow-md z-20">
                        {options.map((option) => (
                          <div
                            key={option}
                            className="px-5 py-3 cursor-pointer hover:bg-[#58A6A0]/10 hover:text-[#58A6A0] transition-colors"
                            onClick={() => handleSelect(option)}
                          >
                            {option} Guest{option > 1 ? "s" : ""}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="w-full text-left text-gray-700 text-sm">
                  <p>
                    <strong>{nights}</strong> night{nights > 1 ? "s" : ""} × $
                    {NIGHTLY_PRICE} ={" "}
                    <strong className="text-black">${totalPrice}</strong>
                  </p>
                </div>

                <button className="mt-2 w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition">
                  Book Now
                </button>
              </div>
            </div>
            <div className="w-[1120px] h-[2px] bg-[#E5E7EB] rounded-full"></div>
            <h2 className="font-medium text-2xl text-black">Where you'll be</h2>
            <SmallMap
              width="100%"
              height="480px"
              borderRadius="16px"
              lat={48.8566}
              lng={2.3522}
              title="Charming Paris Apartment"
              province="Paris, France"
              imageUrl="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg"
              radius={800}
            />
          </div>
        </section>
        <div className="w-[1120px] h-[2px] bg-[#E5E7EB] rounded-full"></div>
        <h2 className="w-[1120px] font-medium text-2xl text-black">
          What are they saying about this place?
        </h2>
        <div className="w-[1120px] flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Sparkles color="#DE3151" />
            <h4 className="font-medium text-xl text-black">5.0</h4>
          </div>
          <h4 className="font-medium text-xl underline text-black">
            700 reviews
          </h4>
        </div>
        <ReviewerContainer />
      </section>
    </>
  );
}

export default HotelDetail;
