// src/index.js (UPDATED - FULL FILE)
import express from 'express';
import cors from 'cors';
import pool from './DB/createDb.js';
import propertiesRouter from './routes/properties.js';
import { initializeDatabase } from './sql/data.js';

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ FIXED CORS: Allow Vite frontend (port 5173)
app.use(cors({
  origin: 'http://localhost:5173',  // Your React/Vite app
  credentials: true,                // If you use cookies later
}));

// Alternative during development (allow any origin):
// app.use(cors());

app.use(express.json());

// Routes
app.use('/api/properties', propertiesRouter);

// Home route
app.get('/', (req, res) => {
  res.send(`
    <h1 style="font-family: sans-serif; text-align: center; margin-top: 100px;">
      🏠 Real Estate API is Running!
    </h1>
    <p style="text-align: center; font-family: sans-serif;">
      <a href="/api/properties" style="color: #3b82f6; font-size: 1.2rem;">
        → View all properties (JSON)
      </a>
    </p>
  `);
});

// Start server
const startServer = async () => {
  try {
    await pool.getConnection();
    console.log('MySQL connection pool ready');

    await initializeDatabase();
    console.log('Database table ready');

    app.listen(PORT, () => {
      console.log(`🚀 Backend running on http://localhost:${PORT}`);
      console.log(`✅ CORS enabled for http://localhost:5173`);
      console.log(`📡 Test API: http://localhost:${PORT}/api/properties`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();