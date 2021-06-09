<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

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
             CitySeeder::class,
             UserSeeder::class,
             ArticleSeeder::class,
             CoachSeeder::class,
             SkillTypeSeeder::class,
             SkillSeeder::class,
             CoachSkillSeeder::class,
//             ScheduleSeeder::class
         ]);
    }
}
