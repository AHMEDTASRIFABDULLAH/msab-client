import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext, useState } from "react";
import logo1 from "../assets/images/fav.png";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const handelLogout = () => {
    logOut();
    navigate("/login");
  };
  const handelMenu = (click) => {
    setMenu(click);
  };
  return (
    <div className="sticky top-0 z-40 bg-green-50">
      <div
        className={`bg-gray-50 text-shadow p-6 z-50 fixed top-0 left-0 min-h-screen w-52 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          menu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end items-center">
          <IoMdClose
            onClick={() => handelMenu(false)}
            className="cursor-pointer text-xl"
          />
        </div>
        <div className="mb-4 pt-6">
          <NavLink
            onClick={() => handelMenu(false)}
            className="border-b-2 text-gray-400 border-gray-600 py-2"
            to="/"
          >
            Home
          </NavLink>
        </div>
        <div className="flex flex-col gap-2 text-gray-400">
          <NavLink
            onClick={() => handelMenu(false)}
            className="border-b-2 border-gray-600 py-2"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => handelMenu(false)}
            className="border-b-2 border-gray-600 py-2"
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            onClick={() => handelMenu(false)}
            className="border-b-2 border-gray-600 py-2"
            to="/marathons"
          >
            All jobs
          </NavLink>
          {user && (
            <NavLink
              onClick={() => handelMenu(false)}
              className="border-b-2 border-gray-600 py-2"
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          )}
        </div>
      </div>

      {/* asidebar end */}
      <div className=" flex justify-between py-2 items-center shadow-sm bg-green-50 border-b border-gray-20 px-4 mx-auto">
        <div className=" hidden lg:block">
          <Link to="/" className="flex gap-2 items-center">
            <img
              className=" sm:hidden md:block rounded-lg h-14"
              src={logo1}
              alt=""
            />
            <span className=" hidden sm:block font-bold sm:text-xl md:text-3xl text-gray-900">
              <span className="text-[#F97316]">M</span>sab
            </span>
          </Link>
        </div>
        <div className="lg:hidden">
          <GiHamburgerMenu
            className="text-xl cursor-pointer"
            onClick={() => setMenu(true)}
          />
        </div>
        <ul className="lg:flex gap-1 sm:gap-6 items-center hidden lg:block">
          <li>
            <button>
              <NavLink
                className="text-black sm:py-2 sm:px-4 rounded-md  font-semibold"
                to="/"
              >
                Home
              </NavLink>
            </button>
          </li>
          <li>
            <button>
              <NavLink
                className="text-black sm:py-2 sm:px-4 rounded-md  font-semibold"
                to="/about"
              >
                About
              </NavLink>
            </button>
          </li>
          <li>
            <button>
              <NavLink
                className="text-black sm:py-2 sm:px-4 rounded-md  font-semibold"
                to="/contact"
              >
                Contact
              </NavLink>
            </button>
          </li>
          <li>
            <button className="text-black  font-semibold">
              <NavLink className={`py-2 px-4 rounded-md`} to="/marathons">
                All jobs
              </NavLink>
            </button>
          </li>
          {user ? (
            <li>
              <button className="text-black  font-semibold mr-6">
                <NavLink
                  className={`sm:py-2 sm:px-4 rounded-md`}
                  to={`dashboard`}
                >
                  Dashboard
                </NavLink>{" "}
              </button>
            </li>
          ) : (
            <></>
          )}
        </ul>
        <div className="flex">
          {!user && (
            <button className=" px-4 py-2 mr-3 rounded-md bg-orange-500  text-white font-semibold ">
              <Link className=" rounded-md" to="/login">
                Login
              </Link>
            </button>
          )}
          {user && (
            <div className="  dropdown dropdown-end z-50 ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar border-4 border-green-600"
              >
                <div title={user?.displayName} className="w-10 rounded-full">
                  <img
                    referrerPolicy="no-referrer"
                    alt="User Profile Photo"
                    src={user?.photoURL}
                  />
                </div>
              </div>
            </div>
          )}
          {user ? (
            <></>
          ) : (
            <button className="px-4 py-2 text-white  bg-orange-500 font-semibold  rounded-md ">
              <Link to="/signup">Register</Link>
            </button>
          )}
          {user && (
            <button onClick={handelLogout}>
              <NavLink
                className=" bg-orange-500 text-white ml-4 font-semibold 
                px-4 py-2 rounded-md"
                to="/signup"
              >
                Logout
              </NavLink>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
