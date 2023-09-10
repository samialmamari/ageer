<?php

use App\Http\Controllers\CoontactController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\OfficeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\VendorController;
use App\Http\Controllers\VendorProductController;
use App\Http\Controllers\VendorOrderController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::get('/about', function () {
    return Inertia::render('Web/Aboutus');
}); 
Route::get('/contact', function () {
    return Inertia::render('Web/Contactus');
});
    Route::post('/', [CoontactController::class, 'store'])->name('contact.store');

Route::group(['prefix' => 'products', 'middleware' => ['web']], function () {
    Route::get('/', [ProductController::class, 'index'])->name('products.index');
    Route::get('details', [ProductController::class, 'details'])->name('products.details');
    // Route::get('/create', [ProductController::class, 'create'])->name('products.create');
    // Route::post('/', [ProductController::class, 'store'])->name('products.store');
    // Route::get('/{id}', [ProductController::class, 'show'])->name('products.show');
    // Route::get('/{id}/edit', [ProductController::class, 'edit'])->name('products.edit');
    // Route::patch('/{id}', [ProductController::class, 'update'])->name('products.update');
    // Route::delete('/{id}', [ProductController::class, 'destroy'])->name('products.destroy');
});
Route::group(['prefix' => 'offices', 'middleware' => ['web']], function () {
    Route::get('/', [OfficeController::class, 'index'])->name('offices.index');
    Route::get('/details', [OfficeController::class, 'details'])->name('offices.details');
    // Route::get('/create', [OfficeController::class, 'create'])->name('offices.create');
    // Route::post('/', [OfficeController::class, 'store'])->name('offices.store');
    // Route::get('/{id}', [OfficeController::class, 'show'])->name('offices.show');
    // Route::get('/{id}/edit', [OfficeController::class, 'edit'])->name('offices.edit');
    // Route::patch('/{id}', [OfficeController::class, 'update'])->name('offices.update');
    // Route::delete('/{id}', [OfficeController::class, 'destroy'])->name('offices.destroy');
});
Route::group(['middleware' => ['auth']], function() {
    Route::group(['middleware' => ['role:admin'], 'prefix'  => 'admin'], function() {
      
            Route::resource('roles', RoleController::class);
            Route::resource('users', UserController::class);
            // Route::get('users', [UserController::class, 'index'])->name('users.index');
            Route::delete('users/{id}', [UserController::class, 'destroy'])->name('users.destroy');
     
    });
   

    // Route::resource('vendorproduct', VendorProductController::class);
    Route::group(['middleware' => ['role:vendor'], 'prefix' => 'vendor'], function() {


    Route::resource('products', ProductController::class);
        // Route::resource('vendor', VendorController::class);
        Route::get('vendor', [VendorController::class, 'index'])->name('vendor.index');
        Route::get('vendor/create', [VendorController::class, 'create'])->name('vendor.create');
        Route::post('vendor', [VendorController::class, 'store'])->name('vendor.store');
        Route::get('vendor/{id}', [VendorController::class, 'edit'])->name('vendor.edit');
        Route::patch('vendor/{id}', [VendorController::class, 'update'])->name('vendor.update');
        Route::get('VendorDashboard', [VendorController::class, 'VendorDashboard'])->name('VendorDashboard');
        Route::resource('vendorproduct', VendorProductController::class);
        // Route::get('vendorproduct', [VendorProductController::class, 'index'])->name('vendorproduct.index');
        Route::resource('vensororder', VendorOrderController::class);
        Route::get('vendororder', [VendorOrderController::class, 'index'])->name('vendororder.index');
        Route::get('vendorproduct', [VendorProductController::class, 'index'])->name('vendorproduct.index');
        Route::post('vendorproduct/{id}', [VendorProductController::class, 'update'])->name('vendorproduct.update');


        Route::delete('vendorproduct/{id}', [VendorProductController::class, 'destroy'])->name('vendorproduct.destroy');
        Route::get('vendorProductOrder/{id}', [VendorProductController::class, 'vendorProductOrderShow'])->name('vendorProductOrderShow');
        Route::get('vendorProductOrder/{id}/edit', [VendorProductController::class, 'vendorProductOrderEdit'])->name('vendorProductOrderEdit');
        Route::patch('vendorProductOrder/{id}', [VendorProductController::class, 'vendorProductOrderUpdate'])->name('vendorProductOrderUpdate');
        Route::delete('vendorProductOrder/{id}', [VendorProductController::class, 'vendorProductOrderDestroy'])->name('vendorProductOrderDestroy');
    });
});



// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::group(['middleware' => ['role:customer'], 'prefix' => 'customer'], function() {
    Route::get('customerDashboard', [CustomerController::class,
         'customerDashboard'])->name('customerDashboard');
    Route::post('/{id}', [ CustomerController::class,'store'])->name('customerDashboard.store');
    Route::post('customerDashboard/{id}', [ CustomerController::class,'destroy'])->name('customerDashboard.destroy');

});


require __DIR__.'/auth.php';
