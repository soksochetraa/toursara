import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/toursara_logo.svg";
import Button from "../buttons/ButtonGetStart";

const links = [
  { label: "HOME", path: "/" },
  { label: "ABOUT US", path: "/about" },
  { label: "ABOUT CAMBODIA", path: "/cambodia" },
  { label: "HOTEL", path: "/hotel" },
  { label: "TRAVEL", path: "/travel" },
  { label: "CONTACT", path: "/contact" },
];

const NavBar = () => {
  const location = useLocation();

  const getActivePath = (path) => {
    if (
      location.pathname === "/explore" ||
      location.pathname === "/explore/detail"
    ) {
      return path === "/";
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
        className="w-[111px] h-[125px] cursor-pointer "
        onClick={() => (window.location.href = "/")}
      />
      <ul className="nav-links flex justify-around items-center w-[800px] h-[75px]">
        {links.map((link) => (
          <li
            className="group relative font-[Lato] font-bold text-[16px] text-[#ef3a45]"
            key={link.label}
          >
            <NavLink
              to={link.path}
              className="no-underline text-[#ef3a45] flex flex-col items-center transition-all duration-300"
            >
              {link.label}
              <span
                className={`block h-[2px] bg-[#ef3a45] mt-[1px] rounded-full transition-all duration-300 ${
                  getActivePath(link.path)
                    ? "w-6 h-0.5 opacity-100"
                    : "w-0 h-0.5 opacity-0"
                } group-hover:w-full group-hover:opacity-100`}
              ></span>
            </NavLink>
          </li>
        ))}
      </ul>
      <Button text="GET STARTED" ariaLabel="Get Started Button" />
    </nav>
  );
};

export default NavBar;
