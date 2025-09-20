import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useTheme } from "../../context/ThemeContext";

const data = [
  { month: "Jan", currentWeek: 13, previousWeek: 8 },
  { month: "Feb", currentWeek: 8, previousWeek: 16 },
  { month: "Mar", currentWeek: 10, previousWeek: 17 },
  { month: "Apr", currentWeek: 16, previousWeek: 10 },
  { month: "May", currentWeek: 18, previousWeek: 11 },
  { month: "Jun", currentWeek: 21, previousWeek: 20 },
];

export default function RevenueChart() {
   const { theme } = useTheme();
  return (
    <div className="w-full max-w-4xl mx-auto p-6 h-full bg-gray-50 rounded-2xl dark:bg-neutral-800">
    
      <div className="mb-8">
        <div className="flex items-center gap-6 mb-4">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Revenue</h2>
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-black rounded-full dark:bg-white"></div>
              <span className="text-gray-900 font-medium dark:text-white">Current Week</span>
              <span className="font-semibold dark:text-white">$58,211</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-300 rounded-full "></div>
              <span className="text-gray-500 font-medium">Previous Week</span>
              <span className=" font-semibold dark:text-white">$68,768</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-40 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 30,
              bottom: 20,
            }}
          >
            <XAxis
              dataKey="month"
              axisLine={{ stroke: "#E5E7EB", strokeWidth: 1 }}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 14 }}
              className="text-gray-400"
              tickMargin={15}
            />
            <YAxis
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
              tickFormatter={(value) => `${value}M`}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 14 }}
              className="text-gray-400"
              tickMargin={20}
            />

            <CartesianGrid
              strokeDasharray="0"
              stroke="#F3F4F6"
              horizontal={true}
              vertical={false}
            />

            <Line
              type="monotone"
              dataKey="previousWeek"
              stroke="#93C5FD"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 4, fill: "#93C5FD" }}
            />

            <Line
              type="monotone"
              dataKey="currentWeek"
              stroke={theme === "light" ?"#000000":"#fff"}
              strokeWidth={3}
              strokeDasharray="8 4"
              dot={false}
              activeDot={{ r: 4, fill: "#000000" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
