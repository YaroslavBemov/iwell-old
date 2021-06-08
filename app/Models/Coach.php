<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Coach extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'coaches';

    protected $fillable = [
        'user_id',
        'achieve',
        'rank',
        'about',
    ];

    protected $hidden = [
        'score',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public function skills() {
        return $this->belongsToMany(Skill::class, 'coach_skills')
            ->withPivot('status');
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}
