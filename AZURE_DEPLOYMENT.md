# Azure App Service Deployment Guide

## 🔧 Required Azure App Service Configuration

### 1. Application Settings (Environment Variables)

Add these in Azure Portal > App Service > Configuration > Application Settings:

```
APP_ENV=production
APP_DEBUG=false
APP_URL=https://your-app-name.azurewebsites.net
AZURE_FORCE_HTTPS=true
```

### 2. HTTPS Configuration

#### Option A: Azure Portal Configuration
1. Go to Azure Portal > App Service > TLS/SSL settings
2. Enable "HTTPS Only" toggle
3. Set minimum TLS version to 1.2

#### Option B: Azure CLI
```bash
az webapp update --resource-group your-resource-group --name your-app-name --https-only true
```

### 3. Custom Domain with SSL (Optional)

If using custom domain:
1. Add custom domain in Azure Portal
2. Add SSL certificate
3. Update APP_URL to your custom domain

```
APP_URL=https://yourdomain.com
```

## 🚀 Deployment Steps

### 1. Deploy Code
- Use Azure DevOps, GitHub Actions, or direct deployment
- Ensure `web.config` is included in deployment

### 2. Configure Database
```
DB_CONNECTION=mysql
DB_HOST=your-mysql-server.mysql.database.azure.com
DB_PORT=3306
DB_DATABASE=your-database
DB_USERNAME=your-username
DB_PASSWORD=your-password
```

### 3. Run Migrations
```bash
php artisan migrate --force
php artisan db:seed --class=AdminSeeder --force
```

## 🔍 Troubleshooting

### If still getting "not secure" warning:

1. **Check HTTPS Only Setting**
   - Ensure "HTTPS Only" is enabled in Azure Portal

2. **Verify Environment Variables**
   - APP_ENV should be "production"
   - APP_URL should use https://

3. **Clear Application Cache**
   ```bash
   php artisan config:clear
   php artisan cache:clear
   php artisan route:clear
   ```

4. **Check Application Logs**
   - View logs in Azure Portal > App Service > Log stream

### Common Issues:

- **Mixed Content**: Ensure all assets use HTTPS
- **Proxy Headers**: Azure App Service uses X-Forwarded-Proto
- **Cache Issues**: Clear Laravel cache after deployment

## 📝 Verification

After deployment, verify:
1. Visit https://your-app.azurewebsites.net/admin
2. Check that HTTP redirects to HTTPS
3. Verify no security warnings in browser
4. Test admin login functionality

## 🔒 Security Headers

The following security headers are automatically added:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- Strict-Transport-Security: max-age=31536000; includeSubDomains
