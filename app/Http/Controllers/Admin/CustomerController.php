<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Url;
use App\Http\Controllers\Api\User\UserController;
class CustomerController extends UserController
{
    //
    public function index(){

        $user = User::withCount('getUrl')->paginate(10);

        return Inertia::render('Admin/Customer/Index',[
            'user' => $user
        ]);
    }

    
}
