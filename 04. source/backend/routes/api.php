<?php

use App\Http\Controllers\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HouseController;
use App\Http\Requests\HouseRequest;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/house/update',[HouseController::class,'update']);
Route::get('/categories',[CategoryController::class,'index']);
Route::post('/categories/create',[CategoryController::class,'create']);
Route::get('/categories/{id}/edit',[CategoryController::class,'findById']);
Route::put('/categories/{id}/update',[CategoryController::class,'update']);
Route::delete('/categories/{id}/delete',[CategoryController::class,'delete']);
