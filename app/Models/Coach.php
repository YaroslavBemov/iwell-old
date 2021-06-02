<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coach extends Model
{
    use HasFactory;

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
        return $this->hasMany(Skill::class);
    }

    public function users() {
        return $this->belongsTo(User::class);
    }
}
