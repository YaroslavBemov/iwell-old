<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SkillType extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'skill_types';

    protected $fillable = [
        'title',
        'description',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public function skills() {
        return $this->hasMany(Skill::class);
    }
}
