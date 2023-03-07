<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\User;

class Url extends Model
{
    use HasFactory;
    protected $table ='urls';
    protected $dates = ['created_at'];



    protected $fillable = [
        'user_id',
        'current_url',
        'result_code'
    ];

    public function getCreatedAtAttribute(){
        return Carbon::parse($this->attributes['created_at'])->diffForHumans();
    }

    public function getUser() {
        return $this->hasMany(User::class,  'id');
    }

}
