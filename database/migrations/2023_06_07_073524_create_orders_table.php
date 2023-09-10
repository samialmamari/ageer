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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            // foregin key to user table
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            // foregin key to product table
            $table->foreignId('product_id')->constrained()->onDelete('cascade');
            // stutus of order (pending, processing, completed, canceled)
            $table->string('status')->emum('pending', 'processing', 'completed', 'canceled');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
