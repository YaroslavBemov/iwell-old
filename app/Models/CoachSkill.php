<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CoachSkill extends Model
{
    use HasFactory;

    protected $table = 'coach_skills';

    protected $fillable = [
        'coach_id',
        'skill_id'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    public function skills() {
        return $this->belongsTo(Skill::class);
    }

    public function coaches() {
        return $this->belongsTo(Coach::class);
    }
}
