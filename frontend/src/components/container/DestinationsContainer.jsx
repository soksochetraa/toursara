import { useState, useEffect } from "react";
import DestinationCard from "../cards/DestinatonCard";
import destinations from "../../data/destinationData";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DestinationsContainer = ({ searchQuery, onCardClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedAmenity, setSelectedAmenity] = useState("");
  const itemsPerPage = 3;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedAmenity]);

  const handleAmenityFilter = (amenity) => {
    setSelectedAmenity((prev) => (prev === amenity ? "" : amenity));
  };

  const filteredDestinations = destinations.filter(
    (destination) =>
      (destination.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        destination.location
          .toLowerCase()
          .includes(searchQuery.toLowerCase())) &&
      (selectedAmenity === "" ||
        destination.amenities.includes(selectedAmenity))
  );

  const totalPages = Math.ceil(filteredDestinations.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentData = filteredDestinations.slice(
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
      <div className="flex gap-2 self-stretch flex-wrap mb-[24px]">
        <div className="flex gap-2 self-stretch flex-wrap">
          {[
            "Temples",
            "Nature",
            "Beaches",
            "Adventure",
            "History",
            "Mountain",
          ].map((amenity) => (
            <button
              key={amenity}
              onClick={() => handleAmenityFilter(amenity)}
              className={`px-4 py-2 rounded-full border cursor-pointer ${
                selectedAmenity === amenity
                  ? "bg-[#58A6A0] text-white border-[#58A6A0]"
                  : "bg-white text-gray-700 border-gray-300"
              } hover:bg-[#58A6A0]/90 hover:text-white transition`}
            >
              {amenity}
            </button>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => setSelectedAmenity("")}
            className="cursor-pointer px-4 py-2 rounded-full border bg-[#58A6A0] text-white hover:bg-[#58A6A0]/90 transition"
          >
            Reset Filter
          </button>
        </div>
      </div>

      <div className="h-[750px] w-full flex flex-col justify-start gap-6">
        {currentData.length > 0 ? (
          currentData.map((destination) => (
            <div key={destination.id} onClick={() => onCardClick(destination)}>
              <DestinationCard {...destination} />
            </div>
          ))
        ) : (
          <div className="h-full flex items-center justify-center">
            <p className="text-gray-500 text-center">No destinations found.</p>
          </div>
        )}
      </div>

      <div className="mt-6">
        {filteredDestinations.length > 0 && renderPagination()}
      </div>
    </div>
  );
};

export default DestinationsContainer;
