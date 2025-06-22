import hotels from "../../data/hotels";
import { Star } from "lucide-react";

export default function SavedHotels() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {hotels.map((hotel) => (
        <div
          key={hotel.id}
          className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all"
        >
          <img
            src={hotel.image}
            alt={hotel.title}
            className="h-56 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">{hotel.title}</h3>
            <p className="text-sm text-gray-500 mb-1">{hotel.location}</p>
            <p className="text-sm text-gray-600 mb-2">
              {hotel.description.slice(0, 80)}...
            </p>
            <div className="flex items-center text-yellow-500">
              <Star size={16} fill="currentColor" className="mr-1" />
              {hotel.rating} ({hotel.reviews} reviews)
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
