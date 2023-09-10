<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected  $fillable = [
        'name',
        'description',
        'price',
        'category_id',
        'vendor_id',
        'image',
        'quantity',
        'weight',
        'age',
        'slug',
        'sku',
        'sale_price',
        'active',
        'experiences',
        'religions',
        'is_able_arabic',
        'is_able_english',
        'height',
        'languages',
        'skills',
        'educations',
        'marital_status',
        'salary',
        'is_able_care_children',
        'is_able_care_elderly',
        'birth_date',
        'is_able_cleaning',
        'is_able_cooking',


    ];

    public function categories()
    {
        return $this->belongsTo('App\Models\Category', 'category_id');
    }

    public function user()
    {
        return $this->belongsTo('App\Models\User', 'vendor_id');
    }
    // public function orders()
    // {
    //     return $this->hasMany('App\Models\Order', 'product_id');
    // }

}
