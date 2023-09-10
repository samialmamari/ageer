<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;
use App\Models\Order;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;


class VendorOrderController extends Controller
{
    public function index(): Response
    {
        $vendorProductOrder = Order::with('user', 'product')->whereHas('product', function ($query) {
            $query->where('vendor_id', auth()->user()->id);
        })->get();
        return Inertia::render('Vendor/VendorOrder', [
            'vendorProductOrder' => $vendorProductOrder,
        ]);
    }
   
}
