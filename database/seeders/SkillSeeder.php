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
        // Motion
        Skill::create([
            'title' => 'Fitness',
            'description' => 'Fitness description',
            'duration' => '60',
            'type_id' => 1,
            'score_for_coach' => 700
        ]);
        Skill::create([
            'title' => 'Power training',
            'description' => 'Power training description',
            'duration' => '60',
            'type_id' => 1,
            'score_for_coach' => 800
        ]);
        Skill::create([
            'title' => 'Yoga',
            'description' => 'Yoga description',
            'duration' => '60',
            'type_id' => 1,
            'score_for_coach' => 600
        ]);
        Skill::create([
            'title' => 'Pilates',
            'description' => 'Pilates description',
            'duration' => '60',
            'type_id' => 1,
            'score_for_coach' => 600
        ]);
        Skill::create([
            'title' => 'Stretching',
            'description' => 'Stretching description',
            'duration' => '60',
            'type_id' => 1,
            'score_for_coach' => 600
        ]);
        Skill::create([
            'title' => 'Charging',
            'description' => 'Charging description',
            'duration' => '60',
            'type_id' => 1,
            'score_for_coach' => 500
        ]);

        // Food
        Skill::create([
            'title' => 'Nutritional science',
            'description' => 'Nutritional science description',
            'duration' => '60',
            'type_id' => 2,
            'score_for_coach' => 500
        ]);
        Skill::create([
            'title' => 'Dietetics',
            'description' => 'Dietetics description',
            'duration' => '60',
            'type_id' => 2,
            'score_for_coach' => 500
        ]);
        Skill::create([
            'title' => 'Sports nutrition',
            'description' => 'Sports nutrition description',
            'duration' => '60',
            'type_id' => 2,
            'score_for_coach' => 500
        ]);

        // Look
        Skill::create([
            'title' => 'Facebuilding',
            'description' => 'Facebuilding description',
            'duration' => '60',
            'type_id' => 3,
            'score_for_coach' => 500
        ]);
        Skill::create([
            'title' => 'Makeup',
            'description' => 'Makeup description',
            'duration' => '60',
            'type_id' => 3,
            'score_for_coach' => 500
        ]);
        Skill::create([
            'title' => 'Stylist consultation',
            'description' => 'Stylist consultation description',
            'duration' => '60',
            'type_id' => 3,
            'score_for_coach' => 500
        ]);

        // Psych
        Skill::create([
            'title' => 'Psychoanalysis',
            'description' => 'Psychoanalysis description',
            'duration' => '60',
            'type_id' => 4,
            'score_for_coach' => 500
        ]);
        Skill::create([
            'title' => 'Art therapy',
            'description' => 'Art therapy description',
            'duration' => '60',
            'type_id' => 4,
            'score_for_coach' => 500
        ]);
        Skill::create([
            'title' => 'Meditations',
            'description' => 'Meditations description',
            'duration' => '60',
            'type_id' => 4,
            'score_for_coach' => 500
        ]);
    }
}
