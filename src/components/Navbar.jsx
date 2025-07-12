import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import { AuthProviderContext } from "../Provider/AuthProvider";
import { FaBlog, FaMoon, FaSun } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const { user, signOutUser, darkMode, setDarkMode } = useContext(AuthProviderContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");
  const [showTooltip, setShowTooltip] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navbarClass = darkMode
    ? "bg-gray-900 text-white border-b border-gray-700"
    : "bg-sky-500 text-white";

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-x-1 px-2 py-1 text-sm md:text-base ${
      isActive ? "text-yellow-400 font-bold" : "text-white"
    }`;

  const links = (
    <>
      <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
      <li><NavLink to="/blogs" className={navLinkClass}>All Blogs</NavLink></li>
      {user && <li><NavLink to="/addBlog" className={navLinkClass}>Add Blog</NavLink></li>}
      <li><NavLink to="/featuredBlogs" className={navLinkClass}>Featured Blogs</NavLink></li>
      {user && <li><NavLink to="/wishlist" className={navLinkClass}>WishList</NavLink></li>}
    </>
  );

  const handleLogOut = () => {
    signOutUser()
      .then(() => navigate("/"))
      .catch((err) => console.log(err.message));
  };

  return (
    <div className={`${navbarClass} sticky top-0 z-50`}>
      <div className="w-[90%] mx-auto flex items-center justify-between py-3">
        {/* Left: Logo + Hamburger + Theme Toggle */}
        <div className="flex items-center">
          {/* Hamburger (sm only) */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="-ml-4 p-2 text-white text-xl focus:outline-none"
            >
              <GiHamburgerMenu />
            </button>
            {isOpen && (
              <ul className="absolute bg-black rounded mt-2 w-52 p-2 z-50 shadow space-y-1">
                {links}
              </ul>
            )}
          </div>

          {/* Logo */}
          <div className="flex justify-center ml-1 md:-ml-0 mr-2 md:mr-3 items-center">
            <FaBlog className="text-yellow-400 md:text-white text-xl sm:text-2xl mr-1" />
            <h2 className="font-bold text-xl sm:text-2xl text-yellow-400">Blog</h2>
          </div>

          {/* Theme Toggle */}
          <div className="flex justify-center items-center mt-1">
            <button
              onClick={toggleTheme}
              className="flex items-center bg-white p-0.5 rounded-full shadow-lg dark:bg-gray-800 border border-white transition-all duration-300"
            >
              {theme === "light" ? (
                <FaMoon className="text-yellow-500 text-xs sm:text-base" />
              ) : (
                <FaSun className="text-orange-400 text-xs sm:text-base" />
              )}
            </button>
          </div>
        </div>

        {/* Center: Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="flex gap-2 items-center">{links}</ul>
        </div>

        {/* Right: Auth buttons */}
        <div className="flex items-center gap-0.5 md:gap-2">
          <div className="flex flex-col items-center">
            {user ? (
              <div className="flex items-center">
                <div
                  className="h-8 w-10 md:h-10 md:w-12 rounded-full px-1 relative"
                  id="click"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <img
                    className="h-full w-full rounded-full object-cover border"
                    src={user?.photoURL}
                    alt="Avatar"
                  />
                  <Tooltip className="z-10" anchorSelect="#click" clickable>
                    <button>{user?.displayName}</button>
                  </Tooltip>
                </div>
              </div>
            ) : (
              <Link
                to="/auth/login"
                className="bg-white text-black px-2 py-2 font-medium md:font-bold text-xs md:text-base rounded-lg border hover:text-sky-500"
              >
                Login
              </Link>
            )}
          </div>
          <div className="flex items-center justify-center">
            {user?.email ? (
              <button
                onClick={handleLogOut}
                className="bg-white text-black px-2 py-2 font-medium md:font-bold text-xs md:text-base rounded-lg border hover:text-sky-500"
              >
                LogOut
              </button>
            ) : (
              <Link
                to="/auth/register"
                className="bg-white text-black px-2 py-2 font-medium md:font-bold text-xs md:text-base rounded-lg border hover:text-sky-500"
              >
                SignUp
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
