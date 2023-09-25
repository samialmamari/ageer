import React from 'react'
import Header from '@/Components/Header'
import { Link, useForm, usePage } from "@inertiajs/react";
function Details() {
  const {product, vendor, order, auth} = usePage().props
  const [linkthispage, setLinkthispage] = React.useState(window.location.href);

  // setLinkthispage(window.location.href);
  // let img = 'https://cdn.discordapp.com/attachments/1121901933377101824/1126606678373171320/sami.almamari_avtar_for_indian_girl__hijab_cartoon_215473b4-d1d3-45fd-8b53-ec950b664608.png'
  const { data, setData, processing, errors, post , DELETE} = useForm({
    id: product.id
  });
  const isLoggedIn = auth.user !== null;

  const handleClick = () => {
    if(isLoggedIn){
      post(route('customerDashboard.store', product.id));
    }else{
      window.location.href = '/login'
    
  }
}
  const handleClickCancel = () => {
    post(route('customerDashboard.destroy', order.id), {
      onSuccess: () => {
          setSuccessMessage("Product added successfully");
      }}
    );
  }
  const religions = [

    {
        id: 'Muslim',
        name: "مسلمة",
    },
    {
        id: 'Christian',
        name: "مسيحية",
    },
    {
        id: 'other',
        name: "اخرى",
    },
];
const religion = religions.find(religion => religion.id === product.religions).name;

const maritalStatusOptions = [
  { value: 'single', label: 'عزباء' },
  { value: 'married', label: 'متزوجة' },
  { value: 'other', label: 'اخرى' }
];
const maritalStatus = maritalStatusOptions.find(option => option.value === product.marital_status).label;
const educationLevels = [
  { value: 'primary', label: 'ابتدائي' },
  { value: 'middle', label: 'اعدادي' },
  { value: 'high', label: 'ثانوي' },
  { value: 'university', label: 'جامعي' },
  { value: 'other', label: 'اخرى' }
];
const educationLevel = educationLevels.find(option => option.value === product.educations).label;
const is_able_arabic = product.is_able_arabic === 1 ? 'نعم' : 'لا'
const is_able_care_children = product.is_able_care_children === 1 ? 'نعم' : 'لا'
const is_able_care_elderly = product.is_able_care_elderly === 1 ? 'نعم' : 'لا'
const is_able_cleaning = product.is_able_cleaning === 1 ? 'نعم' : 'لا'
const is_able_cooking = product.is_able_cooking === 1 ? 'نعم' : 'لا'
const is_able_english = product.is_able_english === 1 ? 'نعم' : 'لا'

null
  return (
    
    <div>
      <Header />
      <section className="text-gray-600 body-font overflow-hidden" dir='rtl'>
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">اسم العامل</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{ product.name}</h1>
       
        <p className="leading-relaxed mb-4">{ product.description }</p>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">الجنسية</span>
          <span className="mr-auto text-gray-900 ">{ product.categories.name}</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">العمر</span>
          <span className="mr-auto text-gray-900">{ product.age}</span>
        </div>
        <div className="flex border-t  border-gray-200 py-2">
          <span className="text-gray-500">المهارات</span>
          <span className="mr-auto text-gray-900">{ product.skills}</span>
        </div>

        <div className="flex border-t  border-gray-200 py-2">
          <span className="text-gray-500">المؤهلات</span>
          <span className="mr-auto text-gray-900">{ educationLevel}</span>
        </div>
        <div className="flex border-t  border-gray-200 py-2">
          <span className="text-gray-500">الخبرات</span>
          <span className="mr-auto text-gray-900">{ product.experiences}</span>
        </div>
        <div className="flex border-t  border-gray-200 py-2">
          <span className="text-gray-500">الطول</span>
          <span className="mr-auto text-gray-900">{ product.height}</span>
        </div>
        <div className="flex border-t  border-gray-200 py-2">
          <span className="text-gray-500">الوزن</span>
          <span className="mr-auto text-gray-900">{ product.weight}</span>
        </div>
        <div className="flex border-t  border-gray-200 py-2">
          <span className="text-gray-500">تتقن اللغة العربية</span>
          <span className="mr-auto text-gray-900">{is_able_arabic}</span>
        </div>
        <div className="flex border-t  border-gray-200 py-2">
          <span className="text-gray-500">تتقن اللغة الانجليزية</span>
          <span className="mr-auto text-gray-900">{
            is_able_english
          }</span>
        </div>
        <div className="flex border-t  border-gray-200 py-2">
          <span className="text-gray-500">تجيد الطبخ</span>
          <span className="mr-auto text-gray-900">{is_able_cooking}</span>
        </div>
        <div className="flex border-t  border-gray-200 py-2">
          <span className="text-gray-500">
            تجيد رعاية الاطفال
          </span>
          <span className="mr-auto text-gray-900">{is_able_care_children}</span>
        </div>
        <div className="flex border-t  border-gray-200 py-2">
          <span className="text-gray-500">
            تجيد رعاية المسنين
          </span>
          <span className="mr-auto text-gray-900">{is_able_care_elderly}</span>
        </div>
        <div className="flex border-t  border-gray-200 py-2">
          <span className="text-gray-500">الديانة</span>
          <span className="mr-auto text-gray-900">{ religion}</span>
        </div>
        <div className="flex border-t  border-gray-200 py-2">
          <span className="text-gray-500">الحالة الاجتماعية</span>
          <span className="mr-auto text-gray-900">{ maritalStatus}</span>
        </div>
        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
          <span className="text-gray-500">الراتب</span>
          <span className="mr-auto text-gray-900">{ product.salary}</span>
        </div>

        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">{ product.price} OMR</span>
        
         {/* { order ? ( order.status != 'pending' ? <a href= 'https://api.whatsapp.com/send?phone=96892797721&&text=sami' className="flex mr-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
          onClick={handleClick}
          >حجز </a>
          :
          <button className="flex mr-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
          onClick={handleClickCancel}
          >الغاء الحجز </button>
          ) : ( */}
            <a href={`https://api.whatsapp.com/send?phone=968${product.phone_number}&&text= I want to ask about this ${linkthispage} `} className="flex mr-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              حجز
            </a>
           
          {/* )
          }
         */}
          {/* <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button> */}
        </div>
      </div>
      {/* <figure> */}
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded pr-9" src={`/storage/${product.image}`} />
      {/* </figure> */}
      
    </div>
  </div>
</section>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div className="w-full sm:p-4 px-4 mb-6">
        <a href={`/offices/details?id=${vendor.user_id}`}>
        <h1 className="title-font font-medium text-xl mb-2 text-gray-900">{vendor.company_name}</h1>
        </a>
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
    </div>
  )
}

export default Details