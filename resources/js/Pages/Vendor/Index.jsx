import VendorLayout from "@/Layouts/VendorLayout";
import React, { useState, useEffect } from "react";
import { Link, useForm, usePage } from '@inertiajs/react';

const VendorIndex = () => {
  const { vendor, auth } = usePage().props;

  
  return (
       <VendorLayout 
        user={auth.user}
        // header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">المنتجات </h2>}
    >
      
  { vendor ? ( <div className="container px-5 py-24 mx-auto">  <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div className="w-full sm:p-4 px-4 mb-6">
        <h1 className="title-font font-medium text-xl mb-2 text-gray-900">{vendor.company_name}</h1>
        <div className="leading-relaxed">{vendor.description}</div>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-gray-900">{vendor.customers}</h2>
        <p className="leading-relaxed">عدد الزبائن </p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-gray-900">{vendor.employees}</h2>
        <p className="leading-relaxed"> عدد العمال </p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-gray-900">{vendor.main_branch}</h2>
        <p className="leading-relaxed"> الفرع الرئيسي </p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-gray-900">{vendor.branches}</h2>
        <p className="leading-relaxed"> عدد الافرع</p>
      </div>
    </div>
    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
    <div className=" bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative h-[700px]">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src={vendor.location_map}
            style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">عنوان المكتب</h2>
              <p className="mt-1">{vendor.address}</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">البريد الالكتروني</h2>
              <a className="text-indigo-500 leading-relaxed">{ vendor.email}</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">الهاتف</h2>
              <p className="leading-relaxed">{vendor.phone}</p>
            </div>
          </div>
        </div>
    </div>
  </div>
</section>

<Link href={route('vendor.edit', auth.user.id)} className="btn btn-primary">
    تعديل ملف الشركة
  </Link>
</div> ) : (
  <Link href="/vendor/vendor/create" className="btn btn-primary">
    انشاء ملف الشركة
      </Link>
      )
      }

    </VendorLayout>
  );
};

export default VendorIndex;