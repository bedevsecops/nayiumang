<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Registration;

class DashboardController extends Controller
{
    public function index()
    {
        $totalRegistrations = Registration::count();
        $recentRegistrations = Registration::latest()->take(10)->get();
        $registrationsByMonth = Registration::selectRaw('MONTH(created_at) as month, COUNT(*) as count')
            ->whereYear('created_at', date('Y'))
            ->groupBy('month')
            ->pluck('count', 'month');

        return view('admin.dashboard', compact('totalRegistrations', 'recentRegistrations', 'registrationsByMonth'));
    }

    public function registrations(Request $request)
    {
        $query = Registration::query();

        if ($request->has('search') && $request->search) {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%")
                  ->orWhere('phone', 'like', "%{$search}%");
            });
        }

        $registrations = $query->latest()->paginate(20);

        return view('admin.registrations', compact('registrations'));
    }

    public function showRegistration($id)
    {
        $registration = Registration::findOrFail($id);
        return view('admin.registration-detail', compact('registration'));
    }

    public function deleteRegistration($id)
    {
        $registration = Registration::findOrFail($id);
        $registration->delete();

        return redirect()->back()->with('success', 'Registration deleted successfully.');
    }
}
