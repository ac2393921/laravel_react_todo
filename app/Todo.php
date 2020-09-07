<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    protected $fillable = [
        'id',
        'title',
        'date',
        'time',
        'content',
        'is_checked',
    ];

    protected $casts = [
        'is_checked' => 'boolean',
    ];
}
