<?php

namespace Database\Factories;

use App\Models\Coach;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

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
            'achieve' => $this->faker->sentence(),
            'rank' => $this->faker->sentence(),
            'about' => $this->faker->sentence(),
            'score' => $this->faker->randomDigit(),
            'user_id' => User::all()->random()->id
        ];
    }
}
