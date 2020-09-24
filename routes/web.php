<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{any}', [
    'as' => 'index',
    'uses' => 'IndexController',
])->where('any','.*');

// Route::get('/', [
//     'as' => 'index',
//     'uses' => 'IndexController',
// ]);

Auth::routes();