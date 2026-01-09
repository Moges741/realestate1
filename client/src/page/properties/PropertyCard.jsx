// src/components/PropertyCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PropertyCard.module.css';

const PropertyCard = ({ property }) => {
  const formattedPrice = new Intl.NumberFormat('en-ET', {
    style: 'currency',
    currency: 'ETB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <div className={styles.card}>
      <Link to={`/property/${property.id}`} className={styles.linkWrapper}>
        {/* Image Container */}
        <div className={styles.imageContainer}>
          <img
            src={property.mainImage}
            alt={property.name}
            className={styles.image}
          />
          <div className={styles.overlay}>
            <span className={styles.viewText}>View Details →</span>
          </div>
          <div className={styles.badge}>For Sale</div>
        </div>

        {/* Content */}
        <div className={styles.content}>
          <h3 className={styles.title}>{property.name}</h3>

          <p className={styles.location}>
            <svg className={styles.locationIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {property.location}
          </p>

          <p className={styles.description}>{property.description}</p>

          {/* Features */}
          <div className={styles.features}>
            <div className={styles.feature}>
              <svg className={styles.featureIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
              </svg>
              <span>{property.numberOfBed} Beds</span>
            </div>
            <div className={styles.feature}>
              <svg className={styles.featureIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>{property.numberOfbathRoom} Baths</span>
            </div>
          </div>

          {/* Price */}
          <div className={styles.priceContainer}>
            <p className={styles.price}>{formattedPrice}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;