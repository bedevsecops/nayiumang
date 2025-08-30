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

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'full_name' => 'required|string|max:255',
            'mobile' => 'required|string|regex:/^[0-9]{10}$/',
            'email' => 'required|email|unique:registrations,email',
            'gender' => 'nullable|string|in:पुरुष,महिला,अन्य,सांगणार नाही',
        ]);

        $registration = Registration::create([
            'full_name' => $validated['full_name'],
            'mobile' => $validated['mobile'],
            'email' => $validated['email'],
            'gender' => $validated['gender'] ?? null,
        ]);

        return response()->json([
            'message' => 'नोंदणी यशस्वी झाली!',
            'registration' => $registration
        ], 201);
    }
}
