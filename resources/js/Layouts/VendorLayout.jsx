
import React from 'react';
import { Link } from '@inertiajs/react';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import Avatar from 'react-avatar';
import { FaHome, FaBox, FaClipboardList } from 'react-icons/fa';

export default function VendorLayout({ children, user }) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-row flex-1">
        <nav className="bg-[#f1f2f6] w-1/6  ml-auto">
          <div className="flex justify-center items-center mb-4 py-10">
            <Avatar name="sami" size="50" round={true} />
            <div className="ml-4">{user && user.name}</div>
          </div>
          <ul className=" justify-center items-center space-y-2">
            <li className=' justify-center items-center' >
              <ResponsiveNavLink
                active={route().current("VendorDashboard")}
                method="get"
                href={route("VendorDashboard")}
                as="button"
              >
                <FaHome className="inline-block mr-2" />
                الرئيسية
              </ResponsiveNavLink>
            </li>
            <li>
              <ResponsiveNavLink
                active={route().current("vendorproduct.index")}
                method="get"
                href={route("vendorproduct.index")}
                as="button"
              >
                <FaBox className="inline-block mr-2" />
                المنتجات
              </ResponsiveNavLink>
            </li>
            <li>
              <ResponsiveNavLink
                active={route().current("vendororder.index")}
                method="get"
                href={route("vendororder.index")}
                as="button"
              >
                <FaClipboardList className="inline-block mr-2" />
                الطلبات
              </ResponsiveNavLink>
            </li>
            <li>
              <ResponsiveNavLink
                active={route().current("vendorprofile")}
                method="get"
                href={route("vendor.index")}
                as="button"
                // className="text-red-500 hover:text-red-700"
                >
                  ملف الشركة
                </ResponsiveNavLink>
                </li>
            <li>
                <ResponsiveNavLink
                     active={route().current("logout")}
                        method="post"
                        as="button"
                        href={route("logout")}
                        className="text-red-500 hover:text-red-700"
                    >
                        تسجيل الخروج
                    </ResponsiveNavLink>
            </li>

          </ul>
        </nav>
        <main className="flex-1 bg-gray-100 dark:bg-gray-800 p-4">
          <div className=" mt-32  gap-4bg-white rounded-lg shadow-lg p-4 bg-[#e3e4db]   h-auto" dir='rtl'>
        
          {children}
          </div>
          </main>
      </div>
    </div>
  );
}