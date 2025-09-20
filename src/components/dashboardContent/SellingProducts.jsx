import React from "react";

const SellingProducts = () => {
  const topProducts = [
    {
      Id: 1,
      name: "ASOS Ridley High Waist",
      price: "$79.49",
      quantity: 82,
      amount: "$6,518.18",
    },
    {
      Id: 2,
      name: "Marco Lightweight Shirt",
      price: "$128.50",
      quantity: 37,
      amount: "$4,754.50",
    },
    {
      Id: 3,
      name: "Half Sleeve Shirt",
      price: "$39.99",
      quantity: 64,
      amount: "$2,559.36",
    },
    {
      Id: 4,
      name: "Lightweight Jacket",
      price: "$20.00",
      quantity: 184,
      amount: "$3,680.00",
    },
    {
      Id: 5,
      name: "Marco Shoes",
      price: "$79.49",
      quantity: 64,
      amount: "$1,965.81",
    },
  ];

  return (
    <div className="bg-gray-50 rounded-2xl p-6 h-full dark:bg-neutral-800">
      <h3 className=" font-semibold text-gray-900 mb-4 dark:text-white">
        Top Selling Products
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left text-sm py-3 px-4 font-medium text-gray-500">
                Name
              </th>
              <th className="text-left text-sm py-3 px-4 font-medium text-gray-500">
                Price
              </th>
              <th className="text-left text-sm py-3 px-4 font-medium text-gray-500">
                Quantity
              </th>
              <th className="text-left text-sm py-3 px-4 font-medium text-gray-500">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {topProducts.map((product) => (
              <tr key={product.Id} className="border-b border-gray-100">
                <td className="py-3 px-4 text-sm text-gray-900 dark:text-white">{product.name}</td>
                <td className="py-3 px-4 text-sm text-gray-900 dark:text-white">{product.price}</td>
                <td className="py-3 px-4 text-sm text-gray-900 dark:text-white">{product.quantity}</td>
                <td className="py-3 px-4 text-sm text-gray-900 font-medium dark:text-white">
                  {product.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellingProducts;
