import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", actual: 18, projection: 20 },
  { month: "Feb", actual: 20, projection: 24 },
  { month: "Mar", actual: 19, projection: 21 },
  { month: "Apr", actual: 22, projection: 27 },
  { month: "May", actual: 15, projection: 18 },
  { month: "Jun", actual: 20, projection: 24 },
];

const ProjectionChart = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-gray-50 rounded-2xl p-4 dark:bg-neutral-800">
      <h2 className="text-lg font-semibold mb-4 dark:text-white">Projections vs Actuals</h2>

      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} barSize={30}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `${value}M`}
          />
          <Tooltip formatter={(value) => `${value}M`} />

        
          <Bar dataKey="actual" stackId="a" fill="#a8c5da" radius={[4, 4, 0, 0]} />

        
          <Bar
            dataKey="projection"
            stackId="a"
            fill="#d3e2ec"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProjectionChart;
