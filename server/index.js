// src/index.js
import express from 'express';
import cors from 'cors';
import pool from './DB/createDb.js';
import propertiesRouter from './routes/properties.js';

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ UPDATED CORS: Allow both development and production
const allowedOrigins = [
  'http://localhost:5173',  // Local development
  'http://localhost:3000',  // Another common dev port
  'https://your-frontend-domain.onrender.com', // Add your frontend Render URL here
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
}));

// Or simpler: Allow all origins (for now, while testing)
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
    <p style="text-align: center; font-family: sans-serif; color: #666;">
      Backend URL: https://realestate1-3gfg.onrender.com
    </p>
  `);
});

// Start server
const startServer = async () => {
  try {
    await pool.getConnection();
    console.log('MySQL connection pool ready');

    app.listen(PORT, () => {
      console.log(`🚀 Backend running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();