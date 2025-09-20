import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Header from '../components/header/Header'
import OrdersTable from '../components/orders/OrdersTable'

const OrderList = () => {
  return (
   <div className="min-h-screen bg-gray-50 grid grid-cols-[250px_1fr] dark:bg-black">
      <Sidebar />

      <main className="flex flex-col">
        <Header title="Order List"/>
        <OrdersTable/>
      </main>
    </div>
  )
}

export default OrderList