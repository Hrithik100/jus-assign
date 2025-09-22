import React from "react";
import { FaSearch } from "react-icons/fa";
import { HiOutlineSlash, HiXMark } from "react-icons/hi2";
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

const Header = ({ title, onToggleSidebar, onToggleNotifications, mobile }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4 dark:bg-black dark:border-neutral-800">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-4 min-w-0 flex-1">
          <button
            onClick={onToggleSidebar}
            className="p-1 hover:bg-gray-100 rounded-md dark:hover:bg-neutral-800"
          >
            <PiSidebar size={20} className="dark:text-white" />
          </button>

          <div className="hidden sm:flex items-center space-x-4 min-w-0">
            <PiStarDuotone size={20} className="dark:text-white" />
            <span className="text-gray-400 text-sm">Dashboards</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 dark:text-white font-medium text-sm truncate">
              {title}
            </span>
          </div>

          <div className="sm:hidden">
            <span className="text-gray-900 dark:text-white font-medium text-lg">
              {title}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="relative hidden sm:block">
            <FaSearch
              size={16}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-12 py-2 bg-gray-200 rounded-lg w-48 lg:w-80 focus:outline-none text-gray-500 dark:bg-neutral-800 text-sm"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm flex items-center">
              <PiCommandThin />
              <HiOutlineSlash />
            </span>
          </div>

          <button className="sm:hidden p-2 hover:bg-gray-100 rounded-md dark:hover:bg-neutral-800">
            <FaSearch size={16} className="text-gray-500 dark:text-white" />
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-gray-100 rounded-md dark:hover:bg-neutral-800"
          >
            {theme === "light" ? (
              <PiSunDuotone size={20} />
            ) : (
              <PiMoonDuotone size={20} className="dark:text-white" />
            )}
          </button>

          <button className="hidden sm:block p-2 hover:bg-gray-100 rounded-md dark:hover:bg-neutral-800">
            <PiClockCounterClockwiseDuotone
              size={20}
              className="dark:text-white"
            />
          </button>

          <button
            onClick={onToggleNotifications}
            className="p-2 hover:bg-gray-100 rounded-md dark:hover:bg-neutral-800"
          >
            <PiBellDuotone size={20} className="dark:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
