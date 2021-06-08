<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Skill extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'skills';

    protected $fillable = [
        'title',
        'description',
        'type_id',
        'score_for_coach'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    public function skillType() {
        return $this->belongsTo(SkillType::class);
    }

    public function coachSkills() {
        return $this->hasMany(CoachSkill::class);
    }

    public function coaches() {
        return $this->belongsToMany(Coach::class, 'coach_skills')
            ->withPivot('status');
    }
}
