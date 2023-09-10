import VendorLayout from '@/Layouts/VendorLayout'
import React from 'react'
import { Link, useForm, usePage } from '@inertiajs/react';

function Index() {
  const { auth, vendorProducts } = usePage().props;
  console.log(vendorProducts);
  return (
       <VendorLayout 
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">المنتجات </h2>}
    >

   <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6 mt-8">
  <Link href={route('vendorproduct.create')} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
    إضافة منتج جديد
  </Link>
    <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
        <tr>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        #
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        الصورة
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        الاسم
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        السعر
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        الكمية
        </th>
        <th scope="col" className="relative px-6 py-3">
        <span className="sr-only">Edit</span>
        </th>
        </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
        {vendorProducts.map((vendorProduct, index) => (
        <tr key={vendorProduct.id}>
        <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{index + 1}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{vendorProduct.name}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          {vendorProduct && vendorProduct.image && (
            <div className="flex-shrink-0 h-10 w-10">
              {/* <img className="h-10 w-10 rounded-full" src={{ asset('storage/' . vendorProduct.image) }} alt="" /> */}
            </div>
          )}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{vendorProduct.price}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{vendorProduct.quantity}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <Link href={route('vendorproduct.edit', vendorProduct.id)} className="text-indigo-600 hover:text-indigo-900">تعديل</Link>
        <Link href={route('vendorproduct.destroy', vendorProduct.id)} className=" text-red-700  hover:text-indigo-900 p-3">حذف</Link>
        </td>
        </tr> 
        ))}
        </tbody>
        </table>
        </div>
        </div>
        </div>
        </div>
        </div>

    </VendorLayout>
  )
}

export default Index