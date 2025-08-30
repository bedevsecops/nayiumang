@extends('admin.layouts.app')

@section('title', 'Change Password - Admin Panel')

@section('content')
<div class="space-y-6">
    <!-- Header -->
    <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">Change Password</h1>
        <a href="{{ route('admin.profile.show') }}" 
           class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">
            Back to Profile
        </a>
    </div>

    <!-- Change Password Form -->
    <div class="bg-white rounded-lg shadow">
        <div class="px-6 py-4 border-b border-gray-200">
            <h2 class="text-lg font-semibold text-gray-900">Update Password</h2>
            <p class="text-sm text-gray-600">Ensure your account is using a long, random password to stay secure.</p>
        </div>
        
        <form method="POST" action="{{ route('admin.profile.change-password.update') }}" class="p-6">
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

            <div class="space-y-6">
                <div>
                    <label for="current_password" class="block text-sm font-medium text-gray-700 mb-2">Current Password *</label>
                    <input type="password" id="current_password" name="current_password" required
                           class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                           placeholder="Enter your current password">
                    <p class="text-xs text-gray-500 mt-1">Enter your current password to confirm your identity.</p>
                </div>

                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700 mb-2">New Password *</label>
                    <input type="password" id="password" name="password" required
                           class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                           placeholder="Enter your new password">
                    <p class="text-xs text-gray-500 mt-1">Password must be at least 8 characters long.</p>
                </div>

                <div>
                    <label for="password_confirmation" class="block text-sm font-medium text-gray-700 mb-2">Confirm New Password *</label>
                    <input type="password" id="password_confirmation" name="password_confirmation" required
                           class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                           placeholder="Confirm your new password">
                    <p class="text-xs text-gray-500 mt-1">Re-enter your new password to confirm.</p>
                </div>
            </div>

            <!-- Password Requirements -->
            <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 class="text-sm font-medium text-blue-800 mb-2">Password Requirements:</h3>
                <ul class="text-xs text-blue-700 space-y-1">
                    <li>• At least 8 characters long</li>
                    <li>• Mix of uppercase and lowercase letters (recommended)</li>
                    <li>• Include numbers and special characters (recommended)</li>
                    <li>• Avoid using personal information</li>
                </ul>
            </div>

            <div class="mt-8 flex justify-end space-x-4">
                <a href="{{ route('admin.profile.show') }}" 
                   class="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Cancel
                </a>
                <button type="submit" 
                        class="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    Update Password
                </button>
            </div>
        </form>
    </div>

    <!-- Security Tips -->
    <div class="bg-white rounded-lg shadow">
        <div class="px-6 py-4 border-b border-gray-200">
            <h2 class="text-lg font-semibold text-gray-900">Security Tips</h2>
        </div>
        
        <div class="p-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="flex items-start space-x-3">
                    <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i data-lucide="shield-check" class="w-4 h-4 text-white"></i>
                    </div>
                    <div>
                        <h3 class="font-medium text-gray-900">Use Strong Passwords</h3>
                        <p class="text-sm text-gray-600">Create passwords that are long, unique, and hard to guess.</p>
                    </div>
                </div>

                <div class="flex items-start space-x-3">
                    <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i data-lucide="refresh-cw" class="w-4 h-4 text-white"></i>
                    </div>
                    <div>
                        <h3 class="font-medium text-gray-900">Regular Updates</h3>
                        <p class="text-sm text-gray-600">Change your password regularly, especially if you suspect it's been compromised.</p>
                    </div>
                </div>

                <div class="flex items-start space-x-3">
                    <div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i data-lucide="eye-off" class="w-4 h-4 text-white"></i>
                    </div>
                    <div>
                        <h3 class="font-medium text-gray-900">Keep It Private</h3>
                        <p class="text-sm text-gray-600">Never share your password with others or write it down in unsecure places.</p>
                    </div>
                </div>

                <div class="flex items-start space-x-3">
                    <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i data-lucide="smartphone" class="w-4 h-4 text-white"></i>
                    </div>
                    <div>
                        <h3 class="font-medium text-gray-900">Secure Devices</h3>
                        <p class="text-sm text-gray-600">Always log out from shared or public devices after use.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
