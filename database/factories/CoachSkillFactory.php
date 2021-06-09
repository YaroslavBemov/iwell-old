<?php

namespace Database\Factories;

use App\Models\Coach;
use App\Models\CoachSkill;
use App\Models\Skill;
use Illuminate\Database\Eloquent\Factories\Factory;

class CoachSkillFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = CoachSkill::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'coach_id' => Coach::all()->random()->id,
            'skill_id' => Skill::all()->random()->id,
            'status' => $this->faker->randomElement(['new', 'approved', 'dismissed'])
        ];
    }
}
