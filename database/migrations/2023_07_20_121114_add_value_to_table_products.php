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
        Schema::table('products', function (Blueprint $table) {
            $table->double('experiences')->nullable();
            $table->string('religions')->nullable();
            // تتقن العربية 
            $table->boolean('is_able_arabic')->nullable();
            // تتقن الانجليزية
            $table->boolean('is_able_english')->nullable();
            // الطول
            $table->double('height')->nullable();
            $table->string('languages')->nullable();
            $table->string('skills')->nullable();
            $table->string('educations')->nullable();
            $table->string('marital_status')->nullable();
            $table->double('salary')->nullable();
            $table->boolean('is_able_care_children')->nullable();
            $table->boolean('is_able_care_elderly')->nullable();
            // تاريخ الميلاد
            $table->date('birth_date')->nullable();


        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            //
        });
    }
};
