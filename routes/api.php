<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'api'], function(){
    Route::post('todo/create', 'Todo\CreateController');
    Route::get('todo/get', 'Todo\GetController');
    Route::put('todo/{id}', 'Todo\UpdateController');
    Route::put('todo/{id}/check', 'Todo\CheckController');
    Route::delete('todo/{id}/', 'Todo\DeleteController');
});
