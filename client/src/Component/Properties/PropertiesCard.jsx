// // src/components/PropertyCard.jsx
// import React from 'react';
// import styles from './propertiescard.module.css';
// import { Link } from 'react-router-dom';

// const PropertyCard = ({ property }) => {
//   const {
//     mainImage,
//     name,
//     location,
//     price,
//     numberOfBed,
//     numberOfbathRoom,
//   } = property;

//   const formattedPrice = new Intl.NumberFormat('en-ET', {
//     style: 'currency',
//     currency: 'ETB',
//     minimumFractionDigits: 0,
//   }).format(price);

//   return (
//     <div className={styles.card}>
//       <div className={styles.imageWrapper}>
//         <img src={mainImage} alt={name} className={styles.mainImage} />
//         <div className={styles.badge}>For Sale</div>
//       </div>

//       <div className={styles.content}>
//         <div>
//           <h3 className={styles.title}>{name}</h3>

//           <p className={styles.location}>
//             <svg className={styles.locationIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//             </svg>
//             {location}
//           </p>

//           {/* Description removed – will be shown only on detail page */}

//           <div className={styles.features}>
//             <div className={styles.feature}>
//               <svg className={styles.featureIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m-8 0h2m-2 0h-2" />
//               </svg>
//               <span>{numberOfBed} Bedrooms</span>
//             </div>
//             <div className={styles.feature}>
//               <svg className={styles.featureIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21v-6a2 2 0 00-2-2H7a2 2 0 00-2 2v6m14 0h2m-2 0h-5m-9 0H3m17-8V9a2 2 0 00-2-2H7a2 2 0 00-2 2v4" />
//               </svg>
//               <span>{numberOfbathRoom} Bathrooms</span>
//             </div>
//           </div>
//         </div>

//         <div className={styles.footer}>
//           <p className={styles.price}>{formattedPrice}</p>
//        <Link to={`/property/${property.id}`} className={styles.button}>
//   View Details
// </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyCard;