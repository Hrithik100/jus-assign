import React, { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import Notification from "../components/notifications/Notification";
import DashboardContent from "../components/dashboardContent/DashboardContent";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      {(sidebarOpen || notificationOpen) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => {
            setSidebarOpen(false);
            setNotificationOpen(false);
          }}
        />
      )}

      <div className="hidden lg:grid lg:grid-cols-[250px_1fr_300px] min-h-screen">
        <Sidebar />
        <main className="flex flex-col">
          <Header
            title="Default"
            onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            onToggleNotifications={() => setNotificationOpen(!notificationOpen)}
          />
          <DashboardContent />
        </main>
        <Notification />
      </div>

      <div className="lg:hidden">
        <div
          className={`
          fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        >
          <Sidebar mobile onClose={() => setSidebarOpen(false)} />
        </div>

        <main className="flex flex-col min-h-screen">
          <Header
            title="Default"
            onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            onToggleNotifications={() => setNotificationOpen(!notificationOpen)}
            mobile
          />
          <DashboardContent />
        </main>

        <div
          className={`
          fixed inset-y-0 right-0 z-50 w-80 max-w-[90vw] transform transition-transform duration-300 ease-in-out
          ${notificationOpen ? "translate-x-0" : "translate-x-full"}
        `}
        >
          <Notification mobile onClose={() => setNotificationOpen(false)} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
