import React from "react";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import Header from "@/Components/Header";
import Product from "../../../Components/product";
import { Link, useForm, usePage } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";
function Index() {
  
    const experiences = [
        {
            id: 1,
            name: "اقل من سنة",
        },
        {
            id: 2,
            name: "من سنة الى سنتين",
        },
        {
            id: 3,
            name: "من سنتين الى 3 سنوات",
        },
        {
            id: 4,
            name: "من 3 سنوات الى 4 سنوات",
        },
        {
            id: 5,
            name: "اكثر من 4 سنوات",
        },
    ];
    
    
   const religions = [

        {
            id: 'muslim',
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
    const marital_status = [
        {
            id: 'single',
            name: "عزباء",
        },
        {
            id: 'married',
            name: "متزوجة",
        },
        {
            id: 'other',
            name: "اخرى",
        }
    ];


    const { get, errors, reset, processing } = useForm();
    const { auth, products, categories } = usePage().props;
    
    const [houseMaid, setHouseMaid] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState([]);
    const [selectedExperience, setSelectedExperience] = useState([]);
    const [selectedAge, setSelectedAge] = useState([]);
    const [selectedReligion, setSelectedReligion] = useState([]);
    const [selectedMarital_status, setSelectedMarital_status] = useState([]);
    const [selectedLanguagesarabi, setSelectedLanguagesarabi] = useState(false);
    const [selectedLanguagesenglish, setSelectedLanguagesenglish] = useState(false);


    // Handle category selection
    const handleCategorySelection = (category) => {
      if (selectedCategories.includes(category)) {
        setSelectedCategories(selectedCategories.filter((c) => c !== category));
      } else {
        setSelectedCategories([...selectedCategories, category]);
      }
     
    };
    const handleSelectedPrice = (price) => {
    setSelectedPrice(price)
      
    };
    const handleSelectedExperience = (experience) => {
        setSelectedExperience(experience)
    };
    const handleSelectedAge = (age) => {
        setSelectedAge(age)
    };
    const handleSelectedReligion = (religion) => {
        console.log(selectedReligion)
        if (selectedReligion.includes(religion)) {
            setSelectedReligion(selectedReligion.filter((c) => c !== religion));
        } else {
            setSelectedReligion([...selectedReligion, religion]);
        }
    };
    const handleSelectedMarital_status = (marital_status) => {
        if (selectedMarital_status.includes(marital_status)) {
            setSelectedMarital_status(selectedMarital_status.filter((c) => c !== marital_status));
        } else {
            setSelectedMarital_status([...selectedMarital_status, marital_status]);
        }
    };
    const handleSelectedLanguages = (language) => {
        if (selectedLanguages.includes(language)) {
            setSelectedLanguages(selectedLanguages.filter((c) => c !== language));
        } else {
            setSelectedLanguages([...selectedLanguages, language]);
        }
    };

    useEffect(() => {
        if (selectedCategories.length === 0 && selectedPrice.length === 0 && selectedExperience.length === 0 && selectedAge.length === 0 && selectedReligion.length === 0 && selectedMarital_status.length === 0 && selectedLanguagesarabi === false && selectedLanguagesenglish === false) {
        setHouseMaid(products)
        } else {
    let filteredProducts = products;
    if(selectedCategories.length > 0)
        filteredProducts = filteredProducts.filter(
            (product) => selectedCategories.includes(product.category_id)
        );
     if(selectedPrice.length > 0)
        filteredProducts = filteredProducts.filter(
            (product) => product.price <= selectedPrice
        );
     if(selectedExperience.length > 0)
        filteredProducts = filteredProducts.filter(
            (product) => product.experience <= selectedExperience
        );
        if(selectedAge.length > 0)
        filteredProducts = filteredProducts.filter(
            (product) => product.age <= selectedAge
        );
        if(selectedReligion.length > 0){
            console.log(filteredProducts)
        filteredProducts = filteredProducts.filter(
            (product) => selectedReligion.includes(product.religions)
        );
        
    
    }
        if(selectedMarital_status.length > 0)
        filteredProducts = filteredProducts.filter(
            (product) => selectedMarital_status.includes(product.marital_status)
        );
        if(selectedLanguagesarabi)
        filteredProducts = filteredProducts.filter(
            (product) => selectedLanguagesarabi == product.is_able_arabic
        );
        if(selectedLanguagesenglish)
        filteredProducts = filteredProducts.filter(
            (product) => selectedLanguagesenglish == product.is_able_english
        );
setHouseMaid(filteredProducts);
        
        }

    }, [products, selectedCategories, selectedPrice, selectedExperience, selectedAge, selectedReligion, selectedMarital_status, selectedLanguagesarabi, selectedLanguagesenglish]);
    return (
        <div className="flex flex-col min-h-screen">
          <Header />
          
            <div className="flex flex-row flex-1">
                
            <div className="drawer lg:drawer-open">
  
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  
  <div className="drawer-content flex flex-col items-center justify-center">

  <label htmlFor="my-drawer-2" className="btn btn-primary bg-[#8551d4] drawer-button lg:hidden">للبحث اضغط هنا</label>
  <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap space-x-3">
                            {houseMaid &&
                                houseMaid.map((product) => (
                                    <Product
                                        key={product.id}
                                        product={product}
                                    />
                                ))}
                        </div>
                    </div>
                </section>

  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* <li><a>Item 1</a></li> */}
                    <li>
                        <details open>
                            <summary>
                               
                                الجنسية
                            </summary>
                            <ul>
                                {categories &&
                                    categories.map((category) => (
                                        <li
                                            key={category.id}
                                            className="form-control"
                                        >
                                            <label className="cursor-pointer label">
                                                <span className="label-text">
                                                    {category.name}
                                                </span>
                                                {/* <input type="checkbox" className="checkbox checkbox-accent" onClick={(e) => selectCountry(category.id, e.target.checked == 'checked')} /> */}
                                                <input
                                                  type="checkbox"
                                                  className="checkbox checkbox-accent"
                                                  checked={selectedCategories.includes(category.id)}
                                                  onChange={() => handleCategorySelection(category.id)}
                                                />
                                            </label>
                                        </li>
                                    ))}
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details open>
                            <summary>
                               
                                سعر استقدام العامل
                            </summary>
                        <ul className=" flex flex-col  ">
                        <input type="range" min={0} max="2000" className="range pr-1"  onChange={(e) => handleSelectedPrice(e.target.value) }/>
<div className="badge  badge-info gap-2">{selectedPrice} OMR</div>

                        </ul>
                        </details>
                    </li>
                   
                    <li>
                    <details open>
                            <summary>
                             الخبرة بالسنوات
                            </summary>
                        <ul className=" flex ">
                        <input type="range" min={0} max="20" className="range pr-1"  onChange={(e) => handleSelectedExperience(e.target.value) }/>
<div className="badge  badge-info gap-2">{selectedExperience}</div>

                        </ul>
                        </details>
                    </li>
                    <li>
                    <details open>
                                        
                            <summary>   
                            الديانة
                            </summary>

                        <ul>
                        {religions && religions.map((religion) => (
                            <li
                                key={religion.id}
                                className="form-control"
                            >
                                <label className="cursor-pointer label">
                                    <span className="label-text">
                                        {religion.name}
                                    </span>
                                    <input

                                        type="checkbox"
                                        className="checkbox checkbox-accent"
                                        checked={selectedReligion.includes(religion.id)}
                                        onChange={() => handleSelectedReligion(religion.id)}
                                    />
                                </label>
                            </li>
                        ))}

                        </ul>
                        </details>
                    </li>
                    <li>
                    <details open>
                                        
                            <summary>   
                            العمر
                            </summary>

                            <ul className=" flex ">
                        <input type="range" min={0} max="70" className="range pr-1"  onChange={(e) => handleSelectedAge(e.target.value) }/>
<div className="badge  badge-info gap-2">{selectedAge}</div>
                        </ul>
                        </details>
                    </li>
                    <li>
                    <details open>
                        <summary>
                        الحالة الاجتماعية
                            </summary>            
                        <ul>
                        {marital_status && marital_status.map((marital_status) => (
                            <li
                                key={marital_status.id}
                                className="form-control"
                            >
                                <label className="cursor-pointer label">
                                    <span className="label-text">
                                        {marital_status.name}
                                    </span>
                                    <input

                                        type="checkbox"
                                        className="checkbox checkbox-accent"
                                        checked={selectedMarital_status.includes(marital_status.id)}
                                        onChange={() => handleSelectedMarital_status(marital_status.id)}
                                    />
                                </label>
                            </li>
                        ))}

                        </ul>
                        </details>
                    </li>
                    <li>
                    <details open>
                        <summary>
                        اللغة
                            </summary>

                        <ul>
                       
                            <li

                                className="form-control"
                            >
                                <label className="cursor-pointer label">
                                    <span className="label-text">
                                      تتحدث اللغة العربية
                                    </span>
                                    <input

                                        type="checkbox"
                                        className="checkbox checkbox-accent"
                                        checked={selectedLanguagesarabi}
                                        onChange={() => setSelectedLanguagesarabi(!selectedLanguagesarabi)}
                                    />
                                </label>
                            </li>
                       
                        </ul>
                        <ul>
                       
                       <li

                           className="form-control"
                       >
                           <label className="cursor-pointer label">
                               <span className="label-text">
                                  تتحدث اللغة الانجليزية
                               </span>
                               <input

                                   type="checkbox"
                                   className="checkbox checkbox-accent"
                                   checked={selectedLanguagesenglish}
                                   onChange={() => setSelectedLanguagesenglish(!selectedLanguagesenglish)}
                               />
                           </label>
                       </li>
                  
                   </ul>
                        </details>
                    </li>
                    
                </ul>
            </div>
            </div>
               
            </div>
        </div>
    );
}

export default Index;
