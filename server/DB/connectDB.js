// src/db/connection.js
import pool from './createDb.js';

const connectDB = async () => {
  try {
    // Test pool connection
    await pool.getConnection();
    console.log('MySQL Pool connected successfully');
    return pool;
  } catch (error) {
    console.error('Error connecting to MySQL Pool:', error.message);
    throw error;
  }
};

export default connectDB;