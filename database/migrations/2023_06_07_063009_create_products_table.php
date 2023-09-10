<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            // create all the sugtion columns for product
            $table->string('name');
            $table->string('slug');
            $table->string('sku');
            $table->string('image');
            $table->text('description');
            $table->integer('price');
            $table->integer('sale_price');

            // foregin key to vendor table
            $table->foreignId('vendor_id')->constrained()->onDelete('cascade');
            // foregin key to category table
            $table->foreignId('category_id')->constrained()->onDelete('cascade');

            $table->integer('quantity');
            $table->integer('weight');
            $table->integer('age');
            // activ
            $table->boolean('active')->default(1);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
