<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    use HasFactory;

    protected $table = 'skills';

    protected $fillable = [
        'title',
        'description',
        'type_id',
        'score_for_coach'
    ];

    protected $hidden = [
        'deleted_at'
    ];

    public function skillTypes() {
        return $this->belongsTo(SkillType::class);
    }
}
