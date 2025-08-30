<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\RegistrationController;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/about', [HomeController::class, 'about'])->name('about');
Route::get('/register', [RegistrationController::class, 'index'])->name('register');

// API Routes
Route::post('/api/registrations', [RegistrationController::class, 'store'])->name('api.registrations.store');
