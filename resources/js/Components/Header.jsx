import { usePage } from "@inertiajs/react"
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';

export default function Header() {
    const {auth} = usePage().props
  return (
    <header className="text-gray-600 body-font ">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">اجير</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900" href="/contact">
                            تواصل معنا</a>
                        <a className="mr-5 hover:text-gray-900" href="/about">من نحن</a>
                        <a className="mr-5 hover:text-gray-900" href="/offices">
                            قائمة المكاتب
                        </a>
                        <a className="mr-5 hover:text-gray-900" href="/products">
                            قائمة العاملات
                        </a>
                    </nav>
                    {
                        <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right z-10">
                            {auth.user ? (
                                <div className="flex items-center">
                                <a
                                    href="/customer/customerDashboard"
                                    className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    {" "}
                                    صفحتي الخاصة
                                </a>
                                   <ResponsiveNavLink
                                   active={route().current("logout")}
                                      method="post"
                                      as="button"
                                      href={route("logout")}
                                  >
                                      تسجيل الخروج
                                  </ResponsiveNavLink>
</div>
                            ) : (
                                <>
                                    <a
                                        href="/login"
                                        className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                                    >
                                        تسجيل الدخول
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-4 h-4 ml-1"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                    <a
                                        href="/register"
                                        className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >
                                        {" "}
                                        تسجيل جديد
                                    </a>
                                </>
                            )}
                        </div>
                    }
                </div>
            </header>

            
  )
}
