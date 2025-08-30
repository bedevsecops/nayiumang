@extends('admin.layouts.app')

@section('title', 'Registration Details - Admin Panel')

@section('content')
<div class="space-y-6">
    <!-- Header -->
    <div class="flex justify-between items-center">
        <div>
            <h1 class="text-3xl font-bold text-gray-900">Registration Details</h1>
            <p class="text-gray-600">Registration ID: #{{ $registration->id }}</p>
        </div>
        <a href="{{ route('admin.registrations') }}" 
           class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">
            Back to List
        </a>
    </div>

    <!-- Registration Details Card -->
    <div class="bg-white rounded-lg shadow overflow-hidden">
        <div class="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h2 class="text-lg font-semibold text-gray-900">Personal Information</h2>
        </div>
        
        <div class="p-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label class="block text-sm font-medium text-gray-500 mb-1">Full Name</label>
                    <p class="text-lg text-gray-900">{{ $registration->name }}</p>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-500 mb-1">Email Address</label>
                    <p class="text-lg text-gray-900">{{ $registration->email }}</p>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-500 mb-1">Phone Number</label>
                    <p class="text-lg text-gray-900">{{ $registration->phone }}</p>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-500 mb-1">Age</label>
                    <p class="text-lg text-gray-900">{{ $registration->age }} years</p>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-500 mb-1">Gender</label>
                    <span class="inline-flex px-3 py-1 text-sm font-semibold rounded-full 
                        {{ $registration->gender === 'male' ? 'bg-blue-100 text-blue-800' : 
                           ($registration->gender === 'female' ? 'bg-pink-100 text-pink-800' : 'bg-gray-100 text-gray-800') }}">
                        {{ ucfirst($registration->gender) }}
                    </span>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-500 mb-1">Address</label>
                    <p class="text-lg text-gray-900">{{ $registration->address }}</p>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-500 mb-1">Education</label>
                    <p class="text-lg text-gray-900">{{ $registration->education }}</p>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-500 mb-1">Occupation</label>
                    <p class="text-lg text-gray-900">{{ $registration->occupation }}</p>
                </div>
            </div>

            @if($registration->skills)
            <div class="mt-6">
                <label class="block text-sm font-medium text-gray-500 mb-2">Skills</label>
                <p class="text-lg text-gray-900">{{ $registration->skills }}</p>
            </div>
            @endif

            @if($registration->motivation)
            <div class="mt-6">
                <label class="block text-sm font-medium text-gray-500 mb-2">Motivation</label>
                <p class="text-lg text-gray-900 leading-relaxed">{{ $registration->motivation }}</p>
            </div>
            @endif
        </div>
    </div>

    <!-- Registration Metadata -->
    <div class="bg-white rounded-lg shadow overflow-hidden">
        <div class="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h2 class="text-lg font-semibold text-gray-900">Registration Information</h2>
        </div>
        
        <div class="p-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label class="block text-sm font-medium text-gray-500 mb-1">Registration Date</label>
                    <p class="text-lg text-gray-900">{{ $registration->created_at->format('F j, Y') }}</p>
                    <p class="text-sm text-gray-500">{{ $registration->created_at->format('g:i A') }}</p>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-500 mb-1">Last Updated</label>
                    <p class="text-lg text-gray-900">{{ $registration->updated_at->format('F j, Y') }}</p>
                    <p class="text-sm text-gray-500">{{ $registration->updated_at->format('g:i A') }}</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Actions -->
    <div class="flex justify-end space-x-4">
        <form method="POST" action="{{ route('admin.registration.delete', $registration->id) }}" 
              onsubmit="return confirm('Are you sure you want to delete this registration? This action cannot be undone.')">
            @csrf
            @method('DELETE')
            <button type="submit" 
                    class="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors">
                Delete Registration
            </button>
        </form>
    </div>
</div>
@endsection
