import React from "react";
import { FaBell, FaRedo, FaSearch, FaStar, FaSun } from "react-icons/fa";
import { HiOutlineSlash } from "react-icons/hi2";
import {
  PiBellDuotone,
  PiClockCounterClockwiseDuotone,
  PiCommandThin,
  PiMoonDuotone,
  PiSidebar,
  PiStarDuotone,
  PiSunDuotone,
} from "react-icons/pi";
import { useTheme } from "../../context/ThemeContext";

const Header = ({title}) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4 dark:bg-black dark:border-neutral-800">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <PiSidebar size={20} className="dark:text-white"/>
          <PiStarDuotone size={20} className="dark:text-white"/>
          <span className="text-gray-400">Dashboards</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 dark:text-white font-medium">{title}</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <FaSearch
              size={16}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 bg-gray-200 rounded-lg w-80 focus:outline-none text-gray-500 dark:bg-neutral-800"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm flex items-center">
              <PiCommandThin />
              <HiOutlineSlash />
            </span>
          </div>
          <button onClick={toggleTheme} className="cursor-pointer">
            {theme === "light" ? (
              <PiSunDuotone size={20} />
            ) : (
              <PiMoonDuotone size={20} className="dark:text-white"/>
            )}
          </button>
          <PiClockCounterClockwiseDuotone size={20} className="dark:text-white"/>
          <PiBellDuotone size={20} className="dark:text-white"/>
          <PiSidebar size={20} className="dark:text-white"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
