
import React, { useState } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Header from '../components/header/Header';
import OrdersTable from '../components/orders/OrdersTable';

const OrderList = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen w-full overflow-hidden bg-gray-50 dark:bg-black">
    
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

 
      <div className="hidden lg:grid lg:grid-cols-[250px_1fr] h-full">
        <Sidebar />
        <main className="flex flex-col h-full overflow-hidden">
          <Header 
            title="Order List"
            onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          />
          <div className="flex-1 overflow-y-auto">
            <OrdersTable />
          </div>
        </main>
      </div>

   
      <div className="lg:hidden h-full">
      
        <div className={`
          fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <Sidebar mobile onClose={() => setSidebarOpen(false)} />
        </div>

     
        <main className="flex flex-col h-full overflow-hidden">
          <Header 
            title="Order List"
            onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            mobile
          />
          <div className="flex-1 overflow-y-auto">
            <OrdersTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default OrderList;
