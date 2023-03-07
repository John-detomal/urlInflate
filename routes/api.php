<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\User\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
// Route::get('/user', [UserController::class, 'getUser'])->name('user');

Route::group([
    'prefix' => 'user',
], function(){
    Route::get('/', [UserController::class, 'user'])->name('user');
    Route::get('/{id}', [UserController::class, 'show'])->name('show');
    Route::put('/update/{id}', [UserController::class, 'update'])->name('update');
    Route::post('/store', [UserController::class, 'store'])->name('store');
    Route::delete('/delete/{id}', [UserController::class, 'delete'])->name('delete');

});

