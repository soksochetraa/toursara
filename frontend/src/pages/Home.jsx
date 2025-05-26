import Button from "../components/buttons/ButtonGetStart";
import YouTubePlayer from "../components/media/YoutubePlayer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../Auth";
import { useEffect } from "react";
import React, { useState } from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Fram from "../assets/images/fram-imag.svg";
import Icon from "../assets/images/icon.svg";
import Icon1 from "../assets/images/icon_money.svg";
import Icon2 from "../assets/images/icon_world.svg";
import ImgVideo1 from "../assets/images/img_video1.svg";
import ImgVideo2 from "../assets/images/img_video2.svg";
import ImgVideo3 from "../assets/images/img_video3.svg";
import HighlightCrad from "../components/cards/HighlightCrad";

function Home() {
  const [activeCategory, setActiveCategory] = useState("Cultural");
  const navigate = useNavigate();

  const initialImagesWithIndices = [
    { src: ImgVideo1, originalIndex: 0 },
    { src: ImgVideo2, originalIndex: 1 },
    { src: ImgVideo3, originalIndex: 2 },
  ];

  const [displayedImages, setDisplayedImages] = useState(
    initialImagesWithIndices
  );

  const activeCarouselIndex = 1;

  const [currentOriginalIndex, setCurrentOriginalIndex] = useState(1);

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
          <YouTubePlayer videoSrc="https://youtu.be/KsDGDzwuQ-I?si=BqA3JvDqKWvdrnQX" />
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
                onClick={() => setActiveCategory("Cultural")}
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
                onClick={() => setActiveCategory("Popular")}
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
                onClick={() => setActiveCategory("Recommended")}
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
                onClick={() => setActiveCategory("Festivals")}
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

        <div className="flex flex-wrap items-center content-center gap-[25px] w-[1440px] px-[5px] pl-[10px]">
          <HighlightCrad
            bgImg={
              "https://imgs.search.brave.com/TN6KvCR-KbM2ACuSb-U9cL0WP2bKCu8K9POLFKJPaWQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzM5LzU2LzMw/LzM2MF9GXzMzOTU2/MzAyNV9pT0h3aktr/TzdGbkF0QnZoNUs0/SGxnNlRWQ0t0SHBn/cC5qcGc"
            }
            text={
              <>
                Explore our World's Largest <br /> Religion Monument
              </>
            }
          />
          <HighlightCrad
            bgImg={
              "https://imgs.search.brave.com/TN6KvCR-KbM2ACuSb-U9cL0WP2bKCu8K9POLFKJPaWQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzM5LzU2LzMw/LzM2MF9GXzMzOTU2/MzAyNV9pT0h3aktr/TzdGbkF0QnZoNUs0/SGxnNlRWQ0t0SHBn/cC5qcGc"
            }
            text={
              <>
                Explore our Angkor <br /> National Park
              </>
            }
          />
          <HighlightCrad
            bgImg={
              "https://imgs.search.brave.com/TN6KvCR-KbM2ACuSb-U9cL0WP2bKCu8K9POLFKJPaWQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzM5LzU2LzMw/LzM2MF9GXzMzOTU2/MzAyNV9pT0h3aktr/TzdGbkF0QnZoNUs0/SGxnNlRWQ0t0SHBn/cC5qcGc"
            }
            text={
              <>
                Explore our Rich's <br />
                Cultural Khmer Art
              </>
            }
          />
          <HighlightCrad
            bgImg={
              "https://imgs.search.brave.com/TN6KvCR-KbM2ACuSb-U9cL0WP2bKCu8K9POLFKJPaWQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzM5LzU2LzMw/LzM2MF9GXzMzOTU2/MzAyNV9pT0h3aktr/TzdGbkF0QnZoNUs0/SGxnNlRWQ0t0SHBn/cC5qcGc"
            }
            text={
              <>
                Explore our Wonderful <br /> Capital of Cambodia
              </>
            }
          />
          <HighlightCrad
            bgImg={
              "https://imgs.search.brave.com/TN6KvCR-KbM2ACuSb-U9cL0WP2bKCu8K9POLFKJPaWQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzM5LzU2LzMw/LzM2MF9GXzMzOTU2/MzAyNV9pT0h3aktr/TzdGbkF0QnZoNUs0/SGxnNlRWQ0t0SHBn/cC5qcGc"
            }
            text={
              <>
                Explore our genocide <br /> Museum Toul Sleng
              </>
            }
          />
          <HighlightCrad
            bgImg={
              "https://imgs.search.brave.com/TN6KvCR-KbM2ACuSb-U9cL0WP2bKCu8K9POLFKJPaWQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzM5LzU2LzMw/LzM2MF9GXzMzOTU2/MzAyNV9pT0h3aktr/TzdGbkF0QnZoNUs0/SGxnNlRWQ0t0SHBn/cC5qcGc"
            }
            text={
              <>
                Explore our Bayon <br /> Religions Temple
              </>
            }
          />
        </div>

        <div className="hidden md:flex mt-4">
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
          {initialImagesWithIndices.map((_, index) => (
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
    </>
  );
}

export default Home;
