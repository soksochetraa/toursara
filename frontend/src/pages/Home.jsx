import Button from "../components/buttons/ButtonGetStart";
import YouTubePlayer from "../components/media/YoutubePlayer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../Auth";
import { useEffect } from "react";
import React, { useState } from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Fram from "../assets/images/fram-imag.svg";
import Icon from "../assets/images/icon.svg";
import Icon1 from "../assets/images/icon_money.svg";
import Icon2 from "../assets/images/icon_world.svg";
import ImgVideo1 from "../assets/images/img_video1.svg";
import ImgVideo2 from "../assets/images/img_video2.svg";
import ImgVideo3 from "../assets/images/img_video3.svg";
import HighlightCrad from "../components/cards/HighlightCrad";
import SreyMeii from "../assets/images/Srey_Meii.svg";
import SreyRoth from "../assets/images/Srey_Roth.svg";
import SreyKa from "../assets/images/Srey_Ka.svg";
import SreyKhouch from "../assets/images/Srey_Khouch.svg";
import Kanhna from "../assets/images/Kanhna.svg";
import Lin from "../assets/images/Lin.svg";
import linda from "../assets/images/Linda.svg";
import Ly from "../assets/images/Ly.svg";
import Seav_ling from "../assets/images/Seav_ling.svg";
import Teav from "../assets/images/Teav.svg";
import Bopha from "../assets/images/Bopha.svg";
import Chanthy from "../assets/images/Chanthy.svg";

const categoryImages = {
  Cultural: [
    { src: ImgVideo1, originalIndex: 0 },
    { src: ImgVideo2, originalIndex: 1 },
    { src: ImgVideo3, originalIndex: 2 },
  ],
  Popular: [
    { src: ImgVideo2, originalIndex: 1 },
    { src: ImgVideo3, originalIndex: 2 },
    { src: ImgVideo1, originalIndex: 0 },
  ],
  Recommended: [
    { src: ImgVideo3, originalIndex: 2 },
    { src: ImgVideo1, originalIndex: 0 },
    { src: ImgVideo2, originalIndex: 1 },
  ],
  Festivals: [
    { src: ImgVideo1, originalIndex: 0 },
    { src: ImgVideo3, originalIndex: 2 },
    { src: ImgVideo2, originalIndex: 1 },
  ],
};

