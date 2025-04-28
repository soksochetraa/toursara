import Button from "../components/buttons/ButtonGetStart";
import YouTubePlayer from "../components/media/YoutubePlayer";
import { useNavigate } from "react-router-dom";
import { auth } from "../Auth";
import { useEffect } from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isLoggedIn) {
      navigate("/explore");
    }
  }, []);

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
          <YouTubePlayer videoSrc="https://www.youtube.com/embed/pVbDm6ecfww?si=22RaOt1X-HZC4R13" />
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
    </>
  );
}

export default Home;
