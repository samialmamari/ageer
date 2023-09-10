<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;
use App\Models\Order;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class VendorProductController extends Controller
{
    public function index(): Response
    {
        // dd(auth()->user()->id);
       $imagepath = asset('storage');
        $vendorProducts = Product::where('vendor_id', auth()->user()->id)->get();
        // dd($vendorProducts);
        return Inertia::render('Vendor/VendorProducts/Index', [
            'vendorProducts' => $vendorProducts,
            'imagepath' => $imagepath,
            'status' => session('status'),
        ]);
        // return view('vendorProducts.index', compact('vendorProducts'));
    }

    public function create(): Response
    {
        $categories = Category::all();
        return Inertia::render('Vendor/VendorProducts/Create', [
            'categories' => $categories,
        ]);
        // return view('vendorProducts.create', compact('categories'));
    }

    public function store(Request $request): RedirectResponse
    {
        // dd($request->all() );

        $image = $request->file('image');

    if ($image) {
        $path = $image->store('images', 'public'); // 'images' is the directory name within 'public/uploads'
        $vendorProduct = new Product;
        $vendorProduct->fill($request->all());
        // $vendorProduct->name = $request->name;
        // $vendorProduct->description = $request->description;
        // $vendorProduct->price = $request->price;
        $vendorProduct->vendor_id = auth()->user()->id;
        // $vendorProduct->category_id = $request->category_id;
        // $vendorProduct->quantity = $request->quantity;
        // $vendorProduct->weight = $request->weight;
        // $vendorProduct->age = $request->age;
        // $vendorProduct->slug = $request->slug;
        // $vendorProduct->sku = $request->sku;
        $vendorProduct->image = $path;
        // $vendorProduct->sale_price = $request->sale_price;

        $vendorProduct->save();
    }
        return redirect()->route('vendorproduct.index');
    }

    public function edit($id): Response
    {
        $vendorProduct = Product::find($id);
        $categories = Category::all();
        return Inertia::render('Vendor/VendorProducts/EditProduct', [
            'vendorProduct' => $vendorProduct,
            'categories' => $categories,

        ]);
    }

    public function update(Request $request, $id): RedirectResponse
    {
            $vendorProduct = Product::find($id);
            // dd($request);
            if($request->hasFile('image')){
                    $image = $request->file('image');
                    $path = $image->store('images', 'public'); 
                    $vendorProduct->image = $path;
            }
            $vendorProduct->fill($request->all());

            $vendorProduct->save();
     
       
    

        return redirect()->route('vendorproduct.index');
    }

    public function destroy($id): RedirectResponse
    {
        $vendorProduct = Product::find($id);
        $vendorProduct->delete();

        return redirect()->route('vendorproduct.index');
    }

    public function show($id)
    {
        // dd($id);
        $vendorProduct = Product::find($id);
        $vendorProduct->delete();

        return redirect()->route('vendorproduct.index');
        // return view('vendorProducts.show', compact('vendorProduct'));
    }

    // create fun. for vendor product order
    public function vendorProductOrder()
    {
        $vendorProductOrder = Order::with('user', 'product')->whereHas('product', function ($query) {
            $query->where('vendor_id', auth()->user()->id);
        })->get();
        return Inertia::render('Vendor/VendorProducts/VendorProductOrder', [
            'vendorProductOrder' => $vendorProductOrder,
        ]);
    }

    // create fun. for vendor product accespt order
    public function vendorProductAcceptOrder($id)
    {
        $vendorProductOrder = Order::find($id);
        $vendorProductOrder->status = 'accepted';
        $vendorProductOrder->save();

// update product active status to 0
        $product = Product::find($vendorProductOrder->product_id);
        $product->active = 0;
        $product->save();
return redirect()->route('vendorproduct.vendorProductOrder');
    }
}
