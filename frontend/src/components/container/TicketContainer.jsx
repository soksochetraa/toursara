import { useState, useEffect, useMemo } from "react";
import Tickets from "../cards/Ticket";
import { busCompanies } from "../../data/busCompanies";
import {
  FiSearch,
  FiArrowRight,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiStar,
  FiClock,
  FiMapPin,
} from "react-icons/fi";

function TicketContainer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [departureFilter, setDepartureFilter] = useState("All");
  const [arrivalFilter, setArrivalFilter] = useState("All");
  const [selectedCompany, setSelectedCompany] = useState("Cambolink21");
  const [allDepartures, setAllDepartures] = useState([]);
  const [allArrivals, setAllArrivals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ticketsPerPage = 5;

  useEffect(() => {
    const departures = new Set();
    const arrivals = new Set();
    busCompanies.forEach((company) => {
      company.buses.forEach((bus) => {
        departures.add(bus.departure);
        arrivals.add(bus.arrival);
      });
    });
    setAllDepartures(["All", ...Array.from(departures).sort()]);
    setAllArrivals(["All", ...Array.from(arrivals).sort()]);
  }, []);

  const selectedCompanyData = useMemo(() => {
    return (
      busCompanies.find((company) => company.company === selectedCompany) || {
        company: "No company selected",
        buses: [],
        image: "",
        rating: 0,
        description: "",
        amenities: [],
        contact: "",
      }
    );
  }, [selectedCompany]);

  const filteredBuses = useMemo(() => {
    return selectedCompanyData.buses.filter((bus) => {
      const matchesDeparture =
        departureFilter === "All" || bus.departure === departureFilter;
      const matchesArrival =
        arrivalFilter === "All" || bus.arrival === arrivalFilter;
      const matchesSearch =
        searchQuery === "" ||
        bus.departure.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bus.arrival.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesDeparture && matchesArrival && matchesSearch;
    });
  }, [selectedCompanyData.buses, departureFilter, arrivalFilter, searchQuery]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredBuses]);

  const indexOfLastTicket = currentPage * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
  const currentTickets = filteredBuses.slice(
    indexOfFirstTicket,
    indexOfLastTicket
  );
  const totalPages = Math.ceil(filteredBuses.length / ticketsPerPage);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const clearFilters = () => {
    setSearchQuery("");
    setDepartureFilter("All");
    setArrivalFilter("All");
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="container mx-auto px-4 py-12 -mt-16 md:-mt-20 relative z-20">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex-shrink-0">
            Available Bus Routes
          </h2>

          <div className="w-full md:flex-1 md:px-4">
            <form
              onSubmit={handleSearch}
              className="w-full bg-white rounded-full p-2 shadow-md flex items-center"
            >
              <div className="flex-grow flex items-center px-4">
                <FiSearch className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  className="py-3 flex-grow outline-none text-gray-700 placeholder-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <FiX />
                  </button>
                )}
              </div>
              <button
                type="submit"
                className="bg-[#58A6A0] text-white rounded-full px-6 py-3 flex items-center hover:bg-[#4a8c87] transition-colors whitespace-nowrap"
              >
                Search <FiArrowRight className="ml-2" />
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <select
            className="bg-gray-100 border-0 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-[#58A6A0]"
            value={departureFilter}
            onChange={(e) => setDepartureFilter(e.target.value)}
          >
            {allDepartures.map((location) => (
              <option key={`dep-${location}`} value={location}>
                {location === "All" ? "All Departures" : location}
              </option>
            ))}
          </select>

          <select
            className="bg-gray-100 border-0 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-[#58A6A0]"
            value={arrivalFilter}
            onChange={(e) => setArrivalFilter(e.target.value)}
          >
            {allArrivals.map((location) => (
              <option key={`arr-${location}`} value={location}>
                {location === "All" ? "All Destinations" : location}
              </option>
            ))}
          </select>

          <div className="flex items-center space-x-2 gap-5 flex-shrink-0 ml-auto">
            <span className="w-[100px] text-sm text-gray-500 whitespace-nowrap">
              Showing {filteredBuses.length} results
            </span>
            <button
              onClick={clearFilters}
              className="text-sm text-[#58A6A0] hover:underline whitespace-nowrap"
            >
              Clear filters
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/4">
            <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800">
                  Bus Companies
                </h3>
              </div>
              <ul className="max-h-[400px] overflow-y-auto">
                {busCompanies.map((company) => (
                  <li key={company.company}>
                    <button
                      onClick={() => setSelectedCompany(company.company)}
                      className={`w-full text-left px-4 py-3 transition-colors ${
                        selectedCompany === company.company
                          ? "bg-[#58A6A0] text-white"
                          : "bg-white text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{company.company}</span>
                        <span
                          className={`text-sm ${
                            selectedCompany === company.company
                              ? "text-white"
                              : "text-gray-500"
                          }`}
                        >
                          {company.buses.length} routes
                        </span>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-2/4">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 min-h-[500px] flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">
                  {selectedCompanyData.company} Routes
                </h3>
                <span className="bg-[#58A6A0] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {filteredBuses.length}{" "}
                  {filteredBuses.length === 1 ? "route" : "routes"} found
                </span>
              </div>
              {filteredBuses.length > 0 ? (
                <>
                  <div className="space-y-4 flex-grow">
                    {currentTickets.map((ticket) => (
                      <Tickets key={ticket.id} {...ticket} />
                    ))}
                  </div>
                  <div className="mt-8 flex justify-center items-center">
                    <button
                      onClick={() => paginate(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className={`p-2 rounded-full ${
                        currentPage === 1
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <FiChevronLeft size={20} />
                    </button>
                    <div className="flex mx-4">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (number) => (
                          <button
                            key={number}
                            onClick={() => paginate(number)}
                            className={`w-10 h-10 mx-1 rounded-full ${
                              currentPage === number
                                ? "bg-[#58A6A0] text-white"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            {number}
                          </button>
                        )
                      )}
                    </div>
                    <button
                      onClick={() =>
                        paginate(Math.min(totalPages, currentPage + 1))
                      }
                      disabled={currentPage === totalPages}
                      className={`p-2 rounded-full ${
                        currentPage === totalPages
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <FiChevronRight size={20} />
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-12 flex-grow flex flex-col justify-center">
                  <h3 className="text-xl font-medium text-gray-600 mb-2">
                    No routes found
                  </h3>
                  <p className="text-gray-500">
                    Try adjusting your filters or select a different company
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm sticky top-4">
              <div className="p-6">
                <img
                  src={
                    selectedCompanyData.image ||
                    "https://via.placeholder.com/300x150?text=Bus+Company"
                  }
                  alt={selectedCompanyData.company}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {selectedCompanyData.company}
                </h3>
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        fill={
                          i < selectedCompanyData.rating
                            ? "currentColor"
                            : "none"
                        }
                        className="w-4 h-4"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {selectedCompanyData.rating.toFixed(1)} (120 reviews)
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  {selectedCompanyData.description ||
                    "Premium bus service with comfortable seating and modern amenities."}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <FiClock className="text-[#58A6A0] mr-2" />
                    <span className="text-gray-700">
                      Operating Hours: 6:00 AM - 10:00 PM
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FiMapPin className="text-[#58A6A0] mr-2" />
                    <span className="text-gray-700">
                      Main Terminal:{" "}
                      {selectedCompanyData.contact ||
                        "Phnom Penh Central Station"}
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-medium text-gray-800 mb-2">Amenities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCompanyData.amenities?.length > 0 ? (
                      selectedCompanyData.amenities.map((amenity, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {amenity}
                        </span>
                      ))
                    ) : (
                      <>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          WiFi
                        </span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          AC
                        </span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          Toilet
                        </span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          Charging Ports
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TicketContainer;
