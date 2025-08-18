const { Client } = require('pg');
const fs = require('fs');

// Database connection configuration
const config = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'nayiumang',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'your_password',
};

async function setupAdminUsers() {
  const client = new Client(config);
  
  try {
    console.log('Connecting to database...');
    await client.connect();
    console.log('Connected successfully!');
    
    // Read the SQL file
    const sqlContent = fs.readFileSync('admin-setup.sql', 'utf8');
    
    // Split the SQL content into individual queries
    const queries = sqlContent
      .split(';')
      .map(query => query.trim())
      .filter(query => query.length > 0 && !query.startsWith('--'));
    
    console.log(`Found ${queries.length} queries to execute`);
    
    // Execute each query
    for (let i = 0; i < queries.length; i++) {
      const query = queries[i];
      if (query.trim()) {
        console.log(`Executing query ${i + 1}...`);
        try {
          await client.query(query);
          console.log(`✅ Query ${i + 1} executed successfully`);
        } catch (error) {
          console.error(`❌ Error in query ${i + 1}:`, error.message);
        }
      }
    }
    
    console.log('\n🎉 Admin setup completed!');
    
    // Verify the setup by fetching admin users
    console.log('\n📋 Current admin users:');
    const result = await client.query(`
      SELECT username, email, full_name, role, status, created_at 
      FROM admin_users 
      ORDER BY created_at DESC
    `);
    
    result.rows.forEach(user => {
      console.log(`- ${user.username} (${user.role}) - ${user.email}`);
    });
    
  } catch (error) {
    console.error('❌ Database connection error:', error.message);
    console.log('\n📝 Please check your database configuration:');
    console.log('- DB_HOST:', config.host);
    console.log('- DB_PORT:', config.port);
    console.log('- DB_NAME:', config.database);
    console.log('- DB_USER:', config.user);
    console.log('- DB_PASSWORD:', config.password ? '***' : 'not set');
  } finally {
    await client.end();
  }
}

// Run the setup
setupAdminUsers();

