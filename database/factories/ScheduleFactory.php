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
            'begin' => $this->faker->randomElement([
                '8:00', '9:00', '10:00',
                '11:00', '12:00', '13:00',
                '14:00', '15:00', '16:00',
                '17:00', '18:00', '19:00',
                '20:00', '21:00', '22:00']),
            'comment' => $this->faker->sentence,
        ];
    }
}
