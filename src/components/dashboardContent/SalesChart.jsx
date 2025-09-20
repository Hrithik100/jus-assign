

import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Direct", value: 300.56, color: "#1f2937" },
  { name: "Affiliate", value: 135.18, color: "#86efac" },
  { name: "Sponsored", value: 154.02, color: "#93c5fd" },
  { name: "E-mail", value: 48.96, color: "#7dd3fc" },
];

const totalSales = data.reduce((sum, item) => sum + item.value, 0);

const SalesChart = () => {
  const [selected, setSelected] = useState(null);

  const renderCustomLabel = ({ cx, cy }) => {
    const value = selected ? selected.value : data[0].value;
    const percentage = ((value / totalSales) * 100).toFixed(1);

    return (
      <g>
        <text
          x={cx}
          y={cy - 8}
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-gray-700 text-lg font-semibold"
        >
          {percentage}%
        </text>
        <text
          x={cx}
          y={cy + 14}
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-gray-500 text-sm"
        >
          {selected ? selected.name : data[0].name}
        </text>
      </g>
    );
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-gray-50 rounded-2xl h-full dark:bg-neutral-800">
      <h2 className="text-base font-semibold text-gray-800 mb-6 dark:text-white">Total Sales</h2>

      <div className="relative mb-6">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomLabel}
              outerRadius={90}
              innerRadius={60}
              fill="#8884d8"
              dataKey="value"
              onClick={(_, index) => setSelected(data[index])}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

   
      <div className="space-y-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setSelected(item)}
          >
            <div className="flex items-center space-x-3">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-gray-600 text-sm font-medium dark:text-white">
                {item.name}
              </span>
            </div>
            <span className="text-gray-800 text-sm font-semibold dark:text-white">
              ${item.value.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesChart;
