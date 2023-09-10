<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Product;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class OfficeController extends Controller

 {
    public function index(): InertiaResponse
     {
        $offices = User::with('vendor')->whereHas('roles', function($q) {
            $q->where('name', 'vendor');
        })
        ->get();
        return Inertia::render('Web/Offices/Index', ['offices' => $offices]);
    }
    function details(Request $request) {
        $office = User::with('vendor')
        ->where('id', $request->id)
        ->first();
        $products = Product::with('categories')->where('vendor_id', $request->id)->get();
    // dd($products);
        return Inertia::render('Web/Offices/OfficeDetail', 
        ['office' => $office
        ,'products' => $products]);
    }
    public function create() {
        return view('office.create');
    }

//     public function store(Request $request) {
//         $request->validate([
//             'name' => 'required',
//             'address' => 'required',
//             'phone' => 'required',
//             'email' => 'required',
//             'website' => 'required',
//         ]);

//         Office::create($request->all());

//         return redirect()->route('office.index')
//             ->with('success', 'Office created successfully.');
//     }

//     public function show(Office $office) {
//         return view('office.show', compact('office'));
//     }

//     public function edit(Office $office) {
//         return view('office.edit', compact('office'));
//     }

//     public function update(Request $request, Office $office) {
//         $request->validate([
//             'name' => 'required',
//             'address' => 'required',
//             'phone' => 'required',
//             'email' => 'required',
//             'website' => 'required',
//         ]);

//         $office->update($request->all());

//         return redirect()->route('office.index')
//             ->with('success', 'Office updated successfully');
//     }

//     public function destroy(Office $office) {
//         $office->delete();

//         return redirect()->route('office.index')
//             ->with('success', 'Office deleted successfully');
//     }
}
