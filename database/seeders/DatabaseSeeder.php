<?php

namespace Database\Seeders;

use App\Models\CoachSkill;
use Illuminate\Database\Seeder;
use \App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         $this->call([
             UserSeeder::class,
             ArticleSeeder::class,
             CoachSeeder::class,
             SkillTypeSeeder::class,
             SkillSeeder::class,
             CoachSkillSeeder::class
         ]);
    }
}
