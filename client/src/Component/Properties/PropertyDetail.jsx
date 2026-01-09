// // src/pages/PropertyDetail.jsx
// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import propertiesData from '../Home/Data/propertiesData.js';
// import styles from './propertiesdetail.module.css';

// const PropertyDetail = () => {
//   const { id } = useParams();
//   const property = propertiesData.find((p) => p.id === id);

//   if (!property) {
//     return (
//       <div className={styles.notFound}>
//         <h2>Property not found</h2>
//         <Link to="/">← Back to Listings</Link>
//       </div>
//     );
//   }

//   const { mainImage, subImages = [], name, location, description, price, numberOfBed, numberOfbathRoom } = property;

//   const formattedPrice = new Intl.NumberFormat('en-ET', {
//     style: 'currency',
//     currency: 'ETB',
//     minimumFractionDigits: 0,
//   }).format(price);

//   return (
//     <div className={styles.container}>
//       <div className={styles.inner}>
//         {/* Back Button */}
//         <Link to="/" className={styles.backLink}>
//           ← Back to Properties
//         </Link>

//         {/* Main Image */}
//         <div className={styles.mainImageWrapper}>
//           <img src={mainImage} alt={name} className={styles.mainImage} />
//         </div>

//         {/* Sub Images Gallery */}
//         {subImages.length > 0 && (
//           <div className={styles.subGallery}>
//             {subImages.slice(0, 3).map((img, index) => (  // Show up to 3 sub images
//               <div key={index} className={styles.subImageWrapper}>
//                 <img src={img} alt={`${name} - view ${index + 1}`} className={styles.subImage} />
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Property Info */}
//         <div className={styles.infoSection}>
//           <h1 className={styles.title}>{name}</h1>

//           <p className={styles.location}>
//             <svg className={styles.locationIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//             </svg>
//             {location}
//           </p>

//           <div className={styles.price}>{formattedPrice}</div>

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

//           {/* Full Description */}
//           <div className={styles.descriptionSection}>
//             <h2 className={styles.descriptionTitle}>Description</h2>
//             <p className={styles.description}>{description}</p>
//           </div>

//           {/* Call to Action */}
//           <div className={styles.cta}>
//             <button className={styles.contactButton}>Contact Agent</button>
//             <button className={styles.saveButton}>♡ Save Property</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyDetail;