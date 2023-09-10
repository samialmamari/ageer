import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import React, { useState } from 'react';
import InputError from '@/Components/InputError';;
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';


export default function Edit({ auth, user, roles, userRole }) {
    const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedRoles, setSelectedRoles] = useState(user.roles);
  
  const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
    name,
    email,
    password,
    confirmPassword,
    roles: selectedRoles,
});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here by making a POST request to the server  
    // with the form data.
    console.log('submitting form');
    console.log('name: ', name);
    console.log('email: ', email);
    console.log('password: ', password);

    patch(route('users.update', user.id),{
      // onSuccess: () =>     history.push(route('users.index')),
      onError: (errors) => {
        if (errors.password) {
            reset('password', 'password_confirmation');
            passwordInput.current.focus();
        }

        if (errors.current_password) {
            reset('current_password');
            currentPasswordInput.current.focus();
        }
    },
      //onFinish: () => reset(),

    });


 
  };


  return (
<AuthenticatedLayout
    user={auth.user}
    header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">المستخدمون</h2>}
>
    <Head title="تعديل" />

    <div className="py-12">
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          الاسم:
        </label>
        <TextInput
          type="text"
          id="name"
          placeholder="الاسم"
          className="form-input border rounded w-full px-3 py-2"
          value={data.name}
          onChange={(e) => setData('name',e.target.value)}
        />
      </div>
      <InputError className="mt-2" message={errors.name} />
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          البريد الإلكتروني:
        </label>
        <TextInput
          type="email"
          id="email"
          placeholder="البريد الإلكتروني"
          className="form-input border rounded w-full px-3 py-2"
          value={data.email}
          onChange={(e) => setData('email',e.target.value)}
        />
      </div>
      <InputError className="mt-2" message={errors.email} />
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
          كلمة المرور:
        </label>
        <TextInput
          type="password"
          id="password"
          placeholder="كلمة المرور"
          className="form-input border rounded w-full px-3 py-2"
          value={data.password}
          onChange={(e) => setData('password',e.target.value)}
        />
      </div>
      <InputError className="mt-2" message={errors.password} />
      <div className="mb-4">
        <label htmlFor="confirm-password" className="block text-gray-700 font-bold mb-2">
          تأكيد كلمة المرور:
        </label>
        <TextInput
          type="password"
          id="confirm-password"
          placeholder="تأكيد كلمة المرور"
          className="form-input border rounded w-full px-3 py-2"
          value={data.confirmPassword}
          onChange={(e) => setData('confirmPassword',e.target.value)}
        />
      </div>
      <InputError className="mt-2" message={errors.confirmPassword} />
      <div className="mb-4">
        <label htmlFor="roles" className="block text-gray-700 font-bold mb-2">
          الدور:
        </label>
        <select
          multiple
          id="roles"
          className="form-multiselect border rounded w-full px-3 py-2"
          value={data.selectedRoles}
          onChange={(e) =>
            setData('roles',Array.from(e.target.selectedOptions, (option) => option.value))
          }
        >

           {Object.entries(roles).map(([key, value]) => (
             <option key={key} value={key}>
             {value}
           </option>
         ))}
        </select>
      </div>
      <InputError className="mt-2" message={errors.roles} />
      <div className="text-center">
        <button type="submit" className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          حفظ
        </button>
      </div>
      
      </div>
    </form>
    </div>


</AuthenticatedLayout>
  )
}
