import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";


const Dashboard = lazy(() => import("./pages/Dashboard"));
const OrderList = lazy(() => import("./pages/OrderList"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/order-list" element={<OrderList />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
