<?php

namespace Database\Factories;

use App\Models\Coach;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class CoachFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Coach::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => $this->faker->unique()->numberBetween(1, 10),
            'achieve' => $this->faker->text(10),
            'rank' => $this->faker->text(10),
            'about' => $this->faker->text(50),
            'money' => $this->faker->randomFloat(2, 20, 600),
            'experience' => $this->faker->text(40),
        ];
    }
}
