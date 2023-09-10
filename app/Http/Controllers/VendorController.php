<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Vendor;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;
class VendorController extends Controller
{
    public function VendorDashboard()
    {
       // implement code to display who authorized vendors
       $vendor = User::with('vendor')->where('id', auth()->user()->id)->first();
         return Inertia::render('Vendor/VendorDashboard', [
            'vendor' => $vendor,
            'status' => session('status'),
        ]);
    }

    public function index()
    {
        $vendor = Vendor::where('user_id', auth()->user()->id)->first();
        // dd($vendor);
        return Inertia::render('Vendor/Index', [
            'vendor' => $vendor,
            'status' => session('status'),
            ]);
        }
    public function create()
    {
        // code to display form to create a new vendor
        // dd('create');
        return Inertia::render('Vendor/Create');

    }

    public function store(Request $request)
    {
        // code to store a new vendor in the database
        // $request->validate([
        //     'name' => 'required',
        //     'email' => 'required|email|unique:users,email',
        //     'phone_number' => 'required|numeric',
        //     'address' => 'required',
        //     'city' => 'required',
        //     'state' => 'required'
        // ]);
      
// dd($request);
        $vendor = Vendor::create([
            'company_name' => $request->company_name,
            'email' => $request->email,
            'phone' => $request->phone,
            'address' => $request->address,
            'city' => $request->city,
            'state' => $request->state,
            'description' => $request->description,
            'user_id' => auth()->user()->id,
            'branches' => $request->branches,
            'main_branch' => $request->main_branch,
            'employees' => $request->employees,
            'customers' => $request->customers,
            'location_map' => $request->location_map,

            ]);

            return redirect()->route('vendor.index')->with('status', 'Vendor created successfully');
            

    }

    public function show($id)
    {
        // code to display a specific vendor
    }

    public function edit($id)
    {
        $vendor = Vendor::where('user_id', auth()->user()->id)->first();
        return Inertia::render('Vendor/Edit', [
            'vendor' => $vendor,
            'status' => session('status'),
            ]);
    }

    public function update(Request $request, $id)
    {
        // dd($request);
        // code to update a specific vendor in the database
        $vendor = Vendor::findOrfail($id);

        $vendor->update([
            'company_name' => $request->company_name,
            'email' => $request->email,
            'phone' => $request->phone,
            'address' => $request->address,
            'city' => $request->city,
            'state' => $request->state,
            'description' => $request->description,
            'user_id' => auth()->user()->id,
            'branches' => $request->branches,
            'main_branch' => $request->main_branch,
            'employees' => $request->employees,
            'customers' => $request->customers,
            'location_map' => $request->location_map,
            ]);

            return redirect()->route('vendor.index')->with('status', 'Vendor updated successfully');
    }

    public function destroy($id)
    {
        // code to delete a specific vendor from the database
    }
}
