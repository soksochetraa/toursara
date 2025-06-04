import { useState } from "react";
import ProvinceCard from "../cards/ProvinceCard";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";

function ProvincesContainer({ provinces, onProvinceClick }) {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 5;
  const cardGap = 23;
  const cardWidth = 260;
  const totalCardWidth = cardWidth + cardGap;
  const containerWidth = visibleCount * totalCardWidth - cardGap;
  const maxStartIndex = Math.max(0, provinces.length - visibleCount);

  const handleCardClick = (index) => {
    const selected = provinces[index];
    if (onProvinceClick) {
      onProvinceClick(selected.name);
    }
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + visibleCount, maxStartIndex));
  };

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - visibleCount, 0));
  };

  const handleDragEnd = (event, info) => {
    const swipe = info.offset.x;
    if (swipe < -totalCardWidth * 2.5 && startIndex < maxStartIndex) {
      handleNext();
    } else if (swipe > totalCardWidth * 2.5 && startIndex > 0) {
      handlePrev();
    }
  };

  return (
    <div className="w-full flex flex-col items-center mt-[40px] mb-[20px]">
      <div className="relative" style={{ width: `${containerWidth}px` }}>
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-[23px]"
            animate={{ x: -startIndex * totalCardWidth }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
          >
            {provinces.map((province, index) => (
              <div
                key={province.name}
                onClick={() => handleCardClick(index)}
                className="cursor-pointer transition-transform"
              >
                <ProvinceCard
                  province={province}
                  image={province.image}
                  width="260px"
                  height="380px"
                />
              </div>
            ))}
          </motion.div>
        </div>

        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className={`absolute left-[-20px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] rounded-full flex items-center justify-center text-white transition duration-300 ${
            startIndex === 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-[#58A6A0] hover:bg-[#45807b] cursor-pointer"
          }`}
        >
          <ChevronLeft />
        </button>

        <button
          onClick={handleNext}
          disabled={startIndex >= maxStartIndex}
          className={`absolute right-[-20px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] rounded-full flex items-center justify-center text-white transition duration-300 ${
            startIndex >= maxStartIndex
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-[#58A6A0] hover:bg-[#45807b] cursor-pointer"
          }`}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

export default ProvincesContainer;
