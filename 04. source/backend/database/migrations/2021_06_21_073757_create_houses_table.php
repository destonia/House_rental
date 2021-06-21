<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHousesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('houses', function (Blueprint $table) {
            $table->id();
            $table->float('diameter');
            $table->string('address');
            $table->float('price');
            $table->integer('room');
            $table->string('description');
            $table->boolean('furniture');
            $table->boolean('status');
            $table->unsignedBigInteger('category_id');
            $table->unsignedBigInteger('owner_id');
            $table->unsignedBigInteger('renter_id');
            $table->foreign('category_id')->references('id')->on('categories');
            $table->foreign('owner_id')->references('id')->on('owners');
            $table->foreign('renter_id')->references('id')->on('renters');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('houses');
    }
}
