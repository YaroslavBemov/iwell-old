<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\Auth\ApiAuthController;

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

// API
Route::group([
    'middleware' => ['cors', 'json.response'
    ]], function () {
    // public routes
    Route::post('/signin', [ApiAuthController::class, 'signIn'])->name('login.api');
    Route::post('/register', [ApiAuthController::class, 'register'])->name('register.api');

    // protected routes
    Route::group([
        'middleware' => 'auth:api'
    ], function () {
        Route::post('/signout', [ApiAuthController::class, 'signOut'])->name('logout.api');
    });
});
