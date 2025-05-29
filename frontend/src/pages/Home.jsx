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
} from "lucide-react"; // Import Chevrons
import Fram from "../assets/images/fram-imag.svg";
import Icon from "../assets/images/icon.svg";
import Icon1 from "../assets/images/icon_money.svg";
import Icon2 from "../assets/images/icon_world.svg";
import ImgVideo1 from "../assets/images/img_video1.svg";
import ImgVideo2 from "../assets/images/img_video2.svg";
import ImgVideo3 from "../assets/images/img_video3.svg";
import HighlightCrad from "../components/cards/HighlightCrad";
import SreyMeii from "../assets/images/Srey_Meii.svg"; // Placeholder - replace with actual images
import SreyRoth from "../assets/images/Srey_Roth.svg"; // Placeholder
import SreyKa from "../assets/images/Srey_Ka.svg"; // Placeholder
import SreyKhouch from "../assets/images/Srey_Khouch.svg"; // Placeholder
import Kanhna from "../assets/images/Kanhna.svg"; // Placeholder - replace with actual images
import Lin from "../assets/images/Lin.svg"; // Placeholder - replace with actual images
import linda from "../assets/images/Linda.svg"; // Placeholder - replace with actual images
import Ly from "../assets/images/Ly.svg"; // Placeholder - replace with actual images
import Seav_ling from "../assets/images/Seav_ling.svg"; // Placeholder - replace with actual images
import Teav from "../assets/images/Teav.svg"; // Placeholder - replace with actual images
import Bopha from "../assets/images/Bopha.svg"; // Placeholder - replace with actual images
import Chanthy from "../assets/images/Chanthy.svg"; // Placeholder - replace with actual images

// Define a data structure to hold images for each category (for the carousel, as in previous solution)
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

