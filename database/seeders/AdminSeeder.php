<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Only create admin if it doesn't exist
        if (!Admin::where('email', 'admin@nayiumang.org')->exists()) {
            Admin::create([
                'name' => 'Super Admin',
                'email' => 'admin@nayiumang.org',
                'password' => Hash::make('admin123'),
                'role' => 'super_admin',
                'is_active' => true,
            ]);
        }
    }
}