const highlightCardsData = {
  Cultural: [
    {
      bgImg:
        "https://extraordinaryjourneys.com/wp-content/uploads/2024/11/Cambodia-Angkor-Wat-1-2-1024x502.jpg",
      text: (
        <>
          Discover the Grandeur of <br /> Angkor Wat Temple
        </>
      ),
    },
    {
      bgImg:
        "https://goldentemple.asia/hotel/wp-content/uploads/2017/03/Main6-qpr.jpg",
      text: (
        <>
          Visit the Iconic Faces <br /> of Bayon Temple
        </>
      ),
    },
    {
      bgImg:
        "https://upload.wikimedia.org/wikipedia/commons/b/b2/Silverpagoda.jpg",
      text: (
        <>
          Admire Royal Relics at <br /> Silver Pagoda
        </>
      ),
    },
    {
      bgImg: "https://www.unesco.org/sites/default/files/national_museum.jpg",
      text: (
        <>
          Learn Khmer Heritage at <br /> National Museum
        </>
      ),
    },
    {
      bgImg: "https://www.unesco.org/sites/default/files/national_museum.jpg",
      text: (
        <>
          Learn Khmer Heritage at <br /> National Museum
        </>
      ),
    },
    {
      bgImg: "https://www.unesco.org/sites/default/files/national_museum.jpg",
      text: (
        <>
          Learn Khmer Heritage at <br /> National Museum
        </>
      ),
    },
  ],
  Popular: [
    {
      bgImg:
        "https://www.tourismcambodia.com/img/uploads/attraction/koh-rong.jpg",
      text: (
        <>
          Relax on the Beaches of <br /> Koh Rong Island
        </>
      ),
    },
    {
      bgImg:
        "https://www.tourismcambodia.com/img/uploads/attraction/royal-palace.jpg",
      text: (
        <>
          Explore the Royal Palace <br /> of Phnom Penh
        </>
      ),
    },
    {
      bgImg:
        "https://www.tourismcambodia.com/img/uploads/attraction/phnom-bakheng.jpg",
      text: (
        <>
          Catch Sunset Views at <br /> Phnom Bakheng
        </>
      ),
    },
    {
      bgImg:
        "https://www.tourismcambodia.com/img/uploads/attraction/sihanoukville.jpg",
      text: (
        <>
          Visit Sihanoukville's <br /> Coastal Paradise
        </>
      ),
    },
  ],
  Recommended: [
    {
      bgImg:
        "https://www.tourismcambodia.com/img/uploads/attraction/kampot-pepper.jpg",
      text: (
        <>
          Taste World-Class Pepper <br /> in Kampot
        </>
      ),
    },
    {
      bgImg:
        "https://www.tourismcambodia.com/img/uploads/attraction/bokor-hill.jpg",
      text: (
        <>
          Trek Through Misty Trails <br /> of Bokor Hill
        </>
      ),
    },
    {
      bgImg:
        "https://www.tourismcambodia.com/img/uploads/attraction/kratie-dolphins.jpg",
      text: (
        <>
          Spot Irrawaddy Dolphins <br /> in Kratie
        </>
      ),
    },
    {
      bgImg:
        "https://www.tourismcambodia.com/img/uploads/attraction/phnom-kulen.jpg",
      text: (
        <>
          Hike to Sacred Waters <br /> at Phnom Kulen
        </>
      ),
    },
  ],
  Festivals: [
    {
      bgImg:
        "https://www.tourismcambodia.com/img/uploads/attraction/water-festival.jpg",
      text: (
        <>
          Join the Exciting <br /> Water Festival
        </>
      ),
    },
    {
      bgImg:
        "https://www.tourismcambodia.com/img/uploads/attraction/khmer-new-year.jpg",
      text: (
        <>
          Celebrate Khmer <br /> New Year Traditions
        </>
      ),
    },
    {
      bgImg:
        "https://www.tourismcambodia.com/img/uploads/attraction/pchum-ben.jpg",
      text: (
        <>
          Observe Ancestral Rites <br /> During Pchum Ben
        </>
      ),
    },
    {
      bgImg:
        "https://www.tourismcambodia.com/img/uploads/attraction/royal-ploughing.jpg",
      text: (
        <>
          Witness Cambodia’s <br /> Royal Ploughing Day
        </>
      ),
    },
  ],
};

