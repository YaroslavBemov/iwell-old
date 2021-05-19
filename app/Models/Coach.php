<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coach extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'achieve',
        'rank',
        'about',
        'money',
        'experience',
        'showreel',
        'fitness_percentage',
        'is_aggreed'

    ];

    protected $primaryKey = 'id';

    protected $hidden = [
        'deleted_at'
    ];
}
