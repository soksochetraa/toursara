import React from "react";
import arrow from "../../assets/images/arrow_hotel.svg";
import { Star } from "lucide-react";

export default function HotelHighlightCard({
  w = "780px",
  h = "615px",
  image,
  title,
  location,
  rating = 0,
}) {
  const fullStars = Math.floor(rating);
  const totalStars = 5;

  // Extract numeric values
  const width = parseInt(w);
  const height = parseInt(h);

  const scaleW = width / 780;
  const scaleH = height / 615;

  const padding = 48 * scaleW;
  const titleFontSize = 40 * scaleW;
  const locationFontSize = 20 * scaleW;
  const ratingFontSize = 18 * scaleW;
  const iconSize = 20 * scaleW;
  const contentHeight = 160 * scaleH;
  const contentMarginTop = height < 615 ? height * 0.47 : height * 0.6;

  return (
    <div
      className="relative object-cover rounded-2xl"
      style={{
        width: w,
        height: h,
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        cursor: "pointer",
      }}
    >
      <span className="absolute w-full h-full bg-gradient-to-b from-[#646464] to-black opacity-60 z-0 rounded-2xl" />

      <div
        className="w-full relative flex flex-col items-start gap-[15px] z-10"
        style={{
          height: `${contentHeight}px`,
          marginTop: `${contentMarginTop}px`,
          padding: `${padding}px`,
        }}
      >
        <h1
          className="font-bold text-white text-start"
          style={{
            fontSize: `${titleFontSize}px`,
            width: "60%",
          }}
        >
          {title}
        </h1>

        <div
          className="w-full flex items-center"
          style={{
            gap: `${40 * scaleW}px`,
            height: `${iconSize}px`,
          }}
        >
          <p
            className="font-normal text-white"
            style={{ fontSize: `${locationFontSize}px` }}
          >
            {location}
          </p>

          <div className="flex" style={{ gap: `${3 * scaleW}px` }}>
            {rating > 0 && (
              <>
                {[...Array(fullStars)].map((_, i) => (
                  <Star
                    key={`full-${i}`}
                    style={{ width: iconSize, height: iconSize }}
                    className="text-yellow-400"
                  />
                ))}
                {[...Array(totalStars - fullStars)].map((_, i) => (
                  <Star
                    key={`empty-${i}`}
                    style={{ width: iconSize, height: iconSize }}
                    className="text-gray-400"
                  />
                ))}
              </>
            )}
          </div>

          {rating > 0 && (
            <p
              className="font-normal text-white"
              style={{ fontSize: `${ratingFontSize}px` }}
            >
              ({Math.round(rating * 100) / 100} Rating)
            </p>
          )}

          <button className="cursor-pointer">
            <img src={arrow} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
