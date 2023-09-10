import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Link, usePage } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import VendorLayout from "@/Layouts/VendorLayout";

export default function VendorOrder({ auth }) {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");



  const filteredOrders = orders.filter((order) => {
    const idMatch = order.id.toString().includes(searchTerm);
    const vendorNameMatch = order.vendorName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const orderDateMatch = order.orderDate
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const orderStatusMatch = order.orderStatus
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return idMatch || vendorNameMatch || orderDateMatch || orderStatusMatch;
  });

  return (
    <VendorLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Orders
        </h2>
      }
    >
      <Head title="Orders" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
          <div className="flex justify-between">
            <div className="w-1/3">
              <input
                type="text"
                className="form-input rounded-md shadow-sm"
                placeholder="البحث عن الطلبات"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-1/3 text-right">
              {/* <Link
                href={route("vendor.orders.create")}
                className="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-500 active:bg-blue-700 focus:outline-none focus:border-blue-900 focus:shadow-outline-blue disabled:opacity-25 transition ease-in-out duration-150"
              >
                Create Order
              </Link> */}
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                   رقم الطلب
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                    اسم المورد
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                    تاريخ الطلب
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                    حالة الطلب
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300"></th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id}>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                      <div className="flex items-center">
                        <div>
                          <div className="text-sm leading-5 font-medium text-gray-900">
                            {order.id}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                      <div className="text-sm leading-5 text-gray-900">
                        {order.vendorName}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                      <div className="text-sm leading-5 text-gray-900">
                        {order.orderDate}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          order.orderStatus === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : order.orderStatus === "Delivered"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {order.orderStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5 font-medium">
                      <Link
                        href={route("vendor.orders.show", order.id)}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </VendorLayout>
  );
}