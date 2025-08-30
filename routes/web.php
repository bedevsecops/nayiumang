<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\ProfileController;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/about', [HomeController::class, 'about'])->name('about');
Route::get('/register', [RegistrationController::class, 'index'])->name('register');
Route::post('/register', [RegistrationController::class, 'store'])->name('register.store');

// API Routes
Route::post('/api/registrations', [RegistrationController::class, 'store'])->name('api.registrations.store');

// Admin Routes
Route::prefix('admin')->middleware(['force.https', 'secure.headers'])->group(function () {
    // Admin Authentication Routes (redirect to dashboard if already logged in)
    Route::middleware(['admin.guest'])->group(function () {
        Route::get('/', function () {
            return redirect('/admin/login');
        });
        Route::get('/login', [AuthController::class, 'showLoginForm'])->name('admin.login');
        Route::post('/login', [AuthController::class, 'login'])->name('admin.login.post');

        // Password Reset Routes
        Route::get('/forgot-password', [AuthController::class, 'showForgotPasswordForm'])->name('admin.password.request');
        Route::post('/forgot-password', [AuthController::class, 'sendResetLink'])->name('admin.password.email');
        Route::get('/reset-password/{token}', [AuthController::class, 'showResetPasswordForm'])->name('admin.password.reset');
        Route::post('/reset-password', [AuthController::class, 'resetPassword'])->name('admin.password.update');
    });

    // Protected Admin Routes (require admin authentication)
    Route::middleware(['admin.auth'])->group(function () {
        Route::get('/dashboard', [DashboardController::class, 'index'])->name('admin.dashboard');
        Route::get('/registrations', [DashboardController::class, 'registrations'])->name('admin.registrations');
        Route::get('/registrations/{id}', [DashboardController::class, 'showRegistration'])->name('admin.registration.show');
        Route::delete('/registrations/{id}', [DashboardController::class, 'deleteRegistration'])->name('admin.registration.delete');

        // Admin User Management Routes (Super Admin Only)
        Route::resource('users', UserController::class)->names([
            'index' => 'admin.users.index',
            'create' => 'admin.users.create',
            'store' => 'admin.users.store',
            'show' => 'admin.users.show',
            'edit' => 'admin.users.edit',
            'update' => 'admin.users.update',
            'destroy' => 'admin.users.destroy',
        ]);
        Route::patch('/users/{id}/toggle-status', [UserController::class, 'toggleStatus'])->name('admin.users.toggle-status');

        // Profile Management Routes
        Route::get('/profile', [ProfileController::class, 'show'])->name('admin.profile.show');
        Route::get('/profile/edit', [ProfileController::class, 'edit'])->name('admin.profile.edit');
        Route::put('/profile', [ProfileController::class, 'update'])->name('admin.profile.update');
        Route::get('/profile/change-password', [ProfileController::class, 'showChangePasswordForm'])->name('admin.profile.change-password');
        Route::put('/profile/change-password', [ProfileController::class, 'changePassword'])->name('admin.profile.change-password.update');

        Route::post('/logout', [AuthController::class, 'logout'])->name('admin.logout');
    });
});
