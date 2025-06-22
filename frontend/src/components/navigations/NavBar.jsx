import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/images/toursara_logo.svg";
import Button from "../buttons/ButtonGetStart";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location.pathname]);

  const links = [
    { label: "HOME", path: isLoggedIn ? "/explore" : "/" },
    { label: "ABOUT US", path: "/about" },
    { label: "ABOUT CAMBODIA", path: "/cambodia" },
    { label: "HOTEL", path: "/hotel" },
    { label: "TRAVEL", path: "/travel" },
    { label: "CONTACT", path: "/contact" },
  ];

  const getActivePath = (path) => {
    if (
      location.pathname === "/explore" ||
      location.pathname === "/explore/detail"
    ) {
      return path === "/explore" || (isLoggedIn && path === "/");
    } else if (location.pathname === "/hotel/detail") {
      return path === "/hotel";
    }
    return location.pathname === path;
  };

  const navClassName = ["/explore", "/hotel", "/travel"].includes(
    location.pathname
  )
    ? "relative navbar w-full flex justify-between px-[100px] py-[30px] z-50"
    : "navbar w-full flex justify-between px-[100px] py-[30px] z-10";

  return (
    <nav className={navClassName}>
      <img
        src={logo}
        alt="Logo"
        className="w-[111px] h-[125px] cursor-pointer"
        onClick={() => (window.location.href = isLoggedIn ? "/explore" : "/")}
      />
      <ul className="nav-links flex justify-around items-center w-[800px] h-[75px]">
        {links.map((link) => (
          <li
            className="group relative font-[Lato] font-bold text-[16px] text-[#58A6A0]"
            key={link.label}
          >
            <NavLink
              to={link.path}
              className="no-underline text-[#58A6A0] flex flex-col items-center transition-all duration-300"
            >
              {link.label}
              <span
                className={`block h-[2px] bg-[#58A6A0] mt-[1px] rounded-full transition-all duration-300 ${
                  getActivePath(link.path)
                    ? "w-6 h-0.5 opacity-100"
                    : "w-0 h-0.5 opacity-0"
                } group-hover:w-full group-hover:opacity-100`}
              ></span>
            </NavLink>
          </li>
        ))}
      </ul>

      {isLoggedIn ? (
        <div className="relative group">
          <button className="bg-[#58A6A0] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#4a8f8a] transition duration-300">
            PROFILE
          </button>
          <div className="absolute right-0 top-[50px] bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-50">
            <button
              onClick={() => navigate("/account")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              My Account
            </button>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                navigate("/");
              }}
              className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <Button text="GET STARTED" ariaLabel="Get Started Button" />
      )}
    </nav>
  );
};

export default NavBar;
