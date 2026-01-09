// // src/pages/Properties.jsx or src/components/Properties.jsx
// import React from 'react';
// import PropertyCard from './PropertiesCard.jsx';
// import propertiesData from '../Home/Data/propertiesData.js';
// import styles from './properties.module.css'; // Adjust path if needed

// const Properties = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.inner}>
//         <header className={styles.header}>
//           <h1 className={styles.mainTitle}>Featured Properties</h1>
//           <p className={styles.subTitle}>
//             Explore our handpicked selection of premium homes in Addis Ababa. 
//             Find your perfect apartment, villa, or family house today.
//           </p>
//         </header>

//         <div className={styles.grid}>
//           {propertiesData.map((property) => (
//             <PropertyCard key={property.id} property={property} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Properties;