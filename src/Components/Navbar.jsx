import { FaFacebook } from "react-icons/fa";
import { AiOutlineShop } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { PiVideoBold } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { GrGamepad } from "react-icons/gr";
import { CgMenuGridR } from "react-icons/cg";
import { FaFacebookMessenger } from "react-icons/fa";
import { AiFillBell } from "react-icons/ai";

function Navbar() {
  return (
    <div className="w-full fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center justify-between px-2 bg-white">
      <div className="flex items-center gap-3.5 text-5xl h-full">
        <FaFacebook className="text-blue-700" />
        <input
          className="px-3.5 bg-[#f1f2f6] focus:outline-blue-400 text-[20px] hidden lg:block text-gray-500 rounded-full w-65 h-[70%]"
          type="text"
          placeholder="Search Facebook"
        />
      </div>
      <div className="lg:flex hidden items-center grow-1 justify-around h-full text-3xl text-gray-500">
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? `text-blue-600` :` `}
        >
          <AiOutlineHome />
        </NavLink>
        <NavLink
          to="/video"
          className={({ isActive }) => isActive ? `text-blue-600` :` `}
        >
          <PiVideoBold />
        </NavLink>
        <NavLink
          to="/marketplace"
          className={({ isActive }) => isActive ? `text-blue-600` :` `}
        >
          <AiOutlineShop />
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) => isActive ? `text-blue-600` :` `}
        >
          <CgProfile />
        </NavLink>
        <NavLink
          to="/games"
          className={({ isActive }) => isActive ? `text-blue-600` :` `}
        >
          <GrGamepad />
        </NavLink>
      </div>
      <div className="flex items-center gap-3 h-full text-3xl text-black">
        <div className="flex lg:hidden gap-3.5 items-center justify-around h-full text-4xl text-gray-500">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? `text-blue-600` :` `}
          >
            <AiOutlineHome />
          </NavLink>
          <NavLink
            to="/video"
            className={({ isActive }) => isActive ? `text-blue-600` :` `}
          >
            <PiVideoBold />
          </NavLink>
          <NavLink
            to="/marketplace"
            className={({ isActive }) => isActive ? `text-blue-600` :` `}
          >
            <AiOutlineShop />
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) => isActive ? `text-blue-600` :` `}
          >
            <img
              className="w-10 rounded-full h-10"
              src="\images\myprofile.jpg"
              alt=""
            />
          </NavLink>
        </div>
        <NavLink className="bg-gray-300 hidden lg:block rounded-full p-1.5">
          <CgMenuGridR />
        </NavLink>
        <NavLink className="bg-gray-300 hidden lg:block rounded-full p-1.5">
          <FaFacebookMessenger />
        </NavLink>
        <NavLink className="bg-gray-300 hidden lg:block rounded-full p-1.5">
          <AiFillBell />
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
