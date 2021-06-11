<?php

namespace Database\Factories;

use App\Models\City;
use App\Models\CoachSkill;
use App\Models\Schedule;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class ScheduleFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Schedule::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
//            'city_id' => City::all()->random()->id,
            'coach_skill_id' => CoachSkill::all()->where('status', 'approved')->random()->id,
            'link_to_zoom' => $this->faker->word(),
            'begin' => $this->faker->dateTimeInInterval('+ 1 days', '+ 30 days'),
            'comment' => $this->faker->sentence,
        ];
    }
}
