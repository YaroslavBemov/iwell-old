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
        Schema::table('schedule', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('coach_id');
            $table->unsignedInteger('city_id');
            $table->unsignedBigInteger('coach_skill_id');
            $table->string('link_to_zoom');
            $table->string('begin');
            $table->string('duration');
            $table->string('status');
            $table->string('comment');
            $table->string('accent');
            $table->string('level');
            $table->string('inventory');
            $table->string('user_counter');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('coach_id')->references('id')->on('coaches');
            $table->foreign('city_id')->references('id')->on('cities');
            $table->foreign('coach_skill_id')->references('id')->on('coach_skills');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('schedule', function (Blueprint $table) {
            $table->dropForeign(['coach_id', 'city_id', 'coach_skill_id']);
        });

        Schema::dropIfExists('schedule');
    }
}
