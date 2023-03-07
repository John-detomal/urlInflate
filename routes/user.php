<?php

use Illuminate\Support\Facades\Route;


Route::group([
    // 'prefix' => 'user',
    'namespace' => 'User',
],function(){
    Route::get('/', 'HomeController@index')->name('index');

    Route::group([
        'prefix' => 'user',
        'as' => 'user'
    ],function(){
        Route::group([
            'as' => 'url',
            'prefix' => 'url'
        ],function(){
            Route::get('/', 'UrlController@index')->name('index');
            
            Route::post('/store', 'UrlController@store')->name('store');
            Route::delete('/delete/{id}', 'UrlController@delete')->name('delete');
            Route::post('/update/{id}', 'UrlController@update')->name('update');
        });
    });
});





