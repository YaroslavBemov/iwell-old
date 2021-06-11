<?php

namespace Database\Factories;

use App\Models\City;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $gender = $this->faker->randomElement(['male', 'female']);

        return [
            'email' => $this->faker->unique()->safeEmail,
            'password' => bcrypt('password'),
            'first_name' => $this->faker->firstName($gender),
            'last_name' => $this->faker->lastName,
            'birthday' => $this->faker->date(),
            'gender' => $gender,
            'hometown_id' => City::all()->random()->id,
            'trial' => $this->faker->randomElement(['available', 'inaccessible'])
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}
