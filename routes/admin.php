<?php

use Illuminate\Support\Facades\Route;

Route::group([
    'as' => 'admin',
    'prefix' => 'admin',
    'namespace' => 'Admin',
],function(){
    Route::Group([
        'as' => 'dashboard',
        'prefix' => 'dashboard',
    ],function(){
        Route::get('/', 'DashboardController@index')->name('index');
    });

    Route::Group([
        'as' => 'customer',
        'prefix' => 'customer',
    ],function(){
        Route::get('/', 'CustomerController@index')->name('index');
        Route::post('store', 'CustomerController@store')->name('store');
    });
});
