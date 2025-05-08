import { useState, useEffect, useMemo } from "react";
import HotelCard from "../cards/HotelCard";
import hotels from "../../data/hotels";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const HotelsContainer = ({
  searchQuery,
  selectedAmenity,
  setSelectedAmenity,
  onCardClick,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const visibleCount = 5;
  const buttonGap = 12;
  const buttonWidth = 100;
  const totalButtonWidth = buttonWidth + buttonGap;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedAmenity]);

  const allAmenities = useMemo(() => {
    const amenitySet = new Set();
    hotels.forEach((hotel) => {
      hotel.amenities?.split("·").forEach((a) => amenitySet.add(a.trim()));
    });
    return Array.from(amenitySet);
  }, []);

  const maxStartIndex = Math.max(0, allAmenities.length - visibleCount);

  const filteredHotels = hotels.filter((hotel) => {
    const title = hotel?.title?.toLowerCase() || "";
    const location = hotel?.location?.toLowerCase() || "";
    const matchesSearch =
      title.includes(searchQuery.toLowerCase()) ||
      location.includes(searchQuery.toLowerCase());
    const matchesAmenity =
      !selectedAmenity ||
      hotel?.amenities
        ?.split("·")
        .map((a) => a.trim())
        .includes(selectedAmenity);
    return matchesSearch && matchesAmenity;
  });

  const totalPages = Math.ceil(filteredHotels.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentData = filteredHotels.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + visibleCount, maxStartIndex));
  };

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - visibleCount, 0));
  };

  const handleDragEnd = (event, info) => {
    const swipe = info.offset.x;
    if (swipe < -totalButtonWidth * 2.5 && startIndex < maxStartIndex) {
      handleNext();
    } else if (swipe > totalButtonWidth * 2.5 && startIndex > 0) {
      handlePrev();
    }
  };

  const renderPagination = () => {
    const buttons = [];

    buttons.push(
      <button
        key="prev"
        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
        className=" px-2 py-2 cursor-pointer rounded bg-gray-200 text-gray-700 mx-1 disabled:opacity-50"
        disabled={currentPage === 1}
      >
        <ChevronLeft size={20} />
      </button>
    );

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        buttons.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`px-3 py-1 cursor-pointer rounded mx-1 ${
              i === currentPage
                ? "bg-[#ef3a45] text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {i}
          </button>
        );
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        buttons.push(
          <span key={`ellipsis-${i}`} className="mx-2 text-gray-400">
            ...
          </span>
        );
      }
    }

    buttons.push(
      <button
        key="next"
        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
        className="px-2 py-2 cursor-pointer rounded bg-gray-200 text-gray-700 mx-1 disabled:opacity-50"
        disabled={currentPage === totalPages}
      >
        <ChevronRight size={20} />
      </button>
    );

    return <div className="flex justify-center">{buttons}</div>;
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full mb-6 relative ">
        <div className="w-full mb-6 relative overflow-hidden">
          <motion.div
            className="flex gap-[12px] px-2"
            animate={{ x: -startIndex * totalButtonWidth }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
          >
            {allAmenities.map((amenity) => (
              <div
                key={amenity}
                style={{ width: `${buttonWidth}px` }}
                className="flex-shrink-0"
              >
                <button
                  onClick={() =>
                    selectedAmenity === amenity
                      ? setSelectedAmenity("")
                      : setSelectedAmenity(amenity)
                  }
                  className={`flex flex-col items-center justify-center w-full h-[85px] px-2 py-2 rounded-lg border cursor-pointer transition
                ${
                  selectedAmenity === amenity
                    ? "bg-[#ef3a45] text-white border-[#ef3a45]"
                    : "bg-white text-gray-700 border-gray-300"
                } hover:bg-[#ef3a45]/90 hover:text-white`}
                >
                  <span className="text-xl mb-1">🏨</span>
                  <span className="text-xs text-center">{amenity}</span>
                </button>
              </div>
            ))}
          </motion.div>
        </div>

        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className={`absolute left-[-30px] top-1/2 -translate-y-1/2 z-10 w-[36px] h-[36px] rounded-full flex items-center justify-center text-white transition duration-300 ${
            startIndex === 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-[#ef3a45] hover:bg-[#d2303b] cursor-pointer"
          }`}
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={handleNext}
          disabled={startIndex >= maxStartIndex}
          className={`absolute right-[-30px] top-1/2 -translate-y-1/2 z-10 w-[36px] h-[36px] rounded-full flex items-center justify-center text-white transition duration-300 ${
            startIndex >= maxStartIndex
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-[#ef3a45] hover:bg-[#d2303b] cursor-pointer"
          }`}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="mb-4">
        <button
          onClick={() => setSelectedAmenity("")}
          className="cursor-pointer px-4 py-2 rounded-full border bg-[#ef3a45] text-white hover:bg-[#ef3a45]/90 transition"
        >
          Reset Filter
        </button>
      </div>

      <div className="h-[750px] w-full flex flex-col justify-start gap-6">
        {currentData.length > 0 ? (
          currentData.map((hotel) => (
            <div key={hotel.id} onClick={() => onCardClick(hotel)}>
              <HotelCard {...hotel} />
            </div>
          ))
        ) : (
          <div className="h-full flex items-center justify-center">
            <p className="text-gray-500 text-center">No hotels found.</p>
          </div>
        )}
      </div>

      <div className="mt-6">
        {filteredHotels.length > 0 && renderPagination()}
      </div>
    </div>
  );
};

export default HotelsContainer;
