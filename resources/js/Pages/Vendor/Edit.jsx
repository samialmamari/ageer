import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import VendorLayout from "@/Layouts/VendorLayout";
import { useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker"; 

const Edit = ({ vendor, auth }) => {
  const { data, setData, post, processing, errors, patch } = useForm({
      address: vendor.address,
      city: vendor.city,
      state: vendor.state,
      company_name: vendor.company_name,
      created_at: vendor.created_at,
      description: vendor.description,
      email: vendor.email,
      phone: vendor.phone,
        branches:  vendor.branches,
        main_branch:  vendor.main_branch,
        employees:  vendor.employees,   
        customers: vendor.customers,
        location_map: vendor.location_map,
  });
  const [successMessage, setSuccessMessage] = useState("");
  {
      successMessage && (
          <div className="mb-4 text-green-600">{successMessage}</div>
      );
  }
 
  const handleSubmit = (e) => {
      e.preventDefault();
      // add  code to submit the form data to the server
      patch(route('vendor.update',vendor.id), {
          onSuccess: () => {
              setSuccessMessage("Product added successfully");
          },

          onError: (errors) => {
              Object.keys(errors).forEach((key) => {
                  setData(key, "");
              });
          },
      });
  };

  return (
    <VendorLayout
    user={auth.user}
    //header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">المنتجات </h2>}
    >
        {/* <Head title="اضافة بيانات الشركة" /> */}
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
            <h1 className="mb-4 text-2xl font-bold"> اضف بيانات الشركة</h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center"
            >
                <div className=" flex  w-full">
                    <div className=" w-full ">
                        <input
                            type="text"
                            placeholder="اسم الشركة "
                            className="input input-bordered input-primary w-full max-w-xs "
                            id="company_name"
                            value={data.company_name}
                            onChange={(e) =>
                                setData("company_name", e.target.value)
                            }
                            required
                            isFocused
                            autoComplete="company_name"
                        />

                        <InputError
                            className="mt-2"
                            message={errors.name}
                        />
                    </div>
                    <div className="mb-4 w-full">
                        <input
                            type="text"
                            placeholder="وصف الشركة "
                            className="input input-bordered input-primary w-full "
                            id="description"
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            required
                            isFocused
                            autoComplete="description"
                        />

                        <InputError
                            className="mt-2"
                            message={errors.description}
                        />
                    </div>
                </div>
                <div className=" flex w-full">
                    <div className="w-full">
                        <InputLabel
                            htmlFor="employees"
                            value="عدد العمال"
                        />

                        <input
                            type="text"
                            placeholder="عدد العمال "
                            className="input input-bordered input-primary w-full max-w-xs "
                            id="employees"
                            value={data.employees}
                            onChange={(e) =>
                                setData("employees", e.target.value)
                            }
                            required
                            isFocused
                            autoComplete="employees"
                        />

                        <InputError
                            className="mt-2"
                            message={errors.employees}
                        />
                    </div>
                    <div className="w-full">
                        <InputLabel htmlFor="category" value=" الهاتف" />

                        <input
                            type="text"
                            placeholder="الهاتف "
                            className="input input-bordered input-primary w-full max-w-xs "
                            id="phone"
                            value={data.phone}
                            onChange={(e) =>
                                setData("phone", e.target.value)
                            }
                            required
                            isFocused
                            autoComplete="phone"
                        />

                        <InputError
                            className="mt-2"
                            message={errors.phone}
                        />

                    </div>
                    
                </div>
            
                <div className=" flex w-full">
                    <div className="w-full">
                        <InputLabel htmlFor="category" value="المحافظة" />

                        <input
                            type="text"
                            placeholder=" المحافظة "
                            className="input input-bordered input-primary w-full max-w-xs "
                            id="state"
                            value={data.state}
                            onChange={(e) =>
                                setData("state", e.target.value)
                            }
                            required
                            isFocused
                            autoComplete="state"
                        />

                        <InputError
                            className="mt-2"
                            message={errors.state}
                        />
                    </div>
                    <div className="w-full">
                        <InputLabel htmlFor="category" value="البريد الالكتروني " />

                        <input
                            type="text"
                            placeholder="البريد الالكتروني "
                            className="input input-bordered input-primary w-full max-w-xs "
                            id="email"
                            value={data.email}
                            onChange={(e) =>
                                setData("email", e.target.value)
                            }
                            required
                            isFocused
                            autoComplete="email"
                        />

                        <InputError

                            className="mt-2"
                            message={errors.email}
                        />
                    </div>
                  
                </div>
                <div className=" flex w-full">
                    <div className="w-full">
                        <InputLabel htmlFor="category" value=" الولاية" />

                        <input
                            type="text"
                            placeholder=" الولاية "
                            className="input input-bordered input-primary w-full max-w-xs "
                            id="city"
                            value={data.city}
                            onChange={(e) =>
                                setData("city", e.target.value)
                            }
                            required
                            isFocused
                            autoComplete="city"
                        />

                        <InputError
                            className="mt-2"
                            message={errors.city}
                        />
                    </div>
                    <div className="w-full">
                    <InputLabel htmlFor="category" value=" الموقع (وصف الموقع ) " />

                        <input
                            type="text"
                            placeholder=" الموقع (وصف الموقع )  "
                            className="input input-bordered input-primary w-full max-w-xs "
                            id="address"
                            value={data.address}
                            onChange={(e) => setData("address", e.target.value)}
                            required
                            isFocused
                            autoComplete="address"
                        />

                        <InputError className="mt-2" message={errors.address} />
                    </div>
                </div>
                <div className=" flex w-full">
                  
                    <div className="w-full">
                        <InputLabel htmlFor="main_branch" value="الفرع الرئيسي" />

                        <input
                            type="text"
                            placeholder="الفرع الرئيسي "
                            className="input input-bordered input-primary w-full max-w-xs "
                            id="main_branch"
                            value={data.main_branch}
                            onChange={(e) => setData("main_branch", e.target.value)}
                            required
                            isFocused
                            autoComplete="main_branch"
                        />

                        <InputError className="mt-2" message={errors.main_branch} />

                        </div>
                        <div className="w-full">
                            <InputLabel htmlFor="location_map" value="الموقع في الخريطة"/>
                            <input
                                type="text"
                                placeholder="الموقع في الخريطة "
                                className="input input-bordered input-primary w-full max-w-xs "
                                id="location_map"
                                value={data.location_map}
                                onChange={(e) => setData("location_map", e.target.value)}
                                required
                                isFocused
                                autoComplete="location_map"
                            />

                            <InputError className="mt-2" message={errors.location_map} />

                            </div>
                    </div>
                    <div className=" flex w-full">
                    <div className="w-full">
                        <InputLabel htmlFor="customers" value="عدد العملاء " />

                        <input
                            type="text"
                            placeholder="عدد العملاء "
                            className="input input-bordered input-primary w-full max-w-xs "
                            id="customers"
                            value={data.customers}
                            onChange={(e) => setData("customers", e.target.value)}
                            required
                            isFocused
                            autoComplete="customers"
                        />

                        <InputError className="mt-2" message={errors.customers} />
                    </div>
                    <div className="w-full">
                        <InputLabel htmlFor="branches" value="عدد الافرع" />

                        <input
                            type="text"
                            placeholder="عدد الافرع "
                            className="input input-bordered input-primary w-full max-w-xs "
                            id="branches"
                            value={data.branches}
                            onChange={(e) => setData("branches", e.target.value)}
                            required
                            isFocused
                            autoComplete="branches"
                        />

                        <InputError className="mt-2" message={errors.branches} />

                        </div>
                    </div>



                

                <PrimaryButton type="submit" label="Add company" className="p-4 text-4xl justify-items-end">
                    {" "}
                    حفظ{" "}
                </PrimaryButton>
            </form>
        </div>
    </VendorLayout>
);
};

export default Edit;