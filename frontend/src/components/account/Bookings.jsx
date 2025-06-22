const exampleBookings = [
  {
    id: 1,
    type: "Hotel",
    name: "Angkor Palace Hotel",
    status: "Pending",
    date: "2025-07-10",
  },
  {
    id: 2,
    type: "Bus",
    name: "Phnom Penh to Siem Reap",
    status: "Paid",
    date: "2025-06-21",
  },
  {
    id: 3,
    type: "Hotel",
    name: "Golden Temple Retreat",
    status: "Cancelled",
    date: "2025-06-11",
  },
];

export default function Bookings() {
  return (
    <div className="space-y-4">
      {exampleBookings.map((booking) => (
        <div
          key={booking.id}
          className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
        >
          <div>
            <h4 className="font-semibold text-lg text-gray-800">
              {booking.name}
            </h4>
            <p className="text-sm text-gray-500">Type: {booking.type}</p>
            <p className="text-sm text-gray-500">Date: {booking.date}</p>
          </div>
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              booking.status === "Paid"
                ? "bg-green-100 text-green-700"
                : booking.status === "Pending"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {booking.status}
          </span>
        </div>
      ))}
    </div>
  );
}
