// // src/sql/setup.js
// import pool from '../DB/createDb.js';

// export const initializeDatabase = async () => {
//   try {
//     // Test connection
//     const connection = await pool.getConnection();
//     console.log('MySQL pool connection successful');
//     connection.release(); // Release back to pool

//     // Create table with correct format
//     const createTableQuery = `
//       CREATE TABLE IF NOT EXISTS properties (
//         id VARCHAR(10) PRIMARY KEY,
//         mainImage TEXT NOT NULL,
//         subImages JSON NOT NULL,
//         name VARCHAR(255) NOT NULL,
//         location VARCHAR(255) NOT NULL,
//         description TEXT NOT NULL,
//         price BIGINT NOT NULL,
//         numberOfBed INT NOT NULL,
//         numberOfbathRoom INT NOT NULL,
//         createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
//         updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
//       ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
//     `;

//     await pool.execute(createTableQuery);
//     console.log('✅ Table "properties" created or already exists with correct format');

//     console.log('Database initialization complete (table only)');

//   } catch (error) {
//     console.error('❌ Error during database initialization:', error.message);
//     console.error('Full error:', error);
//   }
// };