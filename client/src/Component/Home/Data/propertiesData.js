const propertiesData = [
  {
    id: "p1",
    mainImage: "https://media.vrbo.com/lodging/115000000/114820000/114819900/114819855/f6f50a19.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    subImages: [
      "https://media.vrbo.com/lodging/115000000/114820000/114819900/114819855/f7fce428.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
      "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/631361724.jpg?k=c38ae9d8a3dde31f208bd8769bb09860986f6daea6ed38a19f26bf2ca1d51a54&o=",
      "https://www.betoch.et/wp-content/uploads/2024/12/Bole-Washington-Clinic-Luxury-Apartment-2.jpg"
    ],
    name: "Luxury Apartment",
    location: "Bole, Addis Ababa",
    description:
      "A modern luxury apartment located in the heart of Bole with easy access to shopping centers and main roads.",
    price: 2500000,
    numberOfBed: 3,
    numberOfbathRoom: 2,
  },
  {
    id: "p2",
    mainImage: "https://ethiopiarealty.com/wp-content/uploads/2024/09/Spacious-Villa-in-Wossen-Hillside-with-5-Bedrooms-%E2%80%93-NIG-001.jpg",
    subImages: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/478994110.jpg?k=62692085050da90e5e900f18f00c5f1a40af53c2d3b079460eb049ef7c0f5411&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/478993859.jpg?k=f8cdadbceaa63623efcd956e4ca60ed52a138865d5d281e44a5e57ed23e03542&o=",
      "https://a0.muscache.com/im/pictures/miso/Hosting-846523299238258779/original/4532a744-d99a-47e0-ae69-c36d9111932d.jpeg?im_w=720"
    ],
    name: "Family Villa",
    location: "CMC, Addis Ababa",
    description:
      "Spacious family villa with a private garden, perfect for large families and long-term living.",
    price: 4500000,
    numberOfBed: 5,
    numberOfbathRoom: 4,
  },
  {
    id: "p3",
    mainImage: "https://a0.muscache.com/im/pictures/hosting/Hosting-1236849384481086772/original/7a65deb1-a0cf-4d6c-985c-d30aa37205ad.jpeg",
    subImages: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-709424233055774872/original/b3d1814a-f79e-4ad8-b4be-2dd4737b79ce.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1236849384481086772/original/6d505430-a021-405b-a16c-631abd4dc43b.jpeg?im_w=720",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/631609443.jpg?k=3a162a46eda2d48fc040f1d2b3de90d033e7b5914f3d7e18c452b85659ea7640&o="
    ],
    name: "Modern Studio",
    location: "Kazanchis, Addis Ababa",
    description:
      "Affordable modern studio apartment ideal for students and young professionals.",
    price: 1200000,
    numberOfBed: 1,
    numberOfbathRoom: 1,
  },
  {
    id: "p4",
    mainImage: "https://www.ethiopianproperties.com/wp-content/uploads/2021/03/D93DB6FF-9291-4DF5-923C-BFDC72EEA973.jpeg",
    subImages: [
      "https://ethiopiarealty.com/wp-content/uploads/2023/09/G1-house-for-sale-in-addis-ababa.jpg",
      "https://zegebeya.com/wp-content/uploads/2022/01/IMG_20220125_142115_920.jpg",
      "https://images.ethiopiapropertycentre.com/properties/images/8848/068f7a8e9a678b-luxury-house-in-addis-ababa-ethiopia-for-sale-ayat-addis-ababa.png"
    ],
    name: "Elegant Townhouse",
    location: "Ayat, Addis Ababa",
    description:
      "Beautiful townhouse with contemporary design, spacious rooms, and a small garden area.",
    price: 3800000,
    numberOfBed: 4,
    numberOfbathRoom: 3,
  },
  {
    id: "p5",
    mainImage: "https://realethio.com/wp-content/uploads/2024/08/6-bedrooms-g2b-furnished-house-for-rent-cmc-addis-ababa-ethiopia-1170x748.jpg",
    subImages: [
      "https://www.betbegara.com/wp-content/uploads/2023/08/YA-Real-Estate-compound-view-4-584x438.webp",
      "https://realethio.com/wp-content/uploads/2025/06/3br-furnished-apartment-for-sale-lebu-haile-garment-addis-ababa-ethiopia-584x438.jpg",
      "https://shegahome.com/storage/properties/addis-abeba-ethiopia-1.jpg"
    ],
    name: "Premium Penthouse",
    location: "Summit, Addis Ababa",
    description:
      "Exclusive penthouse with panoramic views, high-end finishes, and rooftop terrace.",
    price: 5500000,
    numberOfBed: 4,
    numberOfbathRoom: 3,
  },
  {
    id: "p6",
    mainImage: "https://ethiopiarealty.com/wp-content/uploads/2022/11/villa-for-sale-addis-ababa-ethiopia-image-1.jpg",
    subImages: [
      "https://d1nbov8v9tbmnu.cloudfront.net/1742538621210.webp",
      "https://realethio.com/wp-content/uploads/2024/12/6br-g3-house-for-sale-mekanisa-addis-ababa-ethiopia-584x438.jpg",
      "https://i.ytimg.com/vi/qkbaxx9yqpo/maxresdefault.jpg"
    ],
    name: "Grand Villa",
    location: "Lebu, Addis Ababa",
    description:
      "Magnificent grand villa featuring multiple living areas, pool, and extensive grounds.",
    price: 8000000,
    numberOfBed: 6,
    numberOfbathRoom: 5,
  },
  {
    id: "p7",
    mainImage: "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=1159031939761293",
    subImages: [
      "https://images.ethiopiapropertycentre.com/properties/images/thumbs/8315/06861873a34b22-modern-25-bedrooms-furnished-apartment-bole-for-rent-bole-addis-ababa.jpg",
      "https://images.trvl-media.com/lodging/103000000/102390000/102383800/102383744/29444bb5.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
      "https://images.trvl-media.com/lodging/24000000/23040000/23033900/23033880/55368660.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
    ],
    name: "Executive Apartment",
    location: "Megenagna, Addis Ababa",
    description:
      "Sophisticated executive apartment with gym access and modern amenities.",
    price: 3200000,
    numberOfBed: 3,
    numberOfbathRoom: 2,
  },
  {
    id: "p8",
    mainImage: "https://a0.muscache.com/im/pictures/4ac2fa8a-7fe5-47e5-beb3-3df2823f2734.jpg",
    subImages: [
      "https://images.ethiopiapropertycentre.com/properties/images/thumbs/3532/0650b43ac292aa-modern-apartment-with-abundant-natural-light-available-in-bole-for-rent-bole-addis-ababa.jpg",
      "https://realethio.com/wp-content/uploads/2023/03/lideta-furnished-studio-apartment-for-rent-addis-ababa-1-960x785.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/641125783.jpg?k=59fcf9c69c88dbbe579b61d6e1bee2d7f37db6814131ecaf95836e6c70441425&o="
    ],
    name: "Cozy Studio Suite",
    location: "Sarbet, Addis Ababa",
    description:
      "Compact and cozy studio suite, fully furnished for comfortable urban living.",
    price: 950000,
    numberOfBed: 1,
    numberOfbathRoom: 1,
  },
  {
    id: "p9",
    mainImage: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/705085710.jpg?k=d6565e769c337881d3cf550e4c090134cf8353822478074ad18f9004556cd3fa&o=",
    subImages: [
      "https://media.vrbo.com/lodging/93000000/92030000/92027400/92027379/5e1e89fb.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
      "https://zegebeya.com/wp-content/uploads/2020/06/IMG_20200529_133527_701-1240x720.jpg",
      "https://media.vrbo.com/lodging/100000000/99930000/99927100/99927023/9840272d.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
    ],
    name: "Modern Family Home",
    location: "Jemo, Addis Ababa",
    description:
      "Well-designed modern family home with ample space and family-friendly features.",
    price: 4200000,
    numberOfBed: 4,
    numberOfbathRoom: 3,
  },
  {
    id: "p10",
    mainImage: "https://metropolitanaddis.com/wp-content/uploads/2023/07/Picture1.png",
    subImages: [
      "https://menetsir.com/cdn/shop/products/image_cfbbbc01-1ac8-4b40-a4a8-44cc4a723924_960x566.jpg?v=1615041451",
      "https://ethiopiarealty.com/wp-content/uploads/2022/11/real-estate-for-sale-cmc-addis-ababa-ethiopia-image.jpg",
      "https://metropolitanaddis.com/wp-content/uploads/2018/01/Guide-to-finding.jpg"
    ],
    name: "Luxury Duplex",
    location: "Old Airport, Addis Ababa",
    description:
      "Stylish luxury duplex offering privacy, high ceilings, and premium fittings.",
    price: 6000000,
    numberOfBed: 5,
    numberOfbathRoom: 4,
  },
];

export default propertiesData;