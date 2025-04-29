import { useState } from "react";
import ProvinceCard from "../cards/ProvinceCard";
import { ChevronRight, ChevronLeft } from "lucide-react";

function ProvincesContainer({ provinces, onProvinceClick }) {
  const handleCardClick = (index) => {
    const selected = provinces[index];
    if (onProvinceClick) {
      onProvinceClick(selected.name);
    }
    setStartIndex(index);
  };

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 5;

  const maxStartIndex = provinces.length - visibleCount;

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, maxStartIndex));
  };

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const visibleProvinces = provinces.slice(
    startIndex,
    startIndex + visibleCount
  );

  return (
    <div className="w-[1440px] relative flex flex-col  items-center">
      <div className="flex items-center gap-4 justify-start mt-[40px] mb-[20px] transition-all duration-300">
        {visibleProvinces.map((province, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(startIndex + index)}
            className="cursor-pointer transition-transform"
          >
            <ProvinceCard
              province={province}
              image={province.image}
              width={"260px"}
              height={"380px"}
            />
          </div>
        ))}
      </div>

      <button
        onClick={handlePrev}
        disabled={startIndex === 0}
        className={`z-10 absolute top-[50%] left-[3px] w-[60px] h-[60px] rounded-full flex items-center justify-center text-white transition-opacity duration-300  ${
          startIndex === 0
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-[#ef3a45]  cursor-pointer hover:bg-[#d2303b]"
        }`}
      >
        <ChevronLeft />
      </button>
      <button
        onClick={handleNext}
        disabled={startIndex >= maxStartIndex}
        className={`z-10 absolute top-[50%] right-[3px] w-[60px] h-[60px] rounded-full flex items-center justify-center text-white transition-opacity duration-300 ${
          startIndex >= maxStartIndex
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-[#ef3a45]  cursor-pointer hover:bg-[#d2303b]"
        }`}
      >
        <ChevronRight />
      </button>
    </div>
  );
}

export default ProvincesContainer;
