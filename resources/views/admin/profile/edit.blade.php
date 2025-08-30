@extends('admin.layouts.app')

@section('title', 'Edit Profile - Admin Panel')

@section('content')
<div class="space-y-6">
    <!-- Header -->
    <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">Edit Profile</h1>
        <a href="{{ route('admin.profile.show') }}" 
           class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">
            Back to Profile
        </a>
    </div>

    <!-- Edit Profile Form -->
    <div class="bg-white rounded-lg shadow">
        <div class="px-6 py-4 border-b border-gray-200">
            <h2 class="text-lg font-semibold text-gray-900">Personal Information</h2>
            <p class="text-sm text-gray-600">Update your personal details and contact information.</p>
        </div>
        
        <form method="POST" action="{{ route('admin.profile.update') }}" class="p-6">
            @csrf
            @method('PUT')
            
            @if ($errors->any())
                <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                    <ul class="list-disc list-inside">
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif

            <!-- Profile Avatar Section -->
            <div class="flex items-center space-x-6 mb-8 pb-6 border-b border-gray-200">
                <div class="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center">
                    <span class="text-white text-2xl font-bold">{{ substr($user->name, 0, 1) }}</span>
                </div>
                <div>
                    <h3 class="text-lg font-medium text-gray-900">Profile Picture</h3>
                    <p class="text-sm text-gray-500">Your profile picture is automatically generated from your name.</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input type="text" id="name" name="name" value="{{ old('name', $user->name) }}" required
                           class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                           placeholder="Enter your full name">
                    <p class="text-xs text-gray-500 mt-1">This will be displayed throughout the admin panel.</p>
                </div>

                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input type="email" id="email" name="email" value="{{ old('email', $user->email) }}" required
                           class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                           placeholder="Enter your email address">
                    <p class="text-xs text-gray-500 mt-1">Used for login and notifications.</p>
                </div>
            </div>

            <!-- Account Information (Read-only) -->
            <div class="mt-8 pt-6 border-t border-gray-200">
                <h3 class="text-lg font-medium text-gray-900 mb-4">Account Information</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-500 mb-1">Role</label>
                        <div class="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg">
                            <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full 
                                {{ $user->role === 'super_admin' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800' }}">
                                {{ ucfirst(str_replace('_', ' ', $user->role)) }}
                            </span>
                        </div>
                        <p class="text-xs text-gray-500 mt-1">Role cannot be changed from profile settings.</p>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-500 mb-1">Account Status</label>
                        <div class="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg">
                            <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full 
                                {{ $user->is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800' }}">
                                {{ $user->is_active ? 'Active' : 'Inactive' }}
                            </span>
                        </div>
                        <p class="text-xs text-gray-500 mt-1">Status is managed by super administrators.</p>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-500 mb-1">Member Since</label>
                        <div class="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900">
                            {{ $user->created_at->format('F j, Y') }}
                        </div>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-500 mb-1">Last Updated</label>
                        <div class="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900">
                            {{ $user->updated_at->format('F j, Y g:i A') }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-8 flex justify-end space-x-4">
                <a href="{{ route('admin.profile.show') }}" 
                   class="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Cancel
                </a>
                <button type="submit" 
                        class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Update Profile
                </button>
            </div>
        </form>
    </div>

    <!-- Additional Actions -->
    <div class="bg-white rounded-lg shadow">
        <div class="px-6 py-4 border-b border-gray-200">
            <h2 class="text-lg font-semibold text-gray-900">Security Settings</h2>
        </div>
        
        <div class="p-6">
            <div class="flex items-center justify-between">
                <div>
                    <h3 class="text-sm font-medium text-gray-900">Password</h3>
                    <p class="text-sm text-gray-500">Last changed {{ $user->updated_at->diffForHumans() }}</p>
                </div>
                <a href="{{ route('admin.profile.change-password') }}" 
                   class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                    Change Password
                </a>
            </div>
        </div>
    </div>
</div>
@endsection