// NEW: Data structure for Highlight Cards based on categories
const highlightCardsData = {
  Cultural: [
    {
      bgImg:
        "https://imgs.search.brave.com/TN6KvCR-KbM2ACuSb-U9cL0WP2bKCu8K9POLFKJPaWQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzM5LzU2LzMw/LzM2MF9GXzMzOTU2/MzAyNV9pT0h3aktr/TzdGbkF0QnZoNUs0/SGxnNlRWQ0t0SHBn/cC5qcGc",
      text: (
        <>
          Explore our World's Largest <br /> Religion Monument
        </>
      ),
    },
    {
      bgImg:
        "https://imgs.search.brave.com/TN6KvCR-KbM2ACuSb-U9cL0WP2bKCu8K9POLFKJPaWQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzM5LzU2LzMw/LzM2MF9GXzMzOTU2/MzAyNV9pT0h3aktr/TzdGbkF0QnZoNUs0/SGxnNlRWQ0t0SHBn/cC5qcGc",
      text: (
        <>
          Explore our Angkor <br /> National Park
        </>
      ),
    },
    {
      bgImg:
        "https://imgs.search.brave.com/TN6KvCR-KbM2ACuSb-U9cL0WP2bKCu8K9POLFKJPaWQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzM5LzU2LzMw/LzM2MF9GXzMzOTU2/MzAyNV9pT0h3aktr/TzdGbkF0QnZoNUs0/SGxnNlRWQ0t0SHBn/cC5qcGc",
      text: (
        <>
          Explore our Rich's <br /> Cultural Khmer Art
        </>
      ),
    },
    {
      bgImg:
        "https://imgs.search.brave.com/TN6KvCR-KbM2ACuSb-U9cL0WP2bKCu8K9POLFKJPaWQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzM5LzU2LzMw/LzM2MF9GXzMzOTU2/MzAyNV9pT0h3aktr/TzdGbkF0QnZoNUs0/SGxnNlRWQ0t0SHBn/cC5qcGc",
      text: (
        <>
          Explore our Wonderful <br /> Capital of Cambodia
        </>
      ),
    },
    {
      bgImg:
        "https://imgs.search.brave.com/TN6KvCR-KbM2ACuSb-U9cL0WP2bKCu8K9POLFKJPaWQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzM5LzU2LzMw/LzM2MF9GXzMzOTU2/MzAyNV9pT0h3aktr/TzdGbkF0QnZoNUs0/SGxnNlRWQ0t0SHBn/cC5qcGc",
      text: (
        <>
          Explore our genocide <br /> Museum Toul Sleng
        </>
      ),
    },
    {
      bgImg:
        "https://imgs.search.brave.com/TN6KvCR-KbM2ACuSb-U9cL0WP2bKCu8K9POLFKJPaWQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzM5LzU2LzMw/LzM2MF9GXzMzOTU2/MzAyNV9pT0h3aktr/TzdGbkF0QnZoNUs0/SGxnNlRWQ0t0SHBn/cC5qcGc",
      text: (
        <>
          Explore our Bayon <br /> Religions Temple
        </>
      ),
    },
  ],
  Popular: [
    {
      bgImg:
        "https://imgs.search.brave.com/TN6KvCR-KbM2ACuSb-U9cL0WP2bKCu8K9POLFKJPaWQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzM5LzU2LzMw/LzM2MF9GXzMzOTU2/MzAyNV9pT0h3aktr/TzdGbkF0QnZoNUs0/SGxnNlRWQ0t0SHBn/cC5qcGc",
      text: (
        <>
          Discover the Vibrant <br /> Markets of Phnom Penh
        </>
      ),
    },
    {
      bgImg:
        "https://img.freepik.com/free-photo/koh-rong-island-cambodia_335224-220.jpg?t=st=1716827278~exp=1716830878~hmac=c6d17e5a07c4587d1976241a4a42b104996f0144f800726715f3333331b26802&w=1380",
      text: (
        <>
          Relax on the Stunning <br /> Beaches of Koh Rong
        </>
      ),
    },
    {
      bgImg:
        "https://img.freepik.com/free-photo/preah-khan-temple-angkor-cambodia_335224-221.jpg?t=st=1716827303~exp=1716830903~hmac=862413e6189914757c30700593740e6983794b150992383c8869c36c6418efda&w=1380",
      text: (
        <>
          Explore the Hidden <br /> Gems of Preah Khan
        </>
      ),
    },
    {
      bgImg:
        "https://img.freepik.com/free-photo/cambodian-traditional-boat-mekong-river_335224-222.jpg?t=st=1716827324~exp=1716830924~hmac=e20980590a2a4b8f5223c72b21cf56b850d249f05a968600d80d2417c67554f7&w=1380",
      text: (
        <>
          Cruise Along the Majestic <br /> Mekong River
        </>
      ),
    },
    {
      bgImg:
        "https://img.freepik.com/free-photo/national-museum-cambodia_335224-223.jpg?t=st=1716827344~exp=1716830944~hmac=09520442345e656d05f560e90c681284a1426361a38a7c29e46a782a201c1374&w=1380",
      text: (
        <>
          Visit the National <br /> Museum in Phnom Penh
        </>
      ),
    },
    {
      bgImg:
        "https://img.freepik.com/free-photo/silver-pagoda-royal-palace-phnom-penh_335224-224.jpg?t=st=1716827364~exp=1716830964~hmac=d927a7c92b23a76e936c56839352e85a5a73e6f777c5b9679f2257f8928373b8&w=1380",
      text: (
        <>
          Marvel at the Silver Pagoda <br /> within the Royal Palace
        </>
      ),
    },
  ],
  Recommended: [
    {
      bgImg:
        "https://img.freepik.com/free-photo/bokor-hill-station-cambodia_335224-225.jpg?t=st=1716827409~exp=1716831009~hmac=40f8080f08a55427d140e74f177c92476d1e43e2f9d506691456576b50e39660&w=1380",
      text: (
        <>
          Explore the Eerie Beauty <br /> of Bokor Hill Station
        </>
      ),
    },
    {
      bgImg:
        "https://img.freepik.com/free-photo/kratie-mekong-river-cambodia_335224-226.jpg?t=st=1716827435~exp=1716831035~hmac=b375b4f65355a297924376c8e3bb2a05d898495efc5d14041b655512d718b5b7&w=1380",
      text: (
        <>
          Spot Rare Irrawaddy Dolphins <br /> in Kratie
        </>
      ),
    },
    {
      bgImg:
        "https://img.freepik.com/free-photo/cambodian-pepper-plantation_335224-227.jpg?t=st=1716827457~exp=1716831057~hmac=80a373b98c92a64c48324e9334dd163c457313a233b8277259275f10a7b458d9&w=1380",
      text: (
        <>
          Tour a Pepper Plantation <br /> in Kampot
        </>
      ),
    },
    {
      bgImg:
        "https://img.freepik.com/free-photo/cambodian-cooking-class_335224-228.jpg?t=st=1716827479~exp=1716831079~hmac=d240d437149a712f5a65239a0397736e65a6f236e788771192e43f55097f3747&w=1380",
      text: (
        <>
          Take a Cambodian Cooking <br /> Class
        </>
      ),
    },
    {
      bgImg:
        "https://img.freepik.com/free-photo/phnom-kulen-national-park_335224-229.jpg?t=st=1716827500~exp=1716831100~hmac=c39174df44a7f96b2700344585145c2f8216124017d7f722904c62f3d5377038&w=1380",
      text: (
        <>
          Hike in Phnom Kulen <br /> National Park
        </>
      ),
    },
    {
      bgImg:
        "https://img.freepik.com/free-photo/cambodian-traditional-dance_335224-230.jpg?t=st=1716827521~exp=1716831121~hmac=a4031d227b686e00b659c235790a8806297314644548777128cf7e85746b5d2e&w=1380",
      text: (
        <>
          Enjoy a Traditional <br /> Apsara Dance Show
        </>
      ),
    },
  ],
  Festivals: [
    {
      bgImg:
        "https://img.freepik.com/free-photo/water-festival-cambodia_335224-231.jpg?t=st=1716827542~exp=1716831142~hmac=2c0a4e7681c1c964177c4e5a91176b6238b695191c9f4d7f516a506720f4b360&w=1380",
      text: (
        <>
          Experience the Bon Om Touk <br /> Water Festival
        </>
      ),
    },
    {
      bgImg:
        "https://img.freepik.com/free-photo/khmer-new-year-celebration_335224-232.jpg?t=st=1716827566~exp=1716831166~hmac=332152065842c38865c36531405c14d9b4b036814b14d232a2656d09101d24c0&w=1380",
      text: (
        <>
          Celebrate Khmer <br /> New Year
        </>
      ),
    },
    {
      bgImg:
        "https://img.freepik.com/free-photo/royal-ploughing-ceremony-cambodia_335224-233.jpg?t=st=1716827588~exp=1716831188~hmac=50e206e987c603a19e48f76e3381a1a5b828a2a5d21a2245b7367d8f991f868c&w=1380",
      text: (
        <>
          Witness the Royal <br /> Ploughing Ceremony
        </>
      ),
    },
    {
      bgImg:
        "https://img.freepik.com/free-photo/ancestor-festival-cambodia_335224-234.jpg?t=st=1716827610~exp=1716831210~hmac=e2c14041d528b8559092419a4b868e82a60d0061e3895e6308a3d467885b51c8&w=1380",
      text: (
        <>
          Participate in Pchum Ben <br /> Ancestor's Festival
        </>
      ),
    },
    {
      bgImg:
        "https://img.freepik.com/free-photo/boat-race-water-festival_335224-235.jpg?t=st=1716827628~exp=1716831228~hmac=2e49c9510166d79044238e8749e75c5e8c14e1f7f6a7d76a746533036a143526&w=1380",
      text: (
        <>
          Enjoy the Excitement of <br /> Boat Races
        </>
      ),
    },
    {
      bgImg:
        "https://img.freepik.com/free-photo/cambodian-lantern-festival_335224-236.jpg?t=st=1716827649~exp=1716831249~hmac=025d57d762f0f46f3438a08c7c9803126f59c256d029589d89304a2d815774a3&w=1380",
      text: (
        <>
          Celebrate the Lantern <br /> Festival
        </>
      ),
    },
  ],
};

