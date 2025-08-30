<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Admin extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'is_active',
        'password_reset_token',
        'password_reset_expires_at',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'is_active' => 'boolean',
            'password_reset_expires_at' => 'datetime',
        ];
    }

    /**
     * Generate a password reset token
     */
    public function generatePasswordResetToken()
    {
        $this->password_reset_token = bin2hex(random_bytes(32));
        $this->password_reset_expires_at = now()->addHours(1); // Token expires in 1 hour
        $this->save();

        return $this->password_reset_token;
    }

    /**
     * Check if password reset token is valid
     */
    public function isValidPasswordResetToken($token)
    {
        return $this->password_reset_token === $token &&
               $this->password_reset_expires_at &&
               $this->password_reset_expires_at->isFuture();
    }

    /**
     * Clear password reset token
     */
    public function clearPasswordResetToken()
    {
        $this->password_reset_token = null;
        $this->password_reset_expires_at = null;
        $this->save();
    }
}
