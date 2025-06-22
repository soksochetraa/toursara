import { useState, useEffect } from "react";
import {
  ArrowDownToDot,
  ArrowRightLeft,
  Armchair,
  BedSingle,
} from "lucide-react";

function Tickets({
  departure,
  arrival,
  departTime,
  arriveTime,
  price,
  onBook,
  onSubmit,
  busType,
  bookedSeats = [],
}) {
  const [showSeats, setShowSeats] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    setSelectedSeats([]);
  }, []);

  const handleBookingClick = () => {
    setShowSeats((prev) => !prev);
    if (onBook) onBook();
  };

  const handleSeatClick = (seat) => {
    if (bookedSeats.includes(seat)) return;
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const handleSubmit = () => {
    if (onSubmit) onSubmit(selectedSeats, selectedSeats.length * price);
  };

  const renderSeat = (icon, id) => {
    const isBooked = bookedSeats.includes(id);
    const isSelected = selectedSeats.includes(id);

    return (
      <div
        key={id}
        onClick={() => !isBooked && handleSeatClick(id)}
        className={`flex flex-col items-center justify-center p-1 rounded border shadow text-center cursor-pointer select-none transition text-xs
          ${
            isBooked
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : isSelected
              ? "bg-[#58A6A0] text-white"
              : "bg-white hover:bg-[#e7f7f6] hover:text-[#58A6A0]"
          }
        `}
      >
        {icon}
        <span className="mt-1 font-mono">{id}</span>
      </div>
    );
  };

  const renderSeatsFromMatrix = (matrix, iconType, prefix) => {
    let seatCount = 1;
    return (
      <div
        className="grid gap-1"
        style={{
          gridTemplateColumns: `repeat(${matrix[0].length}, minmax(0, 1fr))`,
        }}
      >
        {matrix.flatMap((row, rowIndex) =>
          row.map((cell, colIndex) => {
            const key = `${rowIndex}-${colIndex}`;
            if (cell === 0) return <div key={key}></div>;
            if (cell === 2)
              return (
                <div
                  key={key}
                  className="flex items-center justify-center bg-gray-200 rounded text-xs text-gray-500 py-2"
                >
                  Driver
                </div>
              );
            const id = `${prefix}${seatCount++}`;
            const icon =
              iconType === "bed" ? (
                <BedSingle size={24} />
              ) : (
                <Armchair size={24} />
              );
            return renderSeat(icon, id);
          })
        )}
      </div>
    );
  };

  const renderSeatsLayout = (type) => {
    if (type === "VAN") {
      const vanSeats = [
        [2, 0, 0, 1, 1],
        [1, 1, 1, 0, 0],
        [1, 1, 0, 0, 1],
        [1, 1, 0, 0, 1],
        [1, 1, 1, 1, 1],
      ];
      return (
        <div className="mt-4">
          {renderSeatsFromMatrix(vanSeats, "chair", "V")}
        </div>
      );
    }

    if (type === "Normal") {
      const normalSeats = [
        [2, 0, 0, 0, 0],
        [1, 1, 0, 1, 1],
        [1, 1, 0, 1, 1],
        [1, 1, 0, 1, 1],
        [1, 1, 0, 1, 1],
        [1, 1, 0, 1, 1],
        [1, 1, 0, 1, 1],
        [1, 1, 0, 1, 1],
        [1, 1, 1, 1, 1],
      ];
      return (
        <div className="mt-4">
          {renderSeatsFromMatrix(normalSeats, "chair", "B")}
        </div>
      );
    }

    if (type === "Night Bus") {
      const downstairs = [
        [2, 0, 0, 0, 0],
        [1, 1, 0, 0, 1],
        [1, 1, 0, 0, 1],
        [1, 1, 0, 0, 1],
        [1, 1, 1, 1, 1],
      ];
      const upstairs = [
        [0, 0, 0, 0, 0],
        [1, 1, 0, 0, 1],
        [1, 1, 0, 0, 1],
        [1, 1, 0, 0, 1],
        [1, 1, 1, 1, 1],
      ];
      return (
        <div className="flex flex-col gap-6 mt-4">
          <div>
            <p className="font-semibold text-gray-600 text-sm mb-2">
              Downstairs
            </p>
            {renderSeatsFromMatrix(downstairs, "bed", "D")}
          </div>
          <div>
            <p className="font-semibold text-gray-600 text-sm mb-2">Upstairs</p>
            {renderSeatsFromMatrix(upstairs, "bed", "U")}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all duration-300 mb-4">
      <div className="flex flex-col">
        <div className="flex p-4 justify-between bg-white z-10">
          <div className="flex flex-col justify-center gap-1">
            <div>
              <p className="text-xs text-gray-700 font-bold">
                Type : {busType} <br />
                Departure
              </p>
              <h2 className="text-xl font-semibold text-[#58A6A0]">
                {departure}
              </h2>
            </div>
            <div className="flex items-center gap-1">
              <ArrowDownToDot size={32} className="text-[#58A6A0]" />
              <div>
                <p className="text-xs text-gray-700 font-bold">Arrival</p>
                <h2 className="text-xl font-semibold text-[#58A6A0]">
                  {arrival}
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-black">
              <span className="text-sm">{departTime}</span>
              <ArrowRightLeft size={12} />
              <span className="text-sm">{arriveTime}</span>
            </div>
          </div>
          <div className="flex flex-col justify-between items-end">
            <div className="bg-[#58A6A0] text-white px-4 py-2 rounded text-xl font-semibold shadow">
              ${price} <span className="text-xs font-normal">/ seat</span>
            </div>
            <button
              onClick={handleBookingClick}
              className={`flex items-center gap-2 px-5 py-2 rounded-sm text-sm font-semibold transition-all duration-200 shadow-sm
              ${
                showSeats
                  ? "bg-gray-100 text-[#58A6A0] hover:bg-gray-200"
                  : "bg-[#58A6A0] text-white hover:bg-[#3f7d77]"
              }
            `}
            >
              {showSeats ? "Hide Seats" : "Book Now"}
            </button>
          </div>
        </div>

        {showSeats && (
          <div className="w-full bg-gray-50 px-4 pt-2 border-t border-dashed border-gray-300 pb-4">
            <p className="text-sm font-bold text-gray-700 mb-1">
              Available Seats
            </p>
            {renderSeatsLayout(busType)}

            {selectedSeats.length > 0 && (
              <div className="mt-4 flex flex-col items-end gap-2">
                <p className="text-sm font-semibold text-gray-800">
                  Seats:{" "}
                  <span className="font-mono">{selectedSeats.join(", ")}</span>
                </p>
                <p className="text-sm font-semibold text-gray-800">
                  Total: ${selectedSeats.length * price}
                </p>
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-[#58A6A0] text-white rounded font-semibold hover:bg-[#3f7d77] transition text-sm"
                >
                  Confirm Booking
                </button>
              </div>
            )}

            {selectedSeats.length === 0 && (
              <p className="mt-2 text-gray-600 italic text-xs">
                Please select your seats above
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Tickets;
