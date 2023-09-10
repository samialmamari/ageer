import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import DeleteUserForm from "./Partials/DeleteUserForm";
import { Link, useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import VendorLayout from "@/Layouts/VendorLayout";

export default function Index({ auth, users }) {
    const [searchTerm, setSearchTerm] = useState("");
    function getRoleNames(id) {
        let roleNames = [];
        users.data.map((user) => {
            let roles = user.roles;
            roles.map((role) => {
                if (role.pivot.model_id === id) {
                    roleNames.push(role.name);
                }
            });
        });
        return roleNames.join(", ");
    }
    const filteredUsers = users.data.filter((user) => {
        const nameMatch = user.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        const emailMatch = user.email
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        return nameMatch || emailMatch;
    });

    console.log(users);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    المستخدمون
                </h2>
            }
        >
      
            <Head title="المستخدمين " />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="flex justify-end">
                        <Link
                            href={route("users.create")}
                            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
                        >
اضافة مستخدم جديد
                        </Link>
                    </div>
                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <div className="relative overflow-x-auto">
                            <div className="flex justify-between mb-4">
                                <input
                                    type="text"
                                    placeholder="ابحث عن مستخدم ..."
                                    className="border border-gray-300 p-2 w-full rounded-lg"
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                />
                            </div>
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            الاسم 
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            البريد الالكتروني
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            الصلاحيات
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            العمليات
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredUsers.map((user, index) => (
                                        <tr
                                            key={user.id}
                                            className={`${
                                                index % 2 === 0
                                                    ? "bg-gray-50 dark:bg-gray-700"
                                                    : "bg-white dark:bg-gray-800"
                                            } hover:bg-gray-100 dark:hover:bg-gray-600`}
                                        >
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{getRoleNames(user.id)}</td>
                                            <td>
                                                <DeleteUserForm
                                                    className="max-w-xl"
                                                    userid={user.id}
                                                />
                                                <Link
                                                    href={route(
                                                        "users.edit",
                                                        user.id
                                                    )}
                                                    method="get"
                                                    as="button"
                                                    className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                                                >
                                                    تعديل
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
