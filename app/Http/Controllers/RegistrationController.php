<?php

namespace App\Http\Controllers;

use App\Models\Registration;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\Rule;

class RegistrationController extends Controller
{
    public function index()
    {
        return view('registration');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'full_name' => 'required|string|max:255',
            'mobile' => 'required|string|regex:/^[0-9]{10}$/',
            'email' => 'required|email|unique:registrations,email',
            'gender' => 'nullable|string|in:पुरुष,महिला,अन्य,सांगणार नाही',
        ]);

        $registration = Registration::create([
            // New column names (for admin panel)
            'name' => $validated['full_name'],
            'phone' => $validated['mobile'],
            'email' => $validated['email'],
            'gender' => $validated['gender'] ?? null,
            // Legacy column names (for backward compatibility)
            'full_name' => $validated['full_name'],
            'mobile' => $validated['mobile'],
        ]);

        // Check if request expects JSON (API request)
        if ($request->expectsJson() || $request->is('api/*')) {
            return response()->json([
                'message' => 'नोंदणी यशस्वी झाली!',
                'registration' => $registration
            ], 201);
        }

        // Web request - redirect back with success message
        return redirect()->back()->with('success', 'नोंदणी यशस्वी झाली! आम्ही लवकरच तुमच्याशी संपर्क साधू.');
    }
}
