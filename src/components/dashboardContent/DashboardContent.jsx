


import React from "react";
import ProjectionChart from "./ProjectionChart";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import RevenueChart from "./RevenueChart";
import RevenueLocation from "./RevenueLocation";
import SellingProducts from "./SellingProducts";
import SalesChart from "./SalesChart";

const DashboardContent = () => {
  return (
    <section className="flex-1 p-4 sm:p-6 bg-white dark:bg-black">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 dark:text-white">
        eCommerce
      </h1>
      
 
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
       
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-blue-50 rounded-2xl p-4 sm:p-6">
            <h3 className="text-xs sm:text-sm font-semibold text-black mb-2">Customers</h3>
            <div className="flex flex-col sm:flex-row sm:items-baseline space-y-1 sm:space-y-0 sm:space-x-4 mt-2 sm:mt-4">
              <span className="text-xl sm:text-2xl font-semibold text-black">3,781</span>
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-black text-xs sm:text-sm font-medium">+11.01%</span>
                <div className="text-black">
                  <HiMiniArrowTrendingUp size={16} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-2xl p-4 sm:p-6 dark:bg-neutral-800">
            <h3 className="text-xs sm:text-sm font-semibold text-black mb-2 dark:text-white">Orders</h3>
            <div className="flex flex-col sm:flex-row sm:items-baseline space-y-1 sm:space-y-0 sm:space-x-4 mt-2 sm:mt-4">
              <span className="text-xl sm:text-2xl font-semibold text-black dark:text-white">1,219</span>
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-black text-xs sm:text-sm font-medium dark:text-white">-0.03%</span>
                <span className="text-black rotate-180 dark:text-white">
                  <HiMiniArrowTrendingUp size={16} />
                </span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-2xl p-4 sm:p-6 dark:bg-neutral-800">
            <h3 className="text-xs sm:text-sm font-semibold text-black mb-2 dark:text-white">Revenue</h3>
            <div className="flex flex-col sm:flex-row sm:items-baseline space-y-1 sm:space-y-0 sm:space-x-4 mt-2 sm:mt-4">
              <span className="text-xl sm:text-2xl font-semibold text-black dark:text-white">$695</span>
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-black text-xs sm:text-sm font-medium dark:text-white">+15.03%</span>
                <div className="text-black dark:text-white">
                  <HiMiniArrowTrendingUp size={16} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#d3e2ec] rounded-2xl p-4 sm:p-6">
            <h3 className="text-xs sm:text-sm font-semibold text-black mb-2">Growth</h3>
            <div className="flex flex-col sm:flex-row sm:items-baseline space-y-1 sm:space-y-0 sm:space-x-4 mt-2 sm:mt-4">
              <span className="text-xl sm:text-2xl font-semibold text-black">30.1%</span>
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-black text-xs sm:text-sm font-medium">+6.08%</span>
                <div className="text-black">
                  <HiMiniArrowTrendingUp size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Projection Chart */}
        <div className="order-first xl:order-none">
          <ProjectionChart />
        </div>
      </div>

    
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div className="lg:col-span-1">
          <RevenueLocation />
        </div>
      </div>

  
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <SellingProducts />
        </div>
        <div className="lg:col-span-1">
          <SalesChart />
        </div>
      </div>
    </section>
  );
};

export default DashboardContent;