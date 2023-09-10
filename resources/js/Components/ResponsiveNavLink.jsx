import { Link } from '@inertiajs/react';

export default function ResponsiveNavLink({ active = false, className = '', children, ...props }) {
  return (
    <Link
      {...props}
      className={`w-full flex items-center py-2  justify-center   ${
        active
          ? 'border-r-4 border-orange-300 dark:text-orange-600 text-orange-300 dark:text-orange-300  dark:bg-orange-900/50  focus:text-orange-300  dark:focus: text-[#d6a117] focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300'
          : 'border-r-4 border-transparent text-[#4c4d51] dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600'
      } text-base font-bold font-black   focus:outline-none transition duration-150 ease-in-out ${className}`}
    >
      {children}
      <div className="border-transparent text-gray-50    dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600"></div>
    </Link>
  );
}
