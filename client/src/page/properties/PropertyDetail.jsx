// src/pages/PropertyDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './PropertyDetail.module.css';

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/properties/${id}`);

        if (!response.ok) {
          throw new Error('Property not found');
        }

        const result = await response.json();

        if (result.success) {
          setProperty(result.data); // ← FIXED!
        } else {
          setError(result.message || 'Failed to load property');
        }
      } catch (err) {
        setError('Unable to load property details. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return <div className={styles.loading}>Loading property details...</div>;
  }

  if (error || !property) {
    return (
      <div className={styles.error}>
        <h2>Property Not Found</h2>
        <p>{error || 'This property does not exist.'}</p>
        <Link to="/properties" className={styles.backBtn}>← Back to Properties</Link>
      </div>
    );
  }

  const formattedPrice = new Intl.NumberFormat('en-ET', {
    style: 'currency',
    currency: 'ETB',
    minimumFractionDigits: 0,
  }).format(property.price);

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Link to="/properties" className={styles.backLink}>
          ← Back to Properties
        </Link>

        <div className={styles.mainImageWrapper}>
          <img src={property.mainImage} alt={property.name} className={styles.mainImage} />
        </div>

        {property.subImages && property.subImages.length > 0 && (
          <div className={styles.gallery}>
            {property.subImages.map((img, index) => (
              <div key={index} className={styles.galleryItem}>
                <img src={img} alt={`${property.name} - ${index + 1}`} />
              </div>
            ))}
          </div>
        )}

        <div className={styles.info}>
          <h1 className={styles.title}>{property.name}</h1>

          <p className={styles.location}>
            <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {property.location}
          </p>

          <p className={styles.price}>{formattedPrice}</p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <svg className={styles.featureIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m-8 0h2m-2 0h-2" />
              </svg>
              <span>{property.numberOfBed} Bedrooms</span>
            </div>
            <div className={styles.feature}>
              <svg className={styles.featureIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21v-6a2 2 0 00-2-2H7a2 2 0 00-2 2v6m14 0h2m-2 0h-5m-9 0H3m17-8V9a2 2 0 00-2-2H7a2 2 0 00-2 2v4" />
              </svg>
              <span>{property.numberOfbathRoom} Bathrooms</span>
            </div>
          </div>

          <div className={styles.descriptionSection}>
            <h2 className={styles.sectionTitle}>Description</h2>
            <p className={styles.description}>{property.description}</p>
          </div>

          <div className={styles.actions}>
            <button className={styles.bookBtn}>Book The Property</button>
            <button className={styles.saveBtn}>♡ Save Property</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;