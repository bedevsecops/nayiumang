<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Azure App Service Configuration
    |--------------------------------------------------------------------------
    |
    | Configuration settings specific to Azure App Service deployment
    |
    */

    'force_https' => env('AZURE_FORCE_HTTPS', env('APP_ENV') === 'production'),
    
    'trusted_proxies' => [
        '*', // Trust all proxies for Azure App Service
    ],
    
    'trusted_headers' => [
        'X-Forwarded-For',
        'X-Forwarded-Host', 
        'X-Forwarded-Port',
        'X-Forwarded-Proto',
        'X-Azure-HTTPS',
    ],
];
