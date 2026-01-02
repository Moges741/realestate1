import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// let's connect to the database
dotenv.config();

const connectDB = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    console.log('Database connected successfully');
    return connection;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
};
// how to check if it works
connectDB();

export default connectDB;