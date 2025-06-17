import { useState, useEffect, useMemo } from "react";
import HotelCard from "../cards/HotelCard";
import hotels from "../../data/hotels";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HotelsContainer = ({ searchQuery, selectedAmenity, onCardClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedAmenity]);

  const filteredHotels = useMemo(() => {
    return hotels.filter((hotel) => {
      const matchesSearch = hotel.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesAmenity = selectedAmenity
        ? hotel.amenities?.some((a) =>
            a.toLowerCase().includes(selectedAmenity.toLowerCase())
          )
        : true;

      return matchesSearch && matchesAmenity;
    });
  }, [searchQuery, selectedAmenity]);

  const totalPages = Math.ceil(filteredHotels.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentData = filteredHotels.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const renderPagination = () => {
    const buttons = [];

    buttons.push(
      <button
        key="prev"
        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
        className="px-2 py-2 cursor-pointer rounded bg-gray-200 text-gray-700 mx-1 disabled:opacity-50"
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
                ? "bg-[#58A6A0] text-white"
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
      <div className="h-[740px] w-full flex flex-col justify-start gap-6">
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
