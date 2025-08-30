<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Registration extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'phone',
        'email',
        'gender',
        'age',
        'address',
        'education',
        'occupation',
        'skills',
        'motivation',
        // Legacy field names for backward compatibility
        'full_name',
        'mobile',
    ];
}
