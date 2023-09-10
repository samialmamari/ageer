<?php    
namespace App\Http\Controllers;
    
use App\Models\Product;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\Request;
use Illuminate\View\View;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;
use App\Models\Category;
use App\Models\Order;
use App\Models\Vendor;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{ 
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    function __construct()
    {
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index( Request $request): InertiaResponse
    {
    // dd( $request);
        $products = Product::with('categories');
        if($request->has('category_id')){
            $products = $products->where('category_id', $request->category_id);
            // dd($products   );
        }
        $products = $products->get();

        $categories = Category::get();
        return Inertia::render('Web/Products/Index', [
            'products' => $products,
            'categories' => $categories,
        ]);
    }
    
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(): View
    {
        return view('products.create');
    }
    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request): RedirectResponse
    {
        request()->validate([
            'name' => 'required',
            'detail' => 'required',
        ]);
    
        Product::create($request->all());
    
        return redirect()->route('products.index')
                        ->with('success','Product created successfully.');
    }
    
    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product): View
    {
        return view('products.show',compact('product'));
    }
    
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product): View
    {
        return view('products.edit',compact('product'));
    }
    
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product): RedirectResponse
    {
         request()->validate([
            'name' => 'required',
            'detail' => 'required',
        ]);
    
        $product->update($request->all());
    
        return redirect()->route('products.index')
                        ->with('success','Product updated successfully');
    }
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product): RedirectResponse
    {
        $product->delete();
    
        return redirect()->route('products.index')
                        ->with('success','Product deleted successfully');
    }

    public function details (Request $request): InertiaResponse
    {
        $product = Product::with('categories', 'user')->where('id', $request->id)->first();
        $vendor = Vendor::where('user_id', $product->user->id)->first();
        if(auth()->user()){
            $order = Order::where('product_id', $product->id)
            ->where('user_id', auth()->user()->id)
            ->first();
        }else{
            $order = null;
        }
        
        // $path = Storage::url($product->image);
        // $product->image = $path;
        return Inertia::render('Web/Products/Details', [
            'product' => $product,
            'vendor' => $vendor,
            'order' => $order,
        ]);
    }
}