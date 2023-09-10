<?php

namespace App\Http\Controllers;

use App\Models\Order;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;


class CustomerController extends Controller
{
    public function index():InertiaResponse    
    {
        $orders = auth()->user()->orders;
        return Inertia::render('Customer/CustomerDashboard', [
            'orders' => $orders,
        ]);
    }

    public function create()    
    {
        return Inertia::render('Customer/CustomerDashboard');
    }

    public function store(Request $request, $id):InertiaResponse    
    {
        // store the order
        $order = Order::create([
            'status' => 'pending',
            'product_id' => $id,
            'user_id' => auth()->user()->id,
        ]);

        return Inertia::render('Customer/CustomerDashboard');
    }    

    public function destroy($id):InertiaResponse    
    {
        // delete the order
        // dd($id);    
        $order = Order::findOrfail($id);
        $order->delete();

        return Inertia::render('Customer/CustomerDashboard');
    }
   

        
}
