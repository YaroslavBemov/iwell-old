<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateScheduleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schedule', function (Blueprint $table) {
            $table->id();
//            $table->unsignedInteger('city_id');
            $table->unsignedBigInteger('coach_skill_id');
            $table->string('link_to_zoom');
            $table->string('begin');
            $table->string('status')->default('new');
            $table->string('comment');
//            $table->string('accent');
//            $table->string('level');
//            $table->string('inventory');
//            $table->string('user_counter');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('schedule');
    }
}
