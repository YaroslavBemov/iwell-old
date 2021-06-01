<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\Auth\ApiAuthController;
use \App\Http\Controllers\ArticleController;
use \App\Models\Citi;
use \App\Http\Controllers\CoachController;

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

    // Citi
    Route::get('/cities', [Citi::class, 'index']);
    Route::get('/cities/{id}', [Citi::class, 'show']);

    // protected routes
    Route::group([
        'middleware' => 'auth:api'
    ], function () {
        Route::post('/signout', [ApiAuthController::class, 'signOut'])->name('logout.api');

        // Article
        Route::group([
            'prefix' => 'articles',
            'as' => 'articles::',
        ], function () {
            Route::get('/', [ArticleController::class, 'index'])->name('index');
            Route::post('/', [ArticleController::class, 'store'])->name('store');
            Route::get('/{id}', [ArticleController::class, 'show'])->name('show');
            Route::patch('/{id}', [ArticleController::class, 'update'])->name('update');
            Route::delete('/{id}', [ArticleController::class, 'destroy'])->name('destroy');
        });

        // Coach
        Route::resources(['coaches' => CoachController::class]);
        
    });


});
