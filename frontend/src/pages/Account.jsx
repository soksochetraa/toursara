import { useState } from "react";
import { MapPin, Mail, Phone, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import EditUser from "../components/Account/EditUser";
import SavedHotels from "../components/Account/SavedHotels";
import Bookings from "../components/Account/Bookings";
import PaymentMethods from "../components/Account/PaymentMethods";
import Reviews from "../components/Account/Reviews";
import soksochetra from "../public/images/aboutus/soksochetra.jpg";

const initialUser = {
  name: "Sok Sochetra",
  email: "soksochetra@gmail.com",
  location: "Phnom Penh",
  phone: "+855 12345678",
  hotelsBooked: 7,
};

const tabs = [
  "Saved Hotels",
  "Bookings",
  "Payment Methods",
  "Reviews",
  "Edit Profile",
];

export default function Account() {
  const [user, setUser] = useState(initialUser);
  const [activeTab, setActiveTab] = useState("Saved Hotels");

  const renderContent = () => {
    switch (activeTab) {
      case "Saved Hotels":
        return <SavedHotels />;
      case "Bookings":
        return <Bookings />;
      case "Payment Methods":
        return <PaymentMethods />;
      case "Reviews":
        return <Reviews />;
      case "Edit Profile":
        return <EditUser user={user} setUser={setUser} />;
      default:
        return <p className="text-gray-600">Select a section</p>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-[50px] py-[40px] flex flex-col items-center gap-[30px]">
      <motion.header
        className="w-full max-w-[1360px] bg-white p-[30px] rounded-2xl flex flex-col sm:flex-row gap-[30px] sm:gap-[50px] items-start sm:items-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <img
          src={soksochetra}
          alt="User Avatar"
          className="w-[160px] h-[160px] rounded-xl object-cover"
        />
        <div>
          <h1 className="font-semibold text-[28px] sm:text-[32px] text-black">
            {user.name}
          </h1>
          <div className="flex flex-wrap gap-4 text-gray-600 text-sm mt-3">
            <span className="flex items-center gap-1">
              <Mail size={16} />
              {user.email}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={16} />
              {user.location}
            </span>
            <span className="flex items-center gap-1">
              <Phone size={16} />
              {user.phone}
            </span>
            <span className="flex items-center gap-1">
              <CalendarDays size={16} />
              {user.hotelsBooked} Hotels Booked
            </span>
          </div>
        </div>
      </motion.header>

      <div className="w-full max-w-[1360px] flex flex-col sm:flex-row gap-[30px]">
        <aside className="w-full sm:w-[260px] min-h-[500px] bg-white p-[25px] rounded-2xl shadow-md">
          <ul className="space-y-3 text-[16px] font-medium text-gray-700">
            {tabs.map((tab) => (
              <motion.li
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-green-100 text-green-800 font-semibold"
                    : "hover:bg-gray-100"
                }`}
                whileTap={{ scale: 0.98 }}
              >
                {tab}
              </motion.li>
            ))}
          </ul>
        </aside>

        <main className="flex-1 w-full min-h-[500px]">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-2xl shadow-sm"
          >
            {renderContent()}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
