@extends('admin.layouts.app')

@section('title', 'Forgot Password - Admin Panel')

@section('content')
<div class="max-w-md w-full space-y-8">
    <div class="text-center">
        <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <i data-lucide="key" class="text-white" style="width: 32px; height: 32px;"></i>
        </div>
        <h2 class="text-3xl font-bold text-gray-900">Forgot Password</h2>
        <p class="mt-2 text-gray-600">Enter your email address and we'll help you reset your password</p>
    </div>

    <form class="mt-8 space-y-6" method="POST" action="{{ route('admin.password.email') }}">
        @csrf
        
        @if (session('success'))
            <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                {{ session('success') }}
            </div>
        @endif

        @if ($errors->any())
            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                <ul class="list-disc list-inside">
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <div class="space-y-4">
            <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
                <input id="email" name="email" type="email" required 
                       class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                       value="{{ old('email') }}" placeholder="Enter your email address">
            </div>
        </div>

        <div>
            <button type="submit" 
                    class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                Send Reset Link
            </button>
        </div>

        <div class="text-center">
            <p class="text-sm text-gray-600">
                Remember your password? 
                <a href="{{ route('admin.login') }}" class="font-medium text-blue-600 hover:text-blue-500">
                    Back to login
                </a>
            </p>
        </div>
    </form>
</div>
@endsection
