<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\URL;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Configure for Azure App Service
        $this->configureForAzure();
    }

    /**
     * Configure application for Azure App Service
     */
    private function configureForAzure(): void
    {
        // Detect if running on Azure App Service or production
        if ($this->isAzureAppService()) {
            // Force HTTPS for all URLs
            URL::forceScheme('https');
        }
    }

    /**
     * Check if running on Azure App Service
     */
    private function isAzureAppService(): bool
    {
        return !empty($_SERVER['WEBSITE_SITE_NAME']) ||
               !empty($_SERVER['HTTP_X_FORWARDED_PROTO']) ||
               config('app.env') === 'production';
    }
}
