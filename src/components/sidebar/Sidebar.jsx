import React, { useState } from "react";
import {
  FaBuilding,
  FaCommentAlt,
  FaFileAlt,
  FaRegComments,
  FaUser,
} from "react-icons/fa";
import Logo from "../../assets/ByeWind.png";
import {
  PiBookOpenBold,
  PiChartPieSliceBold,
  PiFolderBold,
  PiIdentificationCardDuotone,
  PiNotebookDuotone,
  PiShoppingBagOpenBold,
  PiUsersThreeDuotone,
} from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { BiSolidUserBadge } from "react-icons/bi";
import { IoChevronDown, IoChevronForward, IoChevronUp } from "react-icons/io5";
import { FaRegRectangleList } from "react-icons/fa6";

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({
    userProfile: false,
    account: false,
    corporate: false,
    blog: false,
    social: false,
  });

  const toggleMenu = (menuName) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  const menuItems = [
    {
      id: "userProfile",
      label: "User Profile",
      icon: <BiSolidUserBadge size={20} />,
      hasSubmenu: true,
      submenuItems: [
        { label: "Overview", path: "/pages/user-profile/overview" },
        { label: "Projects", path: "/pages/user-profile/projects" },
        { label: "Campaigns", path: "/pages/user-profile/campaigns" },
        { label: "Documents", path: "/pages/user-profile/documents" },
        { label: "Followers", path: "/pages/user-profile/followers" },
      ],
    },
    {
      id: "account",
      label: "Account",
      icon: <PiIdentificationCardDuotone size={20} />,
      hasSubmenu: true,
      submenuItems: [],
    },
    {
      id: "corporate",
      label: "Corporate",
      icon: <PiUsersThreeDuotone size={20} />,
      hasSubmenu: true,
      submenuItems: [],
    },
    {
      id: "blog",
      label: "Blog",
      icon: <PiNotebookDuotone size={20} />,
      hasSubmenu: true,
      submenuItems: [],
    },
    {
      id: "social",
      label: "Social",
      icon: <FaRegComments size={20} />,
      hasSubmenu: true,
      submenuItems: [],
    },
  ];

  return (
    <div className=" bg-white border-r border-gray-200 flex flex-col p-2 dark:bg-black dark:border-neutral-800">
      <div className="p-4  border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold">
            <img src={Logo} alt="logo" />
          </div>
          <span className="font-semibold text-gray-900 dark:text-white">
            ByeWind
          </span>
        </div>
      </div>

      <div className="flex-1 px-4">
        <div className="mb-6">
          <div className="flex gap-8 mb-4 text-sm">
            <button className="text-gray-400 hover:text-gray-600">
              Favorites
            </button>
            <button className="text-gray-400  hover:text-gray-600">
              Recently
            </button>
          </div>
          <ul className="mt-2 mb-4 px-4">
            <li className=" list-disc text-gray-600 hover:text-gray-900 mb-2 dark:text-white dark:hover:text-gray-600 cursor-pointer">
              Overview
            </li>
            <li className=" list-disc text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-600 cursor-pointer">
              Projects
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-400 mb-2">Dashboards</h3>
          <ul className="">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-1 py-2 pl-4 rounded-lg ${
                    isActive
                      ? "text-gray-900 bg-gray-100 border-l-4 border-gray-900 dark:text-white dark:border-white dark:bg-neutral-800"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-neutral-800 dark:hover:text-white"
                  }`
                }
                end
              >
                <PiChartPieSliceBold size={16} />
                <span>Default</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/order-list"
                className={({ isActive }) =>
                  `flex items-center gap-1 py-2 pl-4 rounded-lg ${
                    isActive
                      ? "text-gray-900 bg-gray-100 border-l-4 border-gray-900 dark:text-white dark:border-white dark:bg-neutral-800"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-neutral-800 dark:hover:text-white"
                  }`
                }
              >
                <FaRegRectangleList size={16} />
                <span>Order List</span>
              </NavLink>
            </li>
            <li>
              <div className="flex items-center gap-1 py-2 pl-4 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-neutral-800 dark:hover:text-white cursor-pointer">
                <PiShoppingBagOpenBold size={16} />
                <span>eCommerce</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-1 py-2 pl-4 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-neutral-800 dark:hover:text-white cursor-pointer">
                <PiFolderBold size={16} />
                <span>Projects</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-1 py-2 pl-4 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-neutral-800 dark:hover:text-white cursor-pointer">
                <PiBookOpenBold size={16} />
                <span>Online Courses</span>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-400 mb-2">Pages</h3>
          <ul className="space-y-1">
            {menuItems.map((menuItem) => (
              <li key={menuItem.id}>
                {menuItem.hasSubmenu ? (
                  <>
                    <button
                      onClick={() => toggleMenu(menuItem.id)}
                      className="flex items-center justify-between w-full text-gray-600 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-50 dark:text-white dark:hover:bg-neutral-800 dark:hover:text-white"
                    >
                      <div className="flex items-center space-x-2">
                        <IoChevronForward
                          size={16}
                          className={`transform transition-transform duration-300 ${
                            openMenus[menuItem.id] ? "rotate-90" : "rotate-0"
                          }`}
                        />
                        {menuItem.icon}
                        <span>{menuItem.label}</span>
                      </div>
                    </button>
                    {openMenus[menuItem.id] && (
                      <ul className="mt-1 space-y-1">
                        {menuItem.submenuItems.map((subItem, index) => (
                          <li key={index}>
                            <div
                             
                              className=
                                "block ml-14 text-gray-600 hover:text-gray-900 p-1 rounded dark:text-white  dark:hover:text-gray-600 cursor-pointer"
                       
                            >
                              {subItem.label}
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <div
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-50"
                  >
                    {menuItem.icon}
                    <span>{menuItem.label}</span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
