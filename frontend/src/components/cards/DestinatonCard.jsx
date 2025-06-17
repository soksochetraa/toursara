import { Heart, Star } from "lucide-react";
import { useState } from "react";

const DestinationCard = ({
  id,
  image,
  location,
  title,
  description,
  amenities,
  rating,
  reviews,
  stays,
}) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <>
      <div className="w-[860px] h-[1.5px] rounded-full mb-[20px] bg-[#E5E7EB]"></div>
      <div className="w-[860px] flex gap-6 self-stretch cursor-pointer">
        <div className="w-[300px] h-[200px] flex justify-center items-center">
          <div
            className="w-[300px] h-[200px] rounded-xl border border-solid border-gray-200 overflow-hidden"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="flex flex-col gap-2 grow">
          <div className="flex gap-6 self-stretch">
            <div className="h-[60px] flex flex-col grow">
              <p className="font-normal text-sm text-gray-500">{location}</p>
              <h5 className="font-medium text-[20px] leading-[32px] text-gray-700">
                {title}
              </h5>
            </div>
            <button
              onClick={toggleLike}
              className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors duration-300 cursor-pointer"
            >
              <Heart size={20} color={liked ? "#45807b" : "#374151"} />
            </button>
          </div>
          <div className="w-[40px] h-[1.5px] bg-[#E5E7EB]"></div>
          <span className="">
            <p className="font-normal text-sm text-gray-500">{description}</p>
            <p className="mt-[10px] font-normal text-sm text-[#45807b]">
              {amenities}
            </p>
          </span>
          <div className="w-[40px] h-[1.5px] rounded-full bg-[#E5E7EB]"></div>
          <div className="flex justify-end items-end gap-4 self-stretch">
            <div className="flex items-center gap-1 grow">
              <p className="font-medium text-[20px] text-gray-700">{rating}</p>
              <Star size={20} color="#ffd500" />
              <p className="font-normal text-sm text-gray-700 p-2">
                ({reviews} Reviews)
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-medium text-[20px] text-gray-700">
                {stays} Stays
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationCard;
