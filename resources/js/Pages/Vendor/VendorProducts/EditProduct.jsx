import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import VendorLayout from "@/Layouts/VendorLayout";
import { useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";

import Datepicker from "react-tailwindcss-datepicker";

const EditProduct = () => {
    const { auth, vendorProduct, categories } = usePage().props;

    const { data, setData, processing, errors, post } = useForm({
        name: vendorProduct.name,
        description: vendorProduct.description,
        price: vendorProduct.price,
        quantity: vendorProduct.quantity,
        category_id: vendorProduct.category_id,
        // image: vendorProduct.image,
        slug: vendorProduct.slug,
        width: vendorProduct.width,
        age: vendorProduct.age,
        active: vendorProduct.active,
        religions: vendorProduct.religions,
        experiences: vendorProduct.experiences,
        is_able_arabic: vendorProduct.is_able_arabic,
        is_able_english: vendorProduct.is_able_english,
        is_able_cooking: vendorProduct.is_able_cooking,
        is_able_cleaning: vendorProduct.is_able_cleaning,
        is_able_care_children: vendorProduct.is_able_care_children,
        is_able_care_elderly: vendorProduct.is_able_care_elderly,
        skills: vendorProduct.skills,
        educations: vendorProduct.educations,
        marital_status: vendorProduct.marital_status,
        salary: vendorProduct.salary,
        birth_date: vendorProduct.birth_date,
        weight: vendorProduct.weight,
        height: vendorProduct.height,
    });
    // console.log(vendorProduct);
    const [successMessage, setSuccessMessage] = useState("");
    {
        successMessage && (
            <div className="mb-4 text-green-600">{successMessage}</div>
        );
    }
    const handleValueChange = (newValue) => {
        // console.log("newValue:", newValue);
        setValue(newValue);
        setData("birth_date", newValue.startDate);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("data:", data);
        post(route('vendorproduct.update', vendorProduct.id));
    
    
     
      };

    return (
        <VendorLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    المنتجات{" "}
                </h2>
            }
        >
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <h1 className="mb-4 text-2xl font-bold">تعديل بيانات العامل</h1>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center"
                >
                    <div className=" flex  w-full">
                        <div className=" w-full ">
                            <input
                                type="text"
                                placeholder="اسم العامل "
                                className="input input-bordered input-primary w-full max-w-xs "
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                required
                                isFocused
                                autoComplete="name"
                            />

                            <InputError
                                className="mt-2"
                                message={errors.name}
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <input
                                type="text"
                                placeholder="وصف العامل "
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
                                htmlFor="category"
                                value="سعر استقدام العامل"
                            />

                            <input
                                type="text"
                                placeholder="السعر "
                                className="input input-bordered input-primary w-full max-w-xs "
                                id="price"
                                value={data.price}
                                onChange={(e) =>
                                    setData("price", e.target.value)
                                }
                                required
                                isFocused
                                autoComplete="price"
                            />

                            <InputError
                                className="mt-2"
                                message={errors.price}
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <InputLabel htmlFor="category" value="الجنسية" />

                            <select
                                id="category_id"
                                className="select select-primary w-full max-w-xs"
                                value={data.category_id}
                                onChange={(e) =>
                                    setData("category_id", e.target.value)
                                }
                                required
                                isFocused
                                autoComplete="category_id"
                            >
                                <option value="">اختر الجنسية </option>
                                {categories.map((category) => (
                                    <option
                                        key={category.id}
                                        value={category.id}
                                    >
                                        {category.name}
                                    </option>
                                ))}
                            </select>

                            <InputError
                                className="mt-2"
                                message={errors.category}
                            />
                        </div>
                    </div>
                    <div className=" flex w-full">
                        <div className="w-full">
                            <InputLabel htmlFor="category" value="الديانة" />

                            <select
                                className="select select-primary w-full max-w-xs"
                                value={data.religions}
                                onChange={(e) =>
                                    setData("religions", e.target.value)
                                }
                            >
                                <option disabled>اختر الديانة </option>
                                <option value="Muslim">مسلم</option>
                                <option value="Christian">مسيحي</option>
                                <option value="other">اخرى</option>
                            </select>

                            <InputError
                                className="mt-2"
                                message={errors.religions}
                            />
                        </div>

                        <div className="w-full">
                            <InputLabel
                                htmlFor="experiences"
                                value="عدد سنوات الخبرة "
                            />

                            <select
                                className="select select-primary w-full max-w-xs"
                                value={data.experiences}
                                onChange={(e) =>
                                    setData("experiences", e.target.value)
                                }
                            >
                                <option disabled>اختر عدد سنوات الخبرة </option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>

                            <InputError
                                className="mt-2"
                                message={errors.experiences}
                            />
                        </div>
                    </div>
                    <div className=" flex w-full">
                        <div className="w-full">
                            <InputLabel htmlFor="category" value="المهارات" />

                            <input
                                type="text"
                                placeholder="المهارات "
                                className="input input-bordered input-primary w-full max-w-xs "
                                id="skills"
                                value={data.skills}
                                onChange={(e) =>
                                    setData("skills", e.target.value)
                                }
                                required
                                isFocused
                                autoComplete="skills"
                            />

                            <InputError
                                className="mt-2"
                                message={errors.skills}
                            />
                        </div>
                        <div className="w-full">
                            <InputLabel
                                htmlFor="category"
                                value="المستوى التعليمي"
                            />

                            <select
                                className="select select-primary w-full max-w-xs"
                                onChange={(e) =>
                                    setData("educations", e.target.value)
                                }
                            >
                                <option disabled>اختر المستوى التعليمي </option>
                                <option value="primary">ابتدائي</option>
                                <option value="middle">اعدادي</option>
                                <option value="high">ثانوي</option>
                                <option value="university">جامعي</option>
                                <option value="other">اخرى</option>
                            </select>

                            <InputError
                                className="mt-2"
                                message={errors.educations}
                            />
                        </div>
                    </div>
                    <div className=" flex w-full">
                        <div className="w-full">
                            <InputLabel
                                htmlFor="category"
                                value="الحالة الاجتماعية"
                            />

                            <select
                                className="select select-primary w-full max-w-xs"
                                onChange={(e) =>
                                    setData("marital_status", e.target.value)
                                }
                            >
                                <option disabled>
                                    اختر الحالة الاجتماعية{" "}
                                </option>
                                <option value="single">عزباء</option>
                                <option value="married">متزوجة</option>
                                <option value="other">اخرى</option>
                            </select>

                            <InputError
                                className="mt-2"
                                message={errors.marital_status}
                            />
                        </div>
                        <div className="w-full">
                            <InputLabel
                                htmlFor="category"
                                value="الراتب المتوقع"
                            />

                            <input
                                type="text"
                                placeholder="الراتب المتوقع "
                                className="input input-bordered input-primary w-full max-w-xs "
                                id="salary"
                                value={data.salary}
                                onChange={(e) =>
                                    setData("salary", e.target.value)
                                }
                                required
                                isFocused
                                autoComplete="salary"
                            />

                            <InputError
                                className="mt-2"
                                message={errors.salary}
                            />
                        </div>
                    </div>
                    <div className=" flex w-full">
                        <div className="w-full">
                            <InputLabel
                                htmlFor="category"
                                value="تاريخ الميلاد"
                            />

                            <div className="select select-primary w-full max-w-xs">
                                <Datepicker
                                    asSingle={true}
                                    useRange={false}
                                    value={data.birth_date}
                                    onChange={handleValueChange}
                                    showShortcuts={false}
                                />
                            </div>
                            <InputError
                                className="mt-2"
                                message={errors.birth_date}
                            />
                        </div>
                        <div className="w-full">
                            <InputLabel htmlFor="category" value="الطول" />

                            <input
                                type="text"
                                placeholder="الطول "
                                className="input input-bordered input-primary w-full max-w-xs "
                                id="height"
                                value={data.height}
                                onChange={(e) =>
                                    setData("height", e.target.value)
                                }
                                required
                                isFocused
                                autoComplete="height"
                            />

                            <InputError
                                className="mt-2"
                                message={errors.height}
                            />
                        </div>
                    </div>
                    <div className=" flex w-full">
                        <div className="w-full">
                            <InputLabel htmlFor="category" value="الوزن" />

                            <input
                                type="text"
                                placeholder="الوزن "
                                className="input input-bordered input-primary w-full max-w-xs "
                                id="weight"
                                value={data.weight}
                                onChange={(e) =>
                                    setData("weight", e.target.value)
                                }
                                required
                                isFocused
                                autoComplete="weight"
                            />

                            <InputError
                                className="mt-2"
                                message={errors.weight}
                            />
                        </div>
                        <div className="w-full">
                            <InputLabel htmlFor="category" value="العمر" />

                            <input
                                type="text"
                                placeholder="العمر "
                                className="input input-bordered input-primary w-full max-w-xs "
                                id="age"
                                value={data.age}
                                onChange={(e) => setData("age", e.target.value)}
                                required
                                isFocused
                                autoComplete="age"
                            />

                            <InputError className="mt-2" message={errors.age} />
                        </div>
                    </div>
                    <div className="mb-4 w-full">
                        <InputLabel htmlFor="image" value="Image" />

                        <input
                            type="file"
                            id="image"
                            className="mt-1 block w-full"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                setData("image", file);
                            }}
                            accept="image/*"
                            isFocused
                            autoComplete="image"
                        />

                        <InputError className="mt-2" message={errors.image} />
                    </div>

                    <div className=" flex w-full">
                        <div className="w-full">
                            <div className="mb-4 w-full flex flex-initial space-x-2">
                                <div className="form-control w-52">
                                    <label className="cursor-pointer label">
                                        <span className="label-text">فعل</span>
                                        <input
                                            type="checkbox"
                                            className="toggle toggle-accent"
                                            checked={data.active}
                                            onChange={(e) =>
                                                setData(
                                                    "active",
                                                    e.target.checked
                                                )
                                            }
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className=" w-full">
                                <div className="mb-4 w-full flex flex-initial space-x-2">
                                    <div className="form-control w-52">
                                        <label className="cursor-pointer label">
                                            <span className="label-text">
                                                العناية بالاطفال
                                            </span>
                                            <input
                                                type="checkbox"
                                                className="toggle toggle-accent"
                                                checked={
                                                    data.is_able_care_children
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "is_able_care_children",
                                                        e.target.checked
                                                    )
                                                }
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-full">
                                <div className="mb-4 w-full flex flex-initial space-x-2">
                                    <div className="form-control w-52">
                                        <label className="cursor-pointer label">
                                            <span className="label-text">
                                                العناية بكبار السن
                                            </span>
                                            <input
                                                type="checkbox"
                                                className="toggle toggle-accent"
                                                checked={data.is_able_care_elderly }
                                                onChange={(e) =>
                                                    setData(
                                                        "is_able_care_elderly",
                                                        e.target.checked
                                                    )
                                                }
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-full">
                                <div className="mb-4 w-full flex flex-initial space-x-2">
                                    <div className="form-control w-52">
                                        <label className="cursor-pointer label">
                                            <span className="label-text">
                                                تتكلم عربي
                                            </span>
                                            <input
                                                type="checkbox"
                                                className="toggle toggle-accent"
                                                checked={data.is_able_arabic}
                                                onChange={(e) =>
                                                    setData(
                                                        "is_able_arabic",
                                                        e.target.checked
                                                    )
                                                }
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-full">
                                <div className="mb-4 w-full flex flex-initial space-x-2">
                                    <div className="form-control w-52">
                                        <label className="cursor-pointer label">
                                            <span className="label-text">
                                                تتكلم انجليزي{" "}
                                                {data.is_able_english}{" "}
                                            </span>
                                            <input
                                                type="checkbox"
                                                className="toggle toggle-accent"
                                                checked={data.is_able_english}
                                                onChange={(e) =>
                                                    setData(
                                                        "is_able_english",
                                                        e.target.checked
                                                    )
                                                }
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-full">
                                <div className="mb-4 w-full flex flex-initial space-x-2">
                                    <div className="form-control w-52">
                                        <label className="cursor-pointer label">
                                            <span className="label-text">
                                                تتقن الطبخ
                                            </span>
                                            <input
                                                type="checkbox"
                                                className="toggle toggle-accent"
                                                checked={data.is_able_cooking}
                                                onChange={(e) =>
                                                    setData(
                                                        "is_able_cooking",
                                                        e.target.checked
                                                    )
                                                }
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-full">
                                <div className="mb-4 w-full flex flex-initial space-x-2">
                                    <div className="form-control w-52">
                                        <label className="cursor-pointer label">
                                            <span className="label-text">
                                                تتقن التنظيف
                                            </span>
                                            <input
                                                type="checkbox"
                                                className="toggle toggle-accent"
                                                checked={data.is_able_cleaning}
                                                onChange={(e) =>
                                                    setData(
                                                        "is_able_cleaning",
                                                        e.target.checked
                                                    )
                                                }
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <PrimaryButton type="submit" label="Add Product">
                        {" "}
                        حفظ{" "}
                    </PrimaryButton>
                </form>
            </div>
        </VendorLayout>
    );
};

export default EditProduct;
