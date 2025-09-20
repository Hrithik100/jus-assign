import React from "react";
import { PiBugBeetle, PiUser } from "react-icons/pi";
import { RiSignalTowerLine } from "react-icons/ri";

const Notification = () => {
  const notifications = [
    {
      id: 1,
      text: "You have a bug that needs...",
      time: "Just now",
      type: "bug",
    },
    {
      id: 2,
      text: "New user registered",
      time: "59 minutes ago",
      type: "user",
    },
    {
      id: 3,
      text: "You have a bug that needs...",
      time: "12 hours ago",
      type: "bug",
    },
    {
      id: 4,
      text: "Andi Lane subscribed to you",
      time: "Today, 11:59 AM",
      type: "subscription",
    },
  ];

  const activities = [
    {
      id: 1,
      text: "You have a bug that needs...",
      time: "Just now",
    },
    {
      id: 2,
      text: "Released a new version",
      time: "59 minutes ago",
    },
    {
      id: 3,

      text: "Submitted a bug",
      time: "12 hours ago",
    },
    {
      id: 4,

      text: "Modified A data in Page X",
      time: "Today, 11:59 AM",
    },
    {
      id: 5,

      text: "Deleted a page in Project X",
      time: "Feb 2, 2023",
    },
  ];

  const contacts = [
    { id: 1, name: "Natali Craig" },
    { id: 2, name: "Drew Cano" },
    { id: 3, name: "Orlando Diggs" },
    { id: 4, name: "Andi Lane" },
    { id: 5, name: "Kate Morrison" },
    { id: 6, name: "Koray Okumus" },
  ];

  return (
    <div className=" bg-white border-l border-gray-200 p-6 dark:bg-black dark:border-neutral-800">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Notifications</h2>
      </div>

      <div className="space-y-4 mb-8">
        {notifications.map((notification) => (
          <div key={notification.id} className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
              {notification.type === "bug" ? (
                <PiBugBeetle />
              ) : notification.type === "user" ? (
                <PiUser />
              ) : (
                <RiSignalTowerLine />
              )}
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900 dark:text-white">{notification.text}</p>
              <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Activities</h2>
      </div>
      <div className="relative">
        <div className="absolute left-5 top-0 w-0.5 h-full bg-gray-200" />
        <ul className="space-y-6">
          {activities.map((activity, index) => (
            <li
              key={activity.id}
              className="relative flex items-start space-x-3"
            >
              <div className="relative z-10">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <PiUser />
                </div>
              </div>

              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800 dark:text-white">
                  {activity.text}
                </p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between mb-6 mt-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Contacts</h2>
      </div>
      <div className="space-y-3">
        {contacts.map((contact) => (
          <div key={contact.id} className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-sm">
              <PiUser />
            </div>
            <span className="text-sm text-gray-900 dark:text-white">{contact.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
