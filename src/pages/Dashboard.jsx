import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import Notification from "../components/notifications/Notification";
import DashboardContent from "../components/dashboardContent/DashboardContent";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 grid grid-cols-[250px_1fr_300px] dark:bg-black">
      <Sidebar />

      <main className="flex flex-col">
        <Header title="Default"/>
        <DashboardContent/>
      </main>

      <Notification />
    </div>
  );
};

export default Dashboard;
