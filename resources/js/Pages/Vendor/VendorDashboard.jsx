import VendorLayout from "@/Layouts/VendorLayout";
import React, { useState, useEffect } from "react";

const VendorDashboard = () => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    fetch("/api/vendor/sales")
      .then((response) => response.json())
      .then((data) => setSalesData(data));
  }, []);

  return (
       <VendorLayout 
        // user={auth.user}
        // header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">المنتجات </h2>}
    >
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Vendor Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-lg font-bold mb-2">Total Sales</h2>
          <p className="text-3xl font-bold"></p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-lg font-bold mb-2">Total Orders</h2>
          <p className="text-3xl font-bold"></p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-lg font-bold mb-2">Total Products</h2>
          <p className="text-3xl font-bold"></p>
        </div>
      </div>
    </div>
    </VendorLayout>
  );
};

export default VendorDashboard;