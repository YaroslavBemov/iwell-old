<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Article extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'articles';

    protected $fillable = [
        'title',
        'body',
        'user_id'
    ];

    protected $hidden = [
        'deleted_at'
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }
}
