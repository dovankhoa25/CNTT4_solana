<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\TicketController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WalletController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/wallet', [WalletController::class, 'postWallet']);


Route::post('/ticket/add', [TicketController::class, 'addTicket']);
Route::get('/ticket/list', [TicketController::class, 'listTicket']);


// CATEGORY:
Route::post('/category/add', [CategoryController::class, 'addCate']);
Route::get('/categories', [CategoryController::class, 'index']);
Route::put('/update-category/{id}', [CategoryController::class, 'update']);
Route::delete('/delete-category/{id}', [CategoryController::class, 'destroy']);

Route::get('/items-by-category/{cateID}', [CategoryController::class, 'getItemsByCategoryId']);