const testimonials = [
  {
    name: "Srey Meii",
    text: "Wow, what a fun vacation with Oelinken, guided by professional people",
    rating: 5,
    img: SreyMeii,
  },
  {
    name: "Srey Roth",
    text: "It’s an amazing experience to be able to vacation to a new place, thank you Oelinken",
    rating: 4,
    img: SreyRoth,
  },
  {
    name: "Srey Ka",
    text: "At first I was lazy but that thought disappeared after being accompanied by a pleasant guide",
    rating: 4,
    img: SreyKa,
  },
  {
    name: "Srey Khouch",
    text: "New story in my life, really amazing and also affordable",
    rating: 5,
    img: SreyKhouch,
  },

  {
    name: "Kanhna",
    text: "At first I was lazy but that thought disappeared after being accompanied by a pleasant guide",
    rating: 5,
    img: Kanhna,
  },
  {
    name: "Lin",
    text: "Wow, what a fun vacation with Oelinken, guided by professional people",
    rating: 5,
    img: Lin,
  },
  {
    name: "Linda",
    text: "New story in my life, really amazing and also affordable",
    rating: 5,
    img: linda,
  },
  {
    name: "Ly",
    text: "Wow, what a fun vacation with Oelinken, guided by professional people",
    rating: 5,
    img: Ly,
  },
  {
    name: "Seav Ling",
    text: "At first I was lazy but that thought disappeared after being accompanied by a pleasant guide",
    rating: 5,
    img: Seav_ling,
  },
  {
    name: "Teav",
    text: "Wow, what a fun vacation with Oelinken, guided by professional people",
    rating: 5,
    img: Teav,
  },
  {
    name: "Bopha",
    text: "New story in my life, really amazingand also affordable",
    rating: 5,
    img: Bopha,
  },
  {
    name: "Chanthy",
    text: "New story in my life, really amazing and also affordable",
    rating: 5,
    img: Chanthy,
  },
];

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <svg
        key={i}
        className={`w-[15px] h-[15px] ${
          i < rating ? "text-[#FFA41C]" : "text-[#C4C4C4]"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.91l6.561-.955L10 1l2.95 5.955 6.561.955-4.756 3.635 1.123 6.545z" />
      </svg>
    );
  }
  return <div className="flex gap-[5px]">{stars}</div>;
};

const TestimonialCard = ({ name, text, rating, imgSrc }) => (
  <div className="w-[312px] h-[197px] bg-white  p-6 flex flex-col justify-between items-start shrink-0">
    <p className="text-[#12121299] w-[216px] h-[75px] text-[14px] font-[lato] ml-[6px] mb-4 leading-[180%] ">
      {text}
    </p>
    <div className="flex items-center w-full ">
      <img
        src={imgSrc}
        alt={name}
        className="w-[48px] h-[48px] rounded-full mr-[17px]"
      />
      <div className="flex items-start flex-col gap-[5px]">
        <span className="font-[lato] text-[16px] text-[#222222]">{name}</span>
        <StarRating rating={rating} />
      </div>
    </div>
  </div>
);

function Home() {
  const [activeCategory, setActiveCategory] = useState("Cultural");
  const navigate = useNavigate();
  const [displayedImages, setDisplayedImages] = useState(
    categoryImages["Cultural"]
  );
  const activeCarouselIndex = 1;
  const [currentOriginalIndex, setCurrentOriginalIndex] = useState(1);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0); // For testimonial carousel

  const testimonialsPerPage = 4;
  const cardWidth = 312; // Width of one card
  const gap = 20; // Gap between cards
  const slideWidth =
    cardWidth * testimonialsPerPage + gap * (testimonialsPerPage - 1); // Total width of one page/slide
  const totalTestimonialSlides = Math.ceil(
    testimonials.length / testimonialsPerPage
  );

  useEffect(() => {
    if (auth.isLoggedIn) {
      navigate("/explore");
    }
  }, []);

  const handleImageClick = (clickedVisualIndex) => {
    const newImages = [...displayedImages];
    const clickedImage = newImages[clickedVisualIndex];

    if (clickedVisualIndex !== activeCarouselIndex) {
      newImages.splice(clickedVisualIndex, 1);
      newImages.splice(activeCarouselIndex, 0, clickedImage);
      setDisplayedImages(newImages);
    }
    setCurrentOriginalIndex(clickedImage.originalIndex);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setDisplayedImages(categoryImages[category]);
    setCurrentOriginalIndex(1);
  };

  // Testimonial Carousel Handlers
  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === totalTestimonialSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? totalTestimonialSlides - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <section className="flex flex-col items-center gap-2.5 self-stretch pt-5 pb-[100px]">
        <div className="w-[1420px] h-[323px] flex justify-between px-[100px] py-2.5">
          <span className="font-bold text-[72px] font-[Lato] leading-[100px] text-start text-black">
            The Wonders of
            <br />
            Cambodia, <span className="text-[#58A6A0]">Go </span>
            <br />
            <span className="text-[#58A6A0]">Explore</span>
          </span>
          <div className="flex flex-col justify-between items-end self-stretch pb-[69px]">
            <p className="w-[488px] font-normal text-[18px] capitalize text-[#444444]">
              Time tracking software used by millions. A simple time tracker and
              timesheet app that lets you track work hours across projects......
            </p>
            <Button
              text="Explore"
              ariaLabel="Explore Button"
              onClick={() => navigate("/explore")}
            />
          </div>
        </div>
        <div className="w-[1420px] flex flex-col justify-center items-center gap-2.5 px-[30px] relative">
          <YouTubePlayer videoSrc="https://youtu.be/KsDGDzwuQ-I?si=hqHpW57AejD4mXBZ" />
          <div className=" absolute top-[50%] right-[0px] transform -translate-y-1/2 flex flex-col items-center justify-around gap-3.5">
            <h1 className="h-[270px]text-start font-bold text-[24px] text-[#58A6A0] rotate-90 mb-[48px] ">
              FOLLOW US
            </h1>
            <span className="block h-[100px] bg-[#58A6A0] rounded-full w-[2px]"></span>
            <Youtube color="#58A6A0" className="cursor-pointer" />
            <Instagram color="#58A6A0" className="cursor-pointer" />
            <Facebook color="#58A6A0" className="cursor-pointer" />
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center flex-col">
        <div className="flex items-start justify-between px-[45px] py-[50px] w-auto h-auto gap-[83px]">
          <div className="w-[566px] h-[611] relative">
            <img src={Fram} alt="" />
            <div className="absolute top-15 left-7 w-[498px]">
              <img
                src="https://img.freepik.com/free-vector/flat-design-illustration-web-developers_23-2148817995.jpg?ga=GA1.1.495992702.1746376184&semt=ais_hybrid&w=740"
                alt=""
              />
            </div>
          </div>

          <div className="w-[566px] flex flex-col justify-between items-start h-[611px]">
            <p className="text-[64px] font-[700] font-lato">About Us</p>
            <p className="text-[var(--text-color,#505050)] font-lato text-[16px] font-[450] leading-[29px] w-[600px] h-[174px]">
              We specialize in developing high-quality web applications, booking
              platforms, and tourism management systems, ensuring that
              businesses and travelers can connect effortlessly. With
              cutting-edge technologies and a user-centric approach, we craft
              solutions that drive growth, improve efficiency, and elevate the
              tourism experience across Cambodia.
            </p>
            <div className="hidden md:flex mt-4">
              <button className="relative flex items-center justify-center h-[56px] w-[225px] px-[50px] py-[10px] bg-[#58A6A0] text-white border-[1.5px] border-[#58A6A0] rounded-lg font-medium text-base overflow-hidden z-10 group cursor-pointer transition-all duration-300 hover:shadow-[0px_7px_29px_0px_rgba(0,0,0,0.25)]">
                <span className="font-bold transition-all duration-300 group-hover:text-[#45807b]">
                  SEE MORE
                </span>
                <span className="absolute top-[100%] left-[100%] w-[300px] h-[150px] bg-white rounded-full z-[-1] transition-all duration-300 group-hover:top-[-30px] group-hover:left-[-30px]"></span>
              </button>
            </div>

            <div className="w-[500px] h-[100px] flex items-center justify-between gap-[50px]">
              <div className="w-[136px] h-[100px] flex items-center justify-between flex-col">
                <p className="text-[#58A6A0] text-[36px] font-normal leading-[100%]">
                  200+
                </p>
                <p className="text-[#222] text-center text-[20px] font-normal leading-[140%] capitalize">
                  Customer & partners
                </p>
              </div>
              <div className="w-[136px] h-[100px] flex items-center justify-between flex-col">
                <p className="text-[#58A6A0] text-[36px] font-normal leading-[100%]">
                  500+
                </p>
                <p className="text-[#222] text-center text-[20px] font-normal leading-[140%] capitalize">
                  Place in the world
                </p>
              </div>
              <div className="w-[136px] h-[100px] flex items-center justify-between flex-col">
                <p className="text-[#58A6A0] text-[36px] font-normal leading-[100%]">
                  1k+
                </p>
                <p className="text-[#222] text-center text-[20px] font-normal leading-[140%] capitalize">
                  Success Journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center flex-col mt-[60px]">
        <p className="text-[#222] font-poppins text-[56px] not-italic font-extrabold leading-[100%]">
          The <span className="text-[#58A6A0]">best place</span> for vacation
        </p>

        <ul className="w-auto h-auto flex justify-between items-center gap-[15px] mt-[63.5px] mb-11">
          <div className="w-[150px] h-[26px] text-center ">
            <li>
              <Link
                to="#"
                onClick={() => handleCategoryChange("Cultural")}
                className={`font-lato text-[20px] ${
                  activeCategory === "Cultural"
                    ? "text-[#58A6A0] after:flex after:w-[40px] after:mt-1 after:h-[2px] after:bg-[#58A6A0] after:ml-14 rounded-[40px] font-lato font-[500] "
                    : "text-[#222] font-[500] font-lato"
                }`}
              >
                Cultural
              </Link>
            </li>
          </div>

          <div className="w-[150px] h-[26px] text-center">
            <li>
              <Link
                to="#"
                onClick={() => handleCategoryChange("Popular")}
                className={`font-lato text-[20px] ${
                  activeCategory === "Popular"
                    ? "text-[#58A6A0] after:flex after:w-[40px] after:mt-1 after:h-[2px] after:bg-[#58A6A0] after:ml-14 rounded-[40px] font-lato font-[500] "
                    : "text-[#222] font-[500] font-lato"
                }`}
              >
                Popular
              </Link>
            </li>
          </div>

          <div className="w-[150px] h-[26px] text-center">
            <li>
              <Link
                to="#"
                onClick={() => handleCategoryChange("Recommended")}
                className={`font-lato text-[20px] ${
                  activeCategory === "Recommended"
                    ? "text-[#58A6A0] after:flex after:w-[75px] after:mt-1 after:h-[2px] after:bg-[#58A6A0] after:ml-9.5 rounded-[40px] font-lato font-[500] "
                    : "text-[#222] font-[500] font-latol"
                }`}
              >
                Recommended
              </Link>
            </li>
          </div>

          <div className="w-[150px] h-[26px] text-center">
            <li>
              <Link
                to="#"
                onClick={() => handleCategoryChange("Festivals")}
                className={`font-lato text-[20px] ${
                  activeCategory === "Festivals"
                    ? "text-[#58A6A0] after:flex after:w-[50px] after:mt-1 after:h-[2px] after:bg-[#58A6A0] after:ml-12.5 rounded-[40px] font-lato font-[500] "
                    : "text-[#222] font-[500] font-lato"
                }`}
              >
                Festivals
              </Link>
            </li>
          </div>
        </ul>

        {/* Highlight Cards Section */}
        <div className="flex flex-wrap items-center content-center gap-[25px] w-[1440px] px-[5px] pl-[10px]">
          {/* Dynamically render HighlightCrad components based on activeCategory */}
          {highlightCardsData[activeCategory].map((card, index) => (
            <HighlightCrad
              key={index} // It's good practice to provide a key
              bgImg={card.bgImg}
              text={card.text}
            />
          ))}
        </div>

        <div className="hidden md:flex mt-[80px]">
          <button className="relative flex items-center justify-center h-[56px] w-[225px] px-[50px] py-[10px] bg-white text-[#58A6A0] border-[1.5px] border-[#58A6A0] rounded-lg text-base overflow-hidden z-10 group cursor-pointer transition-all duration-300 hover:shadow-[0px_7px_29px_0px_rgba(0,0,0,0.25)]">
            <span className="font-[600] transition-all duration-300 group-hover:text-white">
              View All
            </span>
            <span className="absolute top-[100%] left-[100%] w-[300px] h-[150px] bg-[#58A6A0] rounded-full z-[-1] transition-all duration-300 group-hover:top-[-30px] group-hover:left-[-30px]"></span>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center mt-[60px] py-[50px] px-[20px]">
        <div className="flex items-start justify-center flex-col gap-[32px] w-[384px] mr-[60px]">
          <p className="text-[#222] font-poppins text-[48px] not-italic font-extrabold leading-[100%]">
            Why <span className=" text-[#58A6A0]">Choose</span> Us
          </p>
          <p className="w-[381px] h-auto text-[#222] text-[18px] font-normal font-lato">
            We ensure that you’ll embark on a perfectly planned, safe vacation
            at a price you can afford.
          </p>
          <div className="hidden md:flex mt-4">
            <button className="relative flex items-center justify-center h-[56px] w-[225px] px-[50px] py-[10px] bg-white text-[#58A6A0] border-[1.5px] border-[#58A6A0] rounded-lg text-base overflow-hidden z-10 group cursor-pointer transition-all duration-300 hover:shadow-[0px_7px_29px_0px_rgba(0,0,0,0.25)]">
              <span className="font-[600] transition-all duration-300 group-hover:text-white">
                Contact US
              </span>
              <span className="absolute top-[100%] left-[100%] w-[300px] h-[150px] bg-[#58A6A0] rounded-full z-[-1] transition-all duration-300 group-hover:top-[-30px] group-hover:left-[-30px]"></span>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between w-[956px]">
          <div className="flex items-start justify-center flex-col gap-[28px]">
            <div className=" flex items-center justify-center w-[60px] h-[60px] rounded-[3px] bg-[#71C3FD]">
              <img src={Icon} alt="icon" />
            </div>
            <div className="flex items-start justify-center flex-col w-[274px]">
              <p className="text-[#333] text-[18px] font-[400] leading-[100%] font-lato mb-[16px]">
                Best Travel's Website
              </p>
              <p className="text-[#999999] text-[14px] font-[400] leading-[180%] font-lato ">
                Travel agencies that provide round trip, one way, and multi trip
                services.
              </p>
            </div>
          </div>
          <div className="w-[1px] h-[211px] bg-[#E4E4E7]"></div>
          <div className="flex items-start justify-center flex-col gap-[28px]">
            <div className=" flex items-center justify-center w-[60px] h-[60px] rounded-[3px] bg-[#58A6A0]">
              <img src={Icon1} alt="icon" />
            </div>
            <div className="flex items-start justify-center flex-col w-[274px]">
              <p className="text-[#333] text-[18px] font-[400] leading-[100%] font-lato mb-[16px]">
                Competitive Price
              </p>
              <p className="text-[#999999] text-[14px] font-[400] leading-[180%] font-lato ">
                The price offered are affordable starting from the ordinary to
                the exclusive.
              </p>
            </div>
          </div>
          <div className="w-[1px] h-[211px] bg-[#E4E4E7]"></div>
          <div className="flex items-start justify-center flex-col gap-[28px]">
            <div className=" flex items-center justify-center w-[60px] h-[60px] rounded-[3px] bg-[#FC747B]">
              <img src={Icon2} alt="icon" />
            </div>
            <div className="flex items-start justify-center flex-col w-[274px]">
              <p className="text-[#333] text-[18px] font-[400] leading-[100%] font-lato mb-[16px]">
                Global Coverage
              </p>
              <p className="text-[#999999] text-[14px] font-[400] leading-[180%] font-lato ">
                There are many tourist attractions, hotels and interesting
                entertainment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-[30px] p-[50px] mt-[50px]">
        <div className="flex flex-col justify-center items-center gap-7">
          <span className="font-extrabold text-[48px] leading-[100%] text-center text-[#222] font-[lato]">
            More From <span className="text-[#58A6A0]">CAMBODIA</span>.
          </span>
          <span className="font-normal text-[18px] leading-[180%] text-[#222] font-[lato]">
            We ensure that you’ll embark on a perfectly planned, safe vacation
            at a price you can afford.
          </span>
        </div>

        <div className="w-[1259px] h-[429px]">
          <div className="flex justify-center items-center gap-8">
            {displayedImages.map((imageObj, index) => (
              <img
                key={imageObj.originalIndex}
                onClick={() => handleImageClick(index)}
                src={imageObj.src}
                alt={`ImgVideo${imageObj.originalIndex}`}
                className={`cursor-pointer object-cover transition-all duration-300 ${
                  index === activeCarouselIndex
                    ? "w-[555px] h-[355px]"
                    : "w-80 h-[220px]"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          {displayedImages.map((_, index) => (
            <svg
              key={index}
              className={`h-1 rounded-2xl transition-all duration-300 ${
                index === currentOriginalIndex
                  ? "w-[40px] bg-[#58A6A0]"
                  : "w-[24px] bg-[#666]"
              }`}
            ></svg>
          ))}
        </div>
      </div>

      {/* Testimonial Section Updated for Sliding */}
      <div className="flex item-center justify-center flex-col w-full h-auto bg-[#0000001A] py-[60px] px-5 mb-[50px] ">
        <div className="flex justify-center h-auto w-full relative mb-[45px]">
          <p className="text-[#58A6A0] text-[80px] font-[lato] absolute left-[38px] top-[209px]">
            “
          </p>
          <div className="flex items-center justify-center flex-col gap-[24px] ">
            <p className=" text-[#222] text-[56px] font-[lato] text-center font-[400] leading-[130%] w-[658px] h-auto">
              Contact us to review <br />
              <span className="text-[#58A6A0]">your experience</span> with us
            </p>
            <p className=" text-[#666] text-[18px] font-[lato] text-center font-[400] leading-[180%] w-[440px] h-auto">
              Give us feedback and let us know what experiences you had while on
              vacation with us
            </p>
          </div>
        </div>

        {/* --- Start Sliding Carousel --- */}
        <div className="flex items-center justify-center w-full relative px-[50px]">
          {" "}
          {/* Add padding for buttons */}
          {/* Prev Button */}
          <button
            onClick={handlePrevTestimonial}
            className={`absolute left-[50px] top-1/2 transform -translate-y-1/2 bg-[#58A6A0] rounded-[10%] p-2 shadow-md hover:bg-red-700 z-20 ${
              currentTestimonialIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            disabled={currentTestimonialIndex === 0}
          >
            <ChevronLeft className=" text-white" />
          </button>
          {/* Container with overflow hidden */}
          <div className="overflow-hidden" style={{ width: `${slideWidth}px` }}>
            {/* Track with transform and transition */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentTestimonialIndex * (slideWidth + gap)
                }px)`,
              }} // Adjust translate for gap
            >
              {/* Render ALL testimonials with gaps */}
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="shrink-0"
                  style={{
                    width: `${cardWidth}px`,
                    marginRight: `${gap}px`,
                  }}
                >
                  <TestimonialCard
                    name={testimonial.name}
                    text={testimonial.text}
                    rating={testimonial.rating}
                    imgSrc={testimonial.img}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Next Button */}
          <button
            onClick={handleNextTestimonial}
            className={`absolute right-[50px] top-1/2 transform -translate-y-1/2 bg-[#58A6A0] rounded-[10%]  p-2 shadow-md hover:bg-red-700 z-20 ${
              currentTestimonialIndex === totalTestimonialSlides - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            disabled={currentTestimonialIndex === totalTestimonialSlides - 1}
          >
            <ChevronRight className="text-white" />
          </button>
        </div>
        {/* --- End Sliding Carousel --- */}

        <div className="flex justify-center items-center gap-4 mt-8">
          {Array.from({ length: totalTestimonialSlides }).map((_, index) => (
            <svg
              key={index}
              className={`h-[2px] rounded-full cursor-pointer transition-all duration-300 ${
                index === currentTestimonialIndex
                  ? "w-[40px] bg-[#58A6A0]"
                  : "w-[12px] bg-[#666]"
              }`}
              onClick={() => setCurrentTestimonialIndex(index)}
            ></svg>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
