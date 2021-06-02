<?php

namespace Database\Seeders;

use App\Models\CoachSkill;
use Illuminate\Database\Seeder;

class CoachSkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        CoachSkill::factory()
            ->count(5)
            ->create();
    }
}
