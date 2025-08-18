-- Admin User Setup Queries for Nayiumang NGO
-- Run these queries directly in your PostgreSQL database

-- 1. Create a Super Admin user
INSERT INTO admin_users (
    id,
    username,
    email,
    password,
    full_name,
    role,
    status,
    created_at,
    updated_at
) VALUES (
    gen_random_uuid(),
    'superadmin',
    'https.azure@gmail.com',
    'PRao19@01', -- Replace with a secure password
    'Super Administrator',
    'Super Admin',
    'active',
    NOW(),
    NOW()
);

-- 2. Create a regular Admin user
INSERT INTO admin_users (
    id,
    username,
    email,
    password,
    full_name,
    role,
    status,
    created_at,
    updated_at
) VALUES (
    gen_random_uuid(),
    'admin',
    'https.azure@gmail.com',
    'PRao19@01', -- Replace with a secure password
    'Administrator',
    'Admin',
    'active',
    NOW(),
    NOW()
);

-- 3. Create a Content Manager user
INSERT INTO admin_users (
    id,
    username,
    email,
    password,
    full_name,
    role,
    status,
    created_at,
    updated_at
) VALUES (
    gen_random_uuid(),
    'contentmanager',
    'https.azure@gmail.com',
    'PRao19@01', -- Replace with a secure password
    'Content Manager',
    'Content Manager',
    'active',
    NOW(),
    NOW()
);

-- 4. View all admin users (to verify)
SELECT 
    id,
    username,
    email,
    full_name,
    role,
    status,
    created_at
FROM admin_users
ORDER BY created_at DESC;

-- 5. Update admin user password (if needed)
-- UPDATE admin_users 
-- SET password = 'new_secure_password_here', updated_at = NOW()
-- WHERE username = 'admin';

-- 6. Deactivate an admin user (if needed)
-- UPDATE admin_users 
-- SET status = 'inactive', updated_at = NOW()
-- WHERE username = 'contentmanager';

-- 7. Delete an admin user (if needed)
-- DELETE FROM admin_users WHERE username = 'contentmanager';
