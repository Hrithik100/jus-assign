import React from "react";

const RevenueLocation = () => {
  const locations = [
    { name: "New York", revenue: "72K", x: 25, y: 35 },
    { name: "San Francisco", revenue: "39K", x: 15, y: 40 },
    { name: "Sydney", revenue: "25K", x: 82, y: 55 },
    { name: "Singapore", revenue: "61K", x: 75, y: 55 },
  ];

  return (
    <div className="bg-gray-50 rounded-2xl p-8 max-w-md mx-auto h-full dark:bg-neutral-800">
      <h2 className="text-sm font-semibold text-gray-800 mb-6 dark:text-white">
        Revenue by Location
      </h2>

   
      <div className="mb-8 relative">
        <svg viewBox="0 0 100 60" className="w-full h-32 bg-gray-50 rounded">
          <defs>
            <style>
              {`.land { fill: #e5e7eb; stroke: #d1d5db; stroke-width: 0.1; }`}
            </style>
          </defs>

          <path
            className="land"
            d="M5,25 L25,20 L30,25 L28,35 L20,40 L15,38 L10,35 Z"
          />

          <path
            className="land"
            d="M22,40 L28,38 L30,45 L28,52 L24,55 L20,52 L18,45 Z"
          />

          <path className="land" d="M45,20 L55,18 L58,25 L52,30 L48,28 Z" />

          <path
            className="land"
            d="M48,30 L58,28 L60,40 L58,50 L50,52 L46,45 Z"
          />

          <path
            className="land"
            d="M58,15 L85,10 L88,25 L85,35 L75,38 L65,35 L60,25 Z"
          />

          <path className="land" d="M75,45 L88,43 L90,50 L85,52 L78,50 Z" />

          {locations.map((location, index) => (
            <circle
              key={index}
              cx={location.x}
              cy={location.y}
              r="1.5"
              fill="#374151"
              className="drop-shadow-sm"
            />
          ))}
        </svg>
      </div>

      <div className="space-y-4">
        {locations.map((location, index) => (
          <div key={index} className="flex justify-between items-center py-2">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-gray-700 rounded-full mr-3 dark:bg-white"></div>
              <span className="text-gray-700 font-medium text-sm dark:text-white">{location.name}</span>
            </div>
            <span className="text-gray-800 font-semibold text-sm">
              {location.revenue}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueLocation;
