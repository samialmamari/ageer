import React, { useState } from 'react';
import { Link, useForm, usePage } from '@inertiajs/react';
import  InputLabel from '@/Components/InputLabel';
import  TextInput from '@/Components/TextInput';
import  InputError from '@/Components/InputError';
import  PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import SecondaryButton from '@/Components/SecondaryButton';


export default function CreateUser ({} ) {
    
    const { data, setData, post, processing, errors } = useForm({
        name : '',
        email : '',
        password : '',
        password_confirmation   : '',
        roles : [],
    });
    const { auth, roles } = usePage().props;
    console.log(roles);
    const handleSubmit = (event) => {
        event.preventDefault();
        // handle form submission here

        post(route('users.store'), {
            onSuccess: () => history.push(route('users.index')),

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
            onFinish: () => reset(),
        });


    };

    const handleCancel = (event) => {
        event.preventDefault();
        // push to previous page
        history.back();
    };

    return (
        <AuthenticatedLayout 
        user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">المستخدمون</h2>}
        >
            <Head title="Create User" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
        <form onSubmit={handleSubmit} className='className="max-w-md mx-auto'> 
            <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg pt-8 mt-24">
            <div className='mb-4'>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>
                <div className='mb-4'>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>
                
                <div className='mb-4'>
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        className="mt-1 block w-full"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        required
                        autoComplete="new-password"
                    />

                    <InputError className="mt-2" message={errors.password} />
                </div>
                <div className='mb-4'>
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        className="mt-1 block w-full"
                        value={data.password_confirmation}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                        autoComplete="new-password"
                    />

                    <InputError className="mt-2" message={errors.password_confirmation} />
                </div>
                <div className='mb-4'>
                    <InputLabel htmlFor="role" value="Role" />

                    <select
          multiple
          id="roles"
          className="form-multiselect border rounded w-full px-3 py-2"
          value={data.roles}
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

                    <InputError className="mt-2" message={errors.role} />
                </div>
                <div className="flex items-center justify-end mt-6">
                <SecondaryButton as="a" onClick={ handleCancel} className="mr-4"> cancel </SecondaryButton> 

                    <PrimaryButton className={processing ? 'opacity-25' : ''} disabled={processing}>
                        Save
                    </PrimaryButton>
                </div>
            </div>
            </form>
        </div>
        </AuthenticatedLayout>

        
    );
}

 