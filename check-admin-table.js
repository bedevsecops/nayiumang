const { Client } = require('pg');

// Database connection configuration
const config = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'nayiumang',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'your_password',
};

async function checkAndCreateAdminTable() {
  const client = new Client(config);
  
  try {
    console.log('🔍 Checking database connection...');
    await client.connect();
    console.log('✅ Connected to database successfully!');
    
    // Check if admin_users table exists
    console.log('🔍 Checking if admin_users table exists...');
    const tableCheck = await client.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'admin_users'
      );
    `);
    
    const tableExists = tableCheck.rows[0].exists;
    
    if (tableExists) {
      console.log('✅ admin_users table already exists!');
      
      // Check if table has any data
      const countResult = await client.query('SELECT COUNT(*) FROM admin_users');
      const count = parseInt(countResult.rows[0].count);
      console.log(`📊 Found ${count} admin users in the table`);
      
      if (count === 0) {
        console.log('📝 Table is empty. You can run the admin setup queries now.');
      } else {
        console.log('📋 Current admin users:');
        const users = await client.query('SELECT username, email, full_name, role FROM admin_users');
        users.rows.forEach(user => {
          console.log(`  - ${user.username} (${user.role}) - ${user.email}`);
        });
      }
    } else {
      console.log('❌ admin_users table does not exist');
      console.log('🔧 Creating admin_users table...');
      
      // Create the admin_users table
      await client.query(`
        CREATE TABLE admin_users (
          id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
          username TEXT NOT NULL UNIQUE,
          email TEXT NOT NULL UNIQUE,
          password TEXT NOT NULL,
          full_name TEXT NOT NULL,
          role TEXT NOT NULL,
          status TEXT NOT NULL DEFAULT 'active',
          created_at TIMESTAMP DEFAULT NOW(),
          updated_at TIMESTAMP DEFAULT NOW()
        );
      `);
      
      console.log('✅ admin_users table created successfully!');
      console.log('📝 You can now run the admin setup queries to add admin users.');
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.log('\n📝 Please check your database configuration:');
    console.log('- DB_HOST:', config.host);
    console.log('- DB_PORT:', config.port);
    console.log('- DB_NAME:', config.database);
    console.log('- DB_USER:', config.user);
    console.log('- DB_PASSWORD:', config.password ? '***' : 'not set');
    
    console.log('\n💡 To set up your database connection, you can:');
    console.log('1. Create a .env file with your database credentials');
    console.log('2. Or set environment variables: DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD');
  } finally {
    await client.end();
  }
}

// Run the check
checkAndCreateAdminTable();

