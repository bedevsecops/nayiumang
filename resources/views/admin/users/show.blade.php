@extends('admin.layouts.app')

@section('title', 'Admin User Details - Admin Panel')

@section('content')
<div class="space-y-6">
    <!-- Header -->
    <div class="flex justify-between items-center">
        <div>
            <h1 class="text-3xl font-bold text-gray-900">Admin User Details</h1>
            <p class="text-gray-600">User ID: #{{ $user->id }}</p>
        </div>
        <div class="flex space-x-3">
            <a href="{{ route('admin.users.edit', $user->id) }}" 
               class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                Edit User
            </a>
            <a href="{{ route('admin.users.index') }}" 
               class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">
                Back to Users
            </a>
        </div>
    </div>

    <!-- User Details Card -->
    <div class="bg-white rounded-lg shadow overflow-hidden">
        <div class="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h2 class="text-lg font-semibold text-gray-900">User Information</h2>
        </div>
        
        <div class="p-6">
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
                    <label class="block text-sm font-medium text-gray-500 mb-1">Status</label>
                    <span class="inline-flex px-3 py-1 text-sm font-semibold rounded-full 
                        {{ $user->is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800' }}">
                        {{ $user->is_active ? 'Active' : 'Inactive' }}
                    </span>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-500 mb-1">Account Created</label>
                    <p class="text-lg text-gray-900">{{ $user->created_at->format('F j, Y') }}</p>
                    <p class="text-sm text-gray-500">{{ $user->created_at->format('g:i A') }}</p>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-500 mb-1">Last Updated</label>
                    <p class="text-lg text-gray-900">{{ $user->updated_at->format('F j, Y') }}</p>
                    <p class="text-sm text-gray-500">{{ $user->updated_at->format('g:i A') }}</p>
                </div>

                @if($user->email_verified_at)
                <div>
                    <label class="block text-sm font-medium text-gray-500 mb-1">Email Verified</label>
                    <p class="text-lg text-gray-900">{{ $user->email_verified_at->format('F j, Y') }}</p>
                    <p class="text-sm text-gray-500">{{ $user->email_verified_at->format('g:i A') }}</p>
                </div>
                @endif
            </div>
        </div>
    </div>

    <!-- Account Actions -->
    @if($user->id !== Auth::guard('admin')->id())
    <div class="bg-white rounded-lg shadow overflow-hidden">
        <div class="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h2 class="text-lg font-semibold text-gray-900">Account Actions</h2>
        </div>
        
        <div class="p-6">
            <div class="flex flex-wrap gap-4">
                <!-- Toggle Status -->
                <form method="POST" action="{{ route('admin.users.toggle-status', $user->id) }}" class="inline">
                    @csrf
                    @method('PATCH')
                    <button type="submit" 
                            class="px-4 py-2 {{ $user->is_active ? 'bg-orange-600 hover:bg-orange-700' : 'bg-green-600 hover:bg-green-700' }} text-white rounded-lg transition-colors">
                        {{ $user->is_active ? 'Deactivate Account' : 'Activate Account' }}
                    </button>
                </form>

                <!-- Delete User -->
                <form method="POST" action="{{ route('admin.users.destroy', $user->id) }}" 
                      class="inline" onsubmit="return confirm('Are you sure you want to delete this admin user? This action cannot be undone.')">
                    @csrf
                    @method('DELETE')
                    <button type="submit" 
                            class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
                        Delete User
                    </button>
                </form>
            </div>
            
            <div class="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div class="flex">
                    <div class="flex-shrink-0">
                        <i data-lucide="alert-triangle" class="h-5 w-5 text-yellow-400"></i>
                    </div>
                    <div class="ml-3">
                        <h3 class="text-sm font-medium text-yellow-800">Warning</h3>
                        <div class="mt-2 text-sm text-yellow-700">
                            <p>These actions will affect the user's access to the admin panel. Deactivating will prevent login, and deletion is permanent.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @endif
</div>
@endsection
