import { useState } from "react";
import { FaBars, FaCalendarAlt, FaHome } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navItems = [
    { id: "", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "team", label: "Team" },
    { id: "blog", label: "Blog" },
  ];

  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <div className="w-full fixed shadow-lg z-50 py-4 px-4">
      {/* container */}
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to={"/"} className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
            <FaHome className="text-xl text-white" />
          </div>
          <div className="font-heading text-2xl font-bold text-gray-800">
            Design<span className="text-accent">Haven</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center  space-x-6">
          {navItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.id === "" ? "/" : `/${item.id}`}
              className={({ isActive }) =>
                `relative font-medium transition-all duration-300 ${isActive ? "text-accent after:w-full" : "text-gray-700 after:w-0 hover:text-accent hover:after:w-full"} after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:bg-accent after:transition-all after:duration-300`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to={"/contact"}
            className="px-5 py-1 bg-accent text-white rounded-full"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu */}
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setOpenMobileMenu((prev) => !prev)}
        >
          {openMobileMenu ? (
            <FaXmark className="text-2xl text-accent" />
          ) : (
            <FaBars className="text-2xl text-accent" />
          )}
        </button>
      </div>
      {/* Mobile Menu items */}
      {openMobileMenu && (
        <div className="md:hidden mt-6 pb-4">
          <div className="flex flex-col items-center space-y-6">
            {navItems.map((item, idx) => (
              <Link
                to={item.id === "" ? "/" : `/${item.id}`}
                key={idx}
                onClick={() => setOpenMobileMenu((prev) => !prev)}
              >
                {item.label}
              </Link>
            ))}

            <Link
              to={"/contact"}
              onClick={() => setOpenMobileMenu((prev) => !prev)}
              className="px-6 py-3 bg-accent text-white rounded-full flex items-center justify-center gap-2"
            >
              <FaCalendarAlt />
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
