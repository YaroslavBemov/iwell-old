<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    use HasFactory;

    protected $table = 'schedule';

    protected $fillable =[
        'coach_id',
        'city_id',
        'coach_skill_id',
        'link_to_zoom',
        'begin',
        'duration',
        'status',
        'comment',
        'accent',
        'level',
        'inventory'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    public function cities() {
        return $this->belongsTo(City::class);
    }

    public function coachSkills() {
        return $this->belongsTo(CoachSkill::class);
    }
}
