<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CoachSkill extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'coach_skills';

    protected $fillable = [
        'coach_id',
        'skill_id'
    ];

    protected $hidden = [
        'coach_id',
        'skill_id',
        'status',
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    public function skill() {
        return $this->belongsTo(Skill::class);
    }

    public function coach() {
        return $this->belongsTo(Coach::class);
    }
}
