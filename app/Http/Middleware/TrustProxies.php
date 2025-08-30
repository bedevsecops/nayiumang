<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class TrustProxies
{
    /**
     * The trusted proxies for this application.
     *
     * @var array<int, string>|string|null
     */
    protected $proxies = ['*'];

    /**
     * The headers that should be used to detect proxies.
     *
     * @var int
     */
    protected $headers =
        Request::HEADER_X_FORWARDED_FOR |
        Request::HEADER_X_FORWARDED_HOST |
        Request::HEADER_X_FORWARDED_PORT |
        Request::HEADER_X_FORWARDED_PROTO;

    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $request->setTrustedProxies($this->proxies(), $this->headers());

        return $next($request);
    }

    /**
     * Get the trusted proxies.
     *
     * @return array<int, string>|string|null
     */
    protected function proxies()
    {
        // Ensure we always return an array for setTrustedProxies
        if ($this->proxies === '*') {
            return ['*'];
        }

        return $this->proxies;
    }

    /**
     * Get the trusted headers.
     *
     * @return int
     */
    protected function headers()
    {
        return $this->headers;
    }
}
