<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\ApiAuthController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CityController;
use App\Http\Controllers\SkillTypeController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\CoachController;
use App\Http\Controllers\CoachSkillController;
use App\Http\Controllers\ScheduleController;

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
    'middleware' => [
        'cors',
        'json.response',
// rate limit, if need in future
//        'throttle:60,1'
    ]], function () {
    // public routes
    Route::post('/signin', [ApiAuthController::class, 'signIn'])->name('login.api');
    Route::post('/register', [ApiAuthController::class, 'register'])->name('register.api');
    Route::post('/register/coach', [CoachController::class, 'register']);

    // City
    Route::get('/cities', [CityController::class, 'index']);
    Route::get('/cities/{city}', [CityController::class, 'show']);

    // Skill
    Route::get('/skill-types', [SkillTypeController::class, 'index']);
    Route::get('/skills', [SkillController::class, 'index']);
    Route::get('/skills/{skill}', [SkillController::class, 'show']);

    // Coach
    Route::get('/coach-skills', [CoachSkillController::class, 'index']);
    Route::get('/coach-skills/{coach}', [CoachSkillController::class, 'show']);
    Route::get('/schedule', [ScheduleController::class, 'index']);
    Route::get('/schedule/{schedule}', [ScheduleController::class, 'show']);
    Route::get('/schedule/coach/{coach}', [ScheduleController::class, 'showByCoach']);
    Route::get('/schedule/skill/{skill}', [ScheduleController::class, 'showBySkill']);

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
        Route::post('/schedule', [ScheduleController::class, 'store']);
    });


});
