<?php

namespace Database\Seeders;

use App\Models\Skill;
use Illuminate\Database\Seeder;

class SkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Skill::create([
            'title' => 'Fitness',
            'description' => 'Fitness description',
            'type_id' => 1,
            'score_for_coach' => 700
        ]);

        Skill::create([
            'title' => 'Facebuilding',
            'description' => 'Facebuilding description',
            'type_id' => 2,
            'score_for_coach' => 500
        ]);
    }
}
