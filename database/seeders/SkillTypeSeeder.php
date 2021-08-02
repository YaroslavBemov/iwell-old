<?php

namespace Database\Seeders;

use App\Models\SkillType;
use Illuminate\Database\Seeder;

class SkillTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        SkillType::create([
            'title' => 'Motion',
            'description' => 'Motion description'
        ]);

        SkillType::create([
            'title' => 'Look',
            'description' => 'Look description'
        ]);
    }
}
