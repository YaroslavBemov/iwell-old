<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    protected $table = 'articles';

    protected $fillable = [
        'title',
        'body',
        'user_id'
    ];

    protected $hidden = [
        'deleted_at'
    ];

    public function users() {
        return $this->belongsTo(User::class);
    }
}
