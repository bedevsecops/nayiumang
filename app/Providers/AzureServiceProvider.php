<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\URL;

class AzureServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        // Force HTTPS for Azure App Service
        if (config('app.env') === 'production' || config('app.force_https', false)) {
            URL::forceScheme('https');
        }

        // Trust Azure App Service proxies
        $this->configureTrustedProxies();
    }

    /**
     * Configure trusted proxies for Azure App Service
     */
    private function configureTrustedProxies(): void
    {
        // Azure App Service uses these headers
        $trustedHeaderSet = [
            'HEADER_X_FORWARDED_FOR' => 'X-Forwarded-For',
            'HEADER_X_FORWARDED_HOST' => 'X-Forwarded-Host',
            'HEADER_X_FORWARDED_PORT' => 'X-Forwarded-Port',
            'HEADER_X_FORWARDED_PROTO' => 'X-Forwarded-Proto',
            'HEADER_X_FORWARDED_AWS_ELB' => null,
        ];

        // Set trusted proxies for Azure
        if (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
            request()->setTrustedProxies(['*'], array_values(array_filter($trustedHeaderSet)));
        }
    }
}
