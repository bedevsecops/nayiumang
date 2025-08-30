<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ForceHttps
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Check if we're in production and not using HTTPS
        $isSecure = $request->secure() ||
                   $request->header('X-Forwarded-Proto') === 'https' ||
                   $request->header('X-Forwarded-SSL') === 'on' ||
                   $request->header('X-Azure-HTTPS') === 'on';

        // Force HTTPS in production environment (but not in local development)
        if (!$isSecure && (app()->environment('production') || config('app.force_https', false))) {
            $secureUrl = 'https://' . $request->getHost() . $request->getRequestUri();
            return redirect($secureUrl, 301);
        }

        return $next($request);
    }
}
