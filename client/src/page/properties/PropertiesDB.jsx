// src/pages/Properties.jsx
import React, { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard.jsx';
import styles from './Properties.module.css';

const PropertiesDB = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        console.log('Fetching properties from backend...');
        const VITE_API_URL = import.meta.env.VITE_API_URL;
        const response = await fetch(`${VITE_API_URL}/api/properties` || `https://realestate1-3gfg.onrender.com/api/properties`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Backend response:', result);

        if (result.success && Array.isArray(result.data)) {
          setProperties(result.data);
        } else {
          throw new Error(result.message || 'Invalid response format');
        }
      } catch (err) {
        console.error('Fetch error:', err);
        setError('Failed to load properties. Make sure backend is running on port 5000.');
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
        <p className={styles.loadingText}>Loading properties from database...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <h2 className={styles.errorTitle}>⚠️ Unable to load properties</h2>
        <p className={styles.errorMessage}>{error}</p>
        <div className={styles.errorActions}>
          <button 
            onClick={() => window.location.reload()} 
            className={styles.retryButton}
          >
            🔄 Retry
          </button>
          <p className={styles.backendCheck}>
            Make sure backend is running: <code>http://localhost:5000/api/properties</code>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h1 className={styles.mainTitle}>
            Featured Properties in Addis Ababa
          </h1>
          <p className={styles.subTitle}>
            Discover {properties.length} premium homes from our database
          </p>
        </header>

        {properties.length === 0 ? (
          <div className={styles.emptyState}>
            <p className={styles.emptyMessage}>No properties found in database</p>
            <p className={styles.backendHint}>
              Check http://localhost:5000/api/properties in your browser
            </p>
          </div>
        ) : (
          <div className={styles.grid}>
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertiesDB;