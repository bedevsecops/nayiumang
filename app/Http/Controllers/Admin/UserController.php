<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    public function index(Request $request)
    {
        // Check if current user is super admin
        if (Auth::guard('admin')->user()->role !== 'super_admin') {
            abort(403, 'Access denied. Super admin privileges required.');
        }

        $query = Admin::query();

        if ($request->has('search') && $request->search) {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%");
            });
        }

        $users = $query->latest()->paginate(20);

        return view('admin.users.index', compact('users'));
    }

    public function create()
    {
        // Check if current user is super admin
        if (Auth::guard('admin')->user()->role !== 'super_admin') {
            abort(403, 'Access denied. Super admin privileges required.');
        }

        return view('admin.users.create');
    }

    public function store(Request $request)
    {
        // Check if current user is super admin
        if (Auth::guard('admin')->user()->role !== 'super_admin') {
            abort(403, 'Access denied. Super admin privileges required.');
        }

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:admins',
            'password' => 'required|string|min:8|confirmed',
            'role' => 'required|in:admin,super_admin',
            'is_active' => 'boolean',
        ]);

        Admin::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role,
            'is_active' => $request->boolean('is_active', true),
        ]);

        return redirect()->route('admin.users.index')->with('success', 'Admin user created successfully.');
    }

    public function show($id)
    {
        // Check if current user is super admin
        if (Auth::guard('admin')->user()->role !== 'super_admin') {
            abort(403, 'Access denied. Super admin privileges required.');
        }

        $user = Admin::findOrFail($id);
        return view('admin.users.show', compact('user'));
    }

    public function edit($id)
    {
        // Check if current user is super admin
        if (Auth::guard('admin')->user()->role !== 'super_admin') {
            abort(403, 'Access denied. Super admin privileges required.');
        }

        $user = Admin::findOrFail($id);
        return view('admin.users.edit', compact('user'));
    }

    public function update(Request $request, $id)
    {
        // Check if current user is super admin
        if (Auth::guard('admin')->user()->role !== 'super_admin') {
            abort(403, 'Access denied. Super admin privileges required.');
        }

        $user = Admin::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => ['required', 'string', 'email', 'max:255', Rule::unique('admins')->ignore($user->id)],
            'password' => 'nullable|string|min:8|confirmed',
            'role' => 'required|in:admin,super_admin',
            'is_active' => 'boolean',
        ]);

        $updateData = [
            'name' => $request->name,
            'email' => $request->email,
            'role' => $request->role,
            'is_active' => $request->boolean('is_active', true),
        ];

        if ($request->filled('password')) {
            $updateData['password'] = Hash::make($request->password);
        }

        $user->update($updateData);

        return redirect()->route('admin.users.index')->with('success', 'Admin user updated successfully.');
    }

    public function destroy($id)
    {
        // Check if current user is super admin
        if (Auth::guard('admin')->user()->role !== 'super_admin') {
            abort(403, 'Access denied. Super admin privileges required.');
        }

        $user = Admin::findOrFail($id);

        // Prevent deleting self
        if ($user->id === Auth::guard('admin')->id()) {
            return redirect()->back()->with('error', 'You cannot delete your own account.');
        }

        $user->delete();

        return redirect()->route('admin.users.index')->with('success', 'Admin user deleted successfully.');
    }

    public function toggleStatus($id)
    {
        // Check if current user is super admin
        if (Auth::guard('admin')->user()->role !== 'super_admin') {
            abort(403, 'Access denied. Super admin privileges required.');
        }

        $user = Admin::findOrFail($id);

        // Prevent deactivating self
        if ($user->id === Auth::guard('admin')->id()) {
            return redirect()->back()->with('error', 'You cannot deactivate your own account.');
        }

        $user->is_active = !$user->is_active;
        $user->save();

        $status = $user->is_active ? 'activated' : 'deactivated';
        return redirect()->back()->with('success', "Admin user {$status} successfully.");
    }
}
