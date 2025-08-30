@extends('admin.layouts.app')

@section('title', 'Profile - Admin Panel')

@section('content')
<div class="space-y-6">
    <!-- Header -->
    <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">My Profile</h1>
        <a href="{{ route('admin.profile.edit') }}" 
           class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
            Edit Profile
        </a>
    </div>

    <!-- Profile Information Card -->
    <div class="bg-white rounded-lg shadow overflow-hidden">
        <div class="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h2 class="text-lg font-semibold text-gray-900">Profile Information</h2>
        </div>
        
        <div class="p-6">
            <div class="flex items-center space-x-6 mb-6">
                <!-- Profile Avatar -->
                <div class="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center">
                    <span class="text-white text-2xl font-bold">{{ substr($user->name, 0, 1) }}</span>
                </div>
                
                <div>
                    <h3 class="text-xl font-semibold text-gray-900">{{ $user->name }}</h3>
                    <p class="text-gray-600">{{ ucfirst(str_replace('_', ' ', $user->role)) }}</p>
                    <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full mt-1
                        {{ $user->is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800' }}">
                        {{ $user->is_active ? 'Active' : 'Inactive' }}
                    </span>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label class="block text-sm font-medium text-gray-500 mb-1">Full Name</label>
                    <p class="text-lg text-gray-900">{{ $user->name }}</p>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-500 mb-1">Email Address</label>
                    <p class="text-lg text-gray-900">{{ $user->email }}</p>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-500 mb-1">Role</label>
                    <span class="inline-flex px-3 py-1 text-sm font-semibold rounded-full 
                        {{ $user->role === 'super_admin' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800' }}">
                        {{ ucfirst(str_replace('_', ' ', $user->role)) }}
                    </span>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-500 mb-1">Account Status</label>
                    <span class="inline-flex px-3 py-1 text-sm font-semibold rounded-full 
                        {{ $user->is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800' }}">
                        {{ $user->is_active ? 'Active' : 'Inactive' }}
                    </span>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-500 mb-1">Member Since</label>
                    <p class="text-lg text-gray-900">{{ $user->created_at->format('F j, Y') }}</p>
                    <p class="text-sm text-gray-500">{{ $user->created_at->diffForHumans() }}</p>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-500 mb-1">Last Updated</label>
                    <p class="text-lg text-gray-900">{{ $user->updated_at->format('F j, Y') }}</p>
                    <p class="text-sm text-gray-500">{{ $user->updated_at->diffForHumans() }}</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Quick Actions -->
    <div class="bg-white rounded-lg shadow overflow-hidden">
        <div class="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h2 class="text-lg font-semibold text-gray-900">Quick Actions</h2>
        </div>
        
        <div class="p-6">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a href="{{ route('admin.profile.edit') }}" 
                   class="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                        <i data-lucide="edit" class="w-5 h-5 text-white"></i>
                    </div>
                    <div>
                        <h3 class="font-medium text-gray-900">Edit Profile</h3>
                        <p class="text-sm text-gray-500">Update your personal information</p>
                    </div>
                </a>

                <a href="{{ route('admin.profile.change-password') }}" 
                   class="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                        <i data-lucide="key" class="w-5 h-5 text-white"></i>
                    </div>
                    <div>
                        <h3 class="font-medium text-gray-900">Change Password</h3>
                        <p class="text-sm text-gray-500">Update your account password</p>
                    </div>
                </a>

                <a href="{{ route('admin.dashboard') }}" 
                   class="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div class="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                        <i data-lucide="home" class="w-5 h-5 text-white"></i>
                    </div>
                    <div>
                        <h3 class="font-medium text-gray-900">Dashboard</h3>
                        <p class="text-sm text-gray-500">Return to main dashboard</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>
@endsection
