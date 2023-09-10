<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class CoontactController extends Controller
{
    //
    public function store(Request $request)
    {
        // code to store a new vendor in the database
        // $request->validate([
        //     'name' => 'required',
        //     'email' => 'required|email|unique:users,email',
        //     'message' => 'required'
        // ]);


        $vendor = Contact::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => '00000000000', // default value
            'subject' => '00000000000', // default value
            
            'message' => $request->message,

        ]);

        return redirect()->back()->with('status', 'تم ارسال الرسالة بنجاح');
    }

}
