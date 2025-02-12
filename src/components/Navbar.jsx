import { Link, NavLink, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import { AuthProviderContext } from "../Provider/AuthProvider";
import logo from "../assets/bl2.png"
import { FaBlog, FaMoon, FaSun } from "react-icons/fa";


const Navbar = () => {
    const { user, signOutUser, darkMode,setDarkMode } = useContext(AuthProviderContext);

    const location = useLocation();
    const [showTooltip, setShowTooltip] = useState(false);
    // const location = useLoaderData();
    const navigate = useNavigate();


    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (theme === 'dark') {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove('dark');
        }

    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };


    // Check if the current route is the home page
    // const isHomePage = location.pathname === "/";

    // Navbar background classes
    const navbarClass = 
         darkMode
            ? "bg-gray-900 text-white"
            : "bg-sky-500 "
      

    

    const links = <>

        <li><NavLink to='/'
            className={({ isActive }) =>
                `flex items-center gap-x-1  ${isActive ? 'text-yellow-400 font-bold' : 'text-white '}`
            }>Home</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            `flex items-center gap-x-1  ${isActive ? 'text-yellow-400 font-bold' : 'text-white'}`
        } to='/blogs'>All Blogs</NavLink></li>

        {
            user && (
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            `flex items-center ${isActive ? 'text-yellow-400 font-bold' : 'text-white'}`
                        }
                        to='/addBlog'
                    >
                        Add Blog
                    </NavLink>
                </li>
            )
                
        }
        <li><NavLink className={({ isActive }) =>
            `flex items-center gap-x-1  ${isActive ? 'text-yellow-400 font-bold' : 'text-white'}`
        } to='/featuredBlogs'>Featured Blogs</NavLink></li>
        {
            user && <>
                <li> <NavLink className={({ isActive }) =>
                    `flex items-center gap-0 ${isActive ? 'text-yellow-400 font-bold' : 'text-white'}`
                } to='/wishlist'> WishList</NavLink></li>
            </>
        }


    </>

    const handleLogOut = () => {
        signOutUser()
        .then(() => {
            navigate('/')
        })
        .catch((err) => {
            const error = err.message;
        })
      
    }
    return (
        <div className={`${navbarClass} container mx-auto sticky top-0 z-50`}>
            <div className={`navbar container w-[91%] mx-auto `}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn -ml-4 btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                        {links}
                    </ul>
                </div>
                {/* <div className="avatar w-12 h-8 md:w-20 md:h-14">
                    <img className="w-full h-full overflow-hidden rounded-lg object-cover" src={logo} alt="" />
                </div> */}
                
                <div className="flex justify-center -ml-2 md:-ml-0 mr-2 md:mr-3 items-center">
                    {/* <img className="w-full h-full overflow-hidden rounded-lg object-cover" src={logo} alt="" /> */}
                    <FaBlog className="text-white text-xl sm:text-2xl mr-1" />
                    <h2 className=" font-bold text-xl sm:text-2xl text-yellow-400">Blog</h2>
                    </div>
                <div className="flex justify-center items-center mt-1">
                <button
                    onClick={toggleTheme}
                    className="flex items-center  bg-white  p-0.5 rounded-full shadow-lg bg-gray-white dark:bg-gray-800 border border-white  transition-all duration-300"
                >
                    {theme === 'light' ? (
                        <FaMoon className="text-yellow-500 text-xs sm:text-base" />
                    ) : (
                        <FaSun className="text-orange-400 text-xs sm:text-base" />
                    )}
                   
                </button>
            </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal  space-x-2">
                    {links}

                </ul>
            </div>
            <div className="navbar-end flex  items-center gap-0.5 md:gap-2">
                <div className=" flex flex-col items-center">
                    {
                        user ?
                            <div className="flex items-center">
                                <div className="h-8 w-10 md:h-10 md:w-12  rounded-full px-1 relative" id='click' onMouseEnter={() => setShowTooltip(true)}
                                    onMouseLeave={() => setShowTooltip(false)}>
                                    <img className=" h-full border w-full  rounded-full object-cover overflow-hidden" src={user?.photoURL}
                                        alt="Avatar image"
                                    />
                                    <Tooltip className="z-10" anchorSelect="#click" clickable>
                                        <button> {user?.displayName}</button>
                                    </Tooltip>

                                </div>
                               

                            </div>
                            :

                            (<Link to='/auth/login' className="bg-white text-black  px-2 py-2 font-medium md:font-bold text-xs md:text-base rounded-lg hover:bg-sky-500 border hover:text-white">Login</Link>)
                    }

                </div>
                <div>
                    {
                        user && user?.email ?
                            (<button onClick={handleLogOut} className="bg-white text-black  px-2 py-2 font-medium md:font-bold text-xs md:text-base rounded-lg hover:bg-sky-500 border hover:text-white ">LogOut</button>)
                            :
                            (<Link to='/auth/register' className=" bg-white text-black  px-2 py-2 font-medium md:font-bold text-xs md:text-base rounded-lg hover:bg-sky-500 border hover:text-white ">Register</Link>)
                    }
                </div>

            </div>

        </div>
        </div>

    );
};

export default Navbar;