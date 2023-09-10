import { Link, Head } from "@inertiajs/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/Components/Header";


// import { Link } from '@inertiajs/react';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    // };

    // const slides = [
    //     {
    //         title: "Slide 1",
    //         description:
    //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //         image: "https://via.placeholder.com/300x200.png?text=Product+1",
    //     },
    //     {
    //         title: "Slide 2",
    //         description:
    //             "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //         image: "https://via.placeholder.com/300x200.png?text=Product+1",
    //     },
    //     {
    //         title: "Slide 3",
    //         description:
    //             "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //         image: "https://via.placeholder.com/300x200.png?text=Product+1",
    //     },
    // ];
    // const products = [
    //     {
    //         id: 1,
    //         name: "Product 1",
    //         description:
    //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //         price: 19.99,
    //         image: "https://via.placeholder.com/300x200.png?text=Product+1",
    //     },
    //     {
    //         id: 2,
    //         name: "Product 2",
    //         description:
    //             "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //         price: 29.99,
    //         image: "https://via.placeholder.com/300x200.png?text=Product+2",
    //     },
    //     {
    //         id: 3,
    //         name: "Product 3",
    //         description:
    //             "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //         price: 39.99,
    //         image: "https://via.placeholder.com/300x200.png?text=Product+3",
    //     },
    // ];
    // const categories = [
    //     {
    //         id: 1,
    //         name: "Category 1",
    //         image: "https://via.placeholder.com/300x200.png?text=Category+1",
    //     },
    //     {
    //         id: 2,
    //         name: "Category 2",
    //         image: "https://via.placeholder.com/300x200.png?text=Category+2",
    //     },
    //     {
    //         id: 3,
    //         name: "Category 3",
    //         image: "https://via.placeholder.com/300x200.png?text=Category+3",
    //     },
    // ];

    return (
        <div className="bg-gray-100">
            {/* Header section */}
            <Head>
                <title>الصفحة الرئيسية</title>
            </Head>

            {/* <Sidebar /> */}
          <Header />

            {/* Navigation bar */}

            {/* Banner section */}

            <section className="relative bg-[url(https://cdn.discordapp.com/attachments/1121901933377101824/1125169116832075849/sami.almamari_hijab_house_maid_clean_living_room__table__sofa_61375f08-c1c3-4808-b7f9-5a7d9ba0272e.png)] bg-cover bg-center bg-no-repeat">
                <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

                <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            <strong className="block font-extrabold text-[#8e7d90]">
                                اجير
                            </strong>
                        </h1>
{/* <div className="mask mask-squircle bg-slate-300"> */}
                        <p className="mt-4 max-w-lg sm:text-xl/relaxed ">
                            اكتشف مكاتب استقدام العاملات المنزلية وتصفح قائمة
                            العاملات المتاحات معنا الآن.
                        </p>
{/* </div> */}

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <ResponsiveNavLink
                // active={route().current("vendorproduct.index")}
                method="get"
                href={'/products'}
                as="button"
                className="block w-full rounded bg-[#8e7d90] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#875d8c] focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
               
               تصفح العاملات
              </ResponsiveNavLink>

              <ResponsiveNavLink
                // active={route().current("vendorproduct.index")}
                method="get"
                href={"/offices"}
                as="button"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-[#8e7d90] shadow hover:text-[#96659b] focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >

                تصفح المكاتب
              </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured products section */}
            {/* <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src="https://dummyimage.com/420x260"
                                />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                    CATEGORY
                                </h3>
                                <h2 className="text-white title-font text-lg font-medium">
                                    The Catalyzer
                                </h2>
                                <p className="mt-1">$16.00</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src="https://dummyimage.com/421x261"
                                />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                    CATEGORY
                                </h3>
                                <h2 className="text-white title-font text-lg font-medium">
                                    Shooting Stars
                                </h2>
                                <p className="mt-1">$21.15</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src="https://dummyimage.com/422x262"
                                />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                    CATEGORY
                                </h3>
                                <h2 className="text-white title-font text-lg font-medium">
                                    Neptune
                                </h2>
                                <p className="mt-1">$12.00</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src="https://dummyimage.com/423x263"
                                />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                    CATEGORY
                                </h3>
                                <h2 className="text-white title-font text-lg font-medium">
                                    The 400 Blows
                                </h2>
                                <p className="mt-1">$18.40</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src="https://dummyimage.com/424x264"
                                />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                    CATEGORY
                                </h3>
                                <h2 className="text-white title-font text-lg font-medium">
                                    The Catalyzer
                                </h2>
                                <p className="mt-1">$16.00</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src="https://dummyimage.com/425x265"
                                />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                    CATEGORY
                                </h3>
                                <h2 className="text-white title-font text-lg font-medium">
                                    Shooting Stars
                                </h2>
                                <p className="mt-1">$21.15</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src="https://dummyimage.com/427x267"
                                />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                    CATEGORY
                                </h3>
                                <h2 className="text-white title-font text-lg font-medium">
                                    Neptune
                                </h2>
                                <p className="mt-1">$12.00</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src="https://dummyimage.com/428x268"
                                />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                    CATEGORY
                                </h3>
                                <h2 className="text-white title-font text-lg font-medium">
                                    The 400 Blows
                                </h2>
                                <p className="mt-1">$18.40</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* New arrivals section */}
            {/* <section className="max-w-screen-xl mx-auto py-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    New Arrivals
                </h2>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {products.map((product) => (
                        <li key={product.id}>
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full max-h-200 object-cover"
                            />
                            <h3 className="text-xl font-semibold text-gray-800">
                                {product.name}
                            </h3>
                            <p className="text-base text-gray-600">
                                {product.description}
                            </p>
                            <button className="w-full bg-gray-600 text-white py-2 px-4 rounded-md btn btn-primary">
                                Shop Now
                            </button>
                        </li>
                    ))}
                </ul>
            </section> */}

            {/* Footer section */}
            <footer className="bg-gray-800 text-white py-8">
                <div className="max-w-screen-xl mx-auto px-4">
                    <ul className="flex justify-center">
                        {/* <li className="mr-6">
                            <a href="/" className="hover:text-gray-300">
                                About Us
                            </a>
                        </li>
                        <li className="mr-6">
                            <a href="/" className="hover:text-gray-300">
                                Contact Us
                            </a>
                        </li> */}
                        <li className="mr-6">
                            <a href="/" className="hover:text-gray-300">
                               السياية والشروط
                            </a>
                        </li>
                        <li className="mr-6">
                            <a href="/" className="hover:text-gray-300">
                                الخصوصية
                            </a>
                        </li>
                    </ul>
                    <p className="text-center mt-8">
                        &copy; 2021 ektssar. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
