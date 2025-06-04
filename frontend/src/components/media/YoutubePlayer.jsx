import React, { useState } from "react";
import { Play } from "lucide-react";

const YouTubePlayer = ({ videoSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = videoSrc.split("/").pop().split("?")[0];

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="w-[1230px] h-[780px] relative">
      {!isPlaying ? (
        <div
          className="relative w-full h-full bg-center bg-cover rounded-[8px]"
          style={{
            backgroundImage: `url(${thumbnailUrl})`,
          }}
        >
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            onClick={handlePlay}
          >
            <button className="relative w-[60px] h-[60px] bg-[#45807b] text-white rounded-full flex items-center cursor-pointer justify-center">
              <div className="absolute inset-0 flex justify-center top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 items-center bg-[#45807b] rounded-full opacity-75 w-[45px] h-[45px]"></div>
              <div className="absolute inset-0 flex justify-center items-center top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-[#45807b] rounded-full opacity-50 w-[90px] h-[90px]"></div>
              <div className="absolute inset-0 flex justify-center items-center top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-[#45807b] rounded-full opacity-25 w-[115px] h-[115px]"></div>
              <Play className="z-10" />
            </button>
          </div>
        </div>
      ) : (
        <iframe
          width="100%"
          height="100%"
          src={`${videoSrc}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-[8px]"
        ></iframe>
      )}
    </div>
  );
};

export default YouTubePlayer;
