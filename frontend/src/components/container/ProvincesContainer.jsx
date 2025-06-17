import { useState, useMemo } from "react";
import ProvinceCard from "../cards/ProvinceCard";
import {
  ChevronRight,
  ChevronLeft,
  Mountain,
  Trees,
  Landmark,
  Waves,
  Building,
  Building2,
  Sun,
  Tent,
  Flag,
} from "lucide-react";
import { motion } from "framer-motion";

const categoryIcons = {
  All: <Building2 size={24} />,
  Urban: <Building size={24} />,
  Countryside: <Tent size={24} />,
  Heritage: <Landmark size={24} />,
  Mountain: <Mountain size={24} />,
  Beach: <Sun size={24} />,
  River: <Waves size={24} />,
  Forest: <Trees size={24} />,
  Border: <Flag size={24} />,
};

const Filters = [
  "All",
  "Urban",
  "Countryside",
  "Heritage",
  "Mountain",
  "Beach",
  "River",
  "Forest",
  "Border",
];

function ProvincesContainer({ provinces, onProvinceClick }) {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const visibleCount = 5;
  const cardGap = 23;
  const cardWidth = 260;
  const totalCardWidth = cardWidth + cardGap;
  const containerWidth = visibleCount * totalCardWidth - cardGap;

  const filteredProvinces = useMemo(() => {
    if (selectedFilter === "All") return provinces;
    return provinces.filter((p) => p.category === selectedFilter);
  }, [provinces, selectedFilter]);

  const maxStartIndex = Math.max(0, filteredProvinces.length - visibleCount);

  const handleCardClick = (index) => {
    const selected = filteredProvinces[index];
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
      <div className="mb-6 flex gap-6 flex-wrap justify-start w-[1420px]">
        {Filters.map((filter) => (
          <button
            key={filter}
            onClick={() => {
              setSelectedFilter(filter);
              setStartIndex(0);
            }}
            className={`cursor-pointer flex flex-col items-center justify-center gap-1 text-sm text-[#333] px-4 py-2 relative transition-all duration-200
              ${selectedFilter === filter ? "text-[#58A6A0]" : "text-gray-500"}
            `}
          >
            <div className="text-[24px]">
              {categoryIcons[filter] || <Building2 size={24} />}
            </div>
            <span className="text-[12px] font-medium">{filter}</span>
            {selectedFilter === filter && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-[#333] rounded-full mt-1"></div>
            )}
          </button>
        ))}
      </div>

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
            {filteredProvinces.map((province, index) => (
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
        {startIndex > 0 && (
          <button
            onClick={handlePrev}
            className="cursor-pointer absolute left-[-20px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] rounded-full flex items-center justify-center text-white bg-[#58A6A0] hover:bg-[#45807b] transition duration-300"
          >
            <ChevronLeft />
          </button>
        )}

        {startIndex < maxStartIndex && (
          <button
            onClick={handleNext}
            className="cursor-pointer absolute right-[-20px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] rounded-full flex items-center justify-center text-white bg-[#58A6A0] hover:bg-[#45807b] transition duration-300"
          >
            <ChevronRight />
          </button>
        )}
      </div>
    </div>
  );
}

export default ProvincesContainer;
