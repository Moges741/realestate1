// src/routes/properties.js
import express from 'express';
import pool from '../DB/createDb.js';

const propertiesRouter = express.Router();

// Helper function to safely parse JSON
const safeJsonParse = (jsonString) => {
  if (!jsonString) return [];
  if (typeof jsonString === 'object') return jsonString; // Already parsed (rare case)
  
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.warn('Invalid JSON in subImages:', jsonString);
    return [];
  }
};

// GET all properties
propertiesRouter.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM properties ORDER BY createdAt DESC');

    const properties = rows.map(row => ({
      id: row.id,
      mainImage: row.mainImage || '',
      subImages: safeJsonParse(row.subImages),
      name: row.name || 'Unnamed Property',
      location: row.location || '',
      description: row.description || 'No description available',
      price: Number(row.price) || 0,
      numberOfBed: row.numberOfBed || 0,
      numberOfbathRoom: row.numberOfbathRoom || 0,
      createdAt: row.createdAt,
      updatedAt: row.updatedAt,
    }));

    res.status(200).json({
      success: true,
      count: properties.length,
      data: properties
    });

  } catch (error) {
    console.error('CRITICAL ERROR in GET /api/properties:', error);
    res.status(500).json({
      success: false,
      message: 'Database query failed',
      error: error.message
    });
  }
});

// GET single property
propertiesRouter.get('/:id', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM properties WHERE id = ?', [req.params.id]);

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Property not found'
      });
    }

    const row = rows[0];
    const property = {
      id: row.id,
      mainImage: row.mainImage || '',
      subImages: safeJsonParse(row.subImages),
      name: row.name || 'Unnamed Property',
      location: row.location || '',
      description: row.description || 'No description available',
      price: Number(row.price) || 0,
      numberOfBed: row.numberOfBed || 0,
      numberOfbathRoom: row.numberOfbathRoom || 0,
    };

    res.status(200).json({
      success: true,
      data: property
    });

  } catch (error) {
    console.error('Error fetching single property:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch property',
      error: error.message
    });
  }
});

export default propertiesRouter;