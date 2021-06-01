<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCoachesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('coaches', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->text('achieve')->nullable($value = true); // Достижения
            $table->string('rank', 150)->nullable($value = true); // Разряд, спортивное звание
            $table->text('about')->nullable($value = true); // О себе
            $table->decimal('money', $precision = 9, $scale = 2)->default(0.00); // Деньги
            $table->text('experience')->nullable($value = true); // Опыт
            $table->text('showreel')->nullable($value = true); // Видео-визитка
            $table->tinyInteger('fitness_percentage')->nullable($value = true); // процент пригодности
            $table->boolean('is_agreed')->default(false); // Подтвержден статус тренера
            $table->boolean('deleted_at')->default(false); // Тренер удален 
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('coaches');
    }
}