// Testimonial Data
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

// Star Rating Component
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

// Testimonial Card Component
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
            Cambodia, <span className="text-[#ef3a45]">Go </span>
            <br />
            <span className="text-[#ef3a45]">Explore</span>
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
            <h1 className="h-[270px]text-start font-bold text-[24px] text-[#fa3636] rotate-90 mb-[48px] ">
              FOLLOW US
            </h1>
            <span className="block h-[100px] bg-[#ef3a45] rounded-full w-[2px]"></span>
            <Youtube color="#ef3a45" className="cursor-pointer" />
            <Instagram color="#ef3a45" className="cursor-pointer" />
            <Facebook color="#ef3a45" className="cursor-pointer" />
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
              <button className="relative flex items-center justify-center h-[56px] w-[225px] px-[50px] py-[10px] bg-red-500 text-white border-[1.5px] border-red-500 rounded-lg font-medium text-base overflow-hidden z-10 group cursor-pointer transition-all duration-300 hover:shadow-[0px_7px_29px_0px_rgba(0,0,0,0.25)]">
                <span className="font-bold transition-all duration-300 group-hover:text-red-600">
                  SEE MORE
                </span>
                <span className="absolute top-[100%] left-[100%] w-[300px] h-[150px] bg-white rounded-full z-[-1] transition-all duration-300 group-hover:top-[-30px] group-hover:left-[-30px]"></span>
              </button>
            </div>

            <div className="w-[500px] h-[100px] flex items-center justify-between gap-[50px]">
              <div className="w-[136px] h-[100px] flex items-center justify-between flex-col">
                <p className="text-[#EF3A45] text-[36px] font-normal leading-[100%]">
                  200+
                </p>
                <p className="text-[#222] text-center text-[20px] font-normal leading-[140%] capitalize">
                  Customer & partners
                </p>
              </div>
              <div className="w-[136px] h-[100px] flex items-center justify-between flex-col">
                <p className="text-[#EF3A45] text-[36px] font-normal leading-[100%]">
                  500+
                </p>
                <p className="text-[#222] text-center text-[20px] font-normal leading-[140%] capitalize">
                  Place in the world
                </p>
              </div>
              <div className="w-[136px] h-[100px] flex items-center justify-between flex-col">
                <p className="text-[#EF3A45] text-[36px] font-normal leading-[100%]">
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
          The <span className="text-[#FA3636]">best place</span> for vacation
        </p>

        <ul className="w-auto h-auto flex justify-between items-center gap-[15px] mt-[63.5px] mb-11">
          <div className="w-[150px] h-[26px] text-center ">
            <li>
              <Link
                to="#"
                onClick={() => handleCategoryChange("Cultural")}
                className={`font-lato text-[20px] ${
                  activeCategory === "Cultural"
                    ? "text-[#EF3A45] after:flex after:w-[40px] after:mt-1 after:h-[2px] after:bg-[#EF3A45] after:ml-14 rounded-[40px] font-lato font-[500] "
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
                    ? "text-[#EF3A45] after:flex after:w-[40px] after:mt-1 after:h-[2px] after:bg-[#EF3A45] after:ml-14 rounded-[40px] font-lato font-[500] "
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
                    ? "text-[#EF3A45] after:flex after:w-[75px] after:mt-1 after:h-[2px] after:bg-[#EF3A45] after:ml-9.5 rounded-[40px] font-lato font-[500] "
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
                    ? "text-[#EF3A45] after:flex after:w-[50px] after:mt-1 after:h-[2px] after:bg-[#EF3A45] after:ml-12.5 rounded-[40px] font-lato font-[500] "
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
          <button className="relative flex items-center justify-center h-[56px] w-[225px] px-[50px] py-[10px] bg-white text-red-500 border-[1.5px] border-red-500 rounded-lg text-base overflow-hidden z-10 group cursor-pointer transition-all duration-300 hover:shadow-[0px_7px_29px_0px_rgba(0,0,0,0.25)]">
            <span className="font-[600] transition-all duration-300 group-hover:text-white">
              View All
            </span>
            <span className="absolute top-[100%] left-[100%] w-[300px] h-[150px] bg-red-500 rounded-full z-[-1] transition-all duration-300 group-hover:top-[-30px] group-hover:left-[-30px]"></span>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center mt-[60px] py-[50px] px-[20px]">
        <div className="flex items-start justify-center flex-col gap-[32px] w-[384px] mr-[60px]">
          <p className="text-[#222] font-poppins text-[48px] not-italic font-extrabold leading-[100%]">
            Why <span className=" text-[#FA3636]">Choose</span> Us
          </p>
          <p className="w-[381px] h-auto text-[#222] text-[18px] font-normal font-lato">
            We ensure that you’ll embark on a perfectly planned, safe vacation
            at a price you can afford.
          </p>
          <div className="hidden md:flex mt-4">
            <button className="relative flex items-center justify-center h-[56px] w-[225px] px-[50px] py-[10px] bg-white text-red-500 border-[1.5px] border-red-500 rounded-lg text-base overflow-hidden z-10 group cursor-pointer transition-all duration-300 hover:shadow-[0px_7px_29px_0px_rgba(0,0,0,0.25)]">
              <span className="font-[600] transition-all duration-300 group-hover:text-white">
                Contact US
              </span>
              <span className="absolute top-[100%] left-[100%] w-[300px] h-[150px] bg-red-500 rounded-full z-[-1] transition-all duration-300 group-hover:top-[-30px] group-hover:left-[-30px]"></span>
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
            <div className=" flex items-center justify-center w-[60px] h-[60px] rounded-[3px] bg-[#FA3636]">
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
            More From <span className="text-[#EF3A45]">CAMBODIA</span>.
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
                  ? "w-[40px] bg-[#EF3A45]"
                  : "w-[24px] bg-[#666]"
              }`}
            ></svg>
          ))}
        </div>
      </div>

      {/* Testimonial Section Updated for Sliding */}
      <div className="flex item-center justify-center flex-col w-full h-auto bg-[#0000001A] py-[60px] px-5 mb-[50px] ">
        <div className="flex justify-center h-auto w-full relative mb-[45px]">
          <p className="text-[#FA3636] text-[80px] font-[lato] absolute left-[38px] top-[209px]">
            “
          </p>
          <div className="flex items-center justify-center flex-col gap-[24px] ">
            <p className=" text-[#222] text-[56px] font-[lato] text-center font-[400] leading-[130%] w-[658px] h-auto">
              Contact us to review <br />
              <span className="text-[#FA3636]">your experience</span> with us
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
            className={`absolute left-[50px] top-1/2 transform -translate-y-1/2 bg-white rounded-[10%] p-2 shadow-md hover:bg-gray-100 z-20 ${
              currentTestimonialIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            disabled={currentTestimonialIndex === 0}
          >
            <ChevronLeft className="text-[#EF3A45]" />
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
            className={`absolute right-[50px] top-1/2 transform -translate-y-1/2 bg-[#EF3A45] rounded-[10%]  p-2 shadow-md hover:bg-red-700 z-20 ${
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
                  ? "w-[40px] bg-[#EF3A45]"
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
