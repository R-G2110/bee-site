// constants.ts:
export const FEATURES = [
  { src: '/assets/icons/organic.svg',
    label: '100% Organic',
    overview: 'Our honey is harvested from organic beehives without the use of chemicals or pesticides.',
  },
  { src: '/assets/icons/logistics.svg',
    label: 'Free Shipping',
    overview: 'Free shipping on all orders over $50. We deliver straight to your doorstep.',
  },
  { src: '/assets/icons/certified.svg',
    label: 'Quality Guarantee',
    overview: "If you're not satisfied with our products, we offer a 30-day money-back guarantee.",
  },
];

export const NAV_LINKS = [
  { path: 'product-catalog', label: 'Shop' },
  { path: 'about', label: 'About Us' },
  { path: 'process', label: 'Our Process' },
  { path: 'team', label: 'Our Team' },
  { path: 'contacts', label: 'Contacts' },

];

export const REVIEWS = [
  {
    ratings: 4.5,
    overview: "This honey exceeded my expectations! It has a beautifully rich flavor with just the right amount of sweetness. I love using it in my morning tea, on toast, or even as a natural sweetener for baking. You can tell it's high quality—pure, raw, and packed with nutrients. The texture is smooth, and it has a delightful floral aroma. It’s clear that a lot of care goes into making this honey. I’ll definitely be buying more. Highly recommended!",
    name: 'Sarah Johnson',
    label: 'Loyal Customer'
  },
  {
    ratings: 4.8,
    overview: "This honey is absolutely amazing! The flavor is rich and natural, with a perfect balance of sweetness. You can really taste the difference compared to store-bought honey—this one is pure, raw, and full of goodness. I love drizzling it over yogurt, adding it to my tea, or just enjoying a spoonful on its own. The texture is smooth, and it has a wonderful floral aroma. Definitely my go-to honey from now on! Highly recommended!",
    name: 'Michael Brown',
    label: 'Loyal Customer'
  },
  {
    ratings: 5,
    overview: "The honeycomb is out of this world! I've been looking for authentic, raw honeycomb for ages and finally found it. The customer service was excellent too - fast shipping and great communication.",
    name: 'Emma Davis',
    label: 'Loyal Customer'
  },
  {
    ratings: 5,
    overview: "I recently tried this honey, and I must say, it’s one of the best I’ve ever had! The texture is smooth, the flavor is rich and natural, and you can really taste the quality. It’s perfect for sweetening tea, drizzling over yogurt, or even enjoying by the spoonful. What I love most is that it’s raw and unfiltered, preserving all the natural benefits. You can truly tell it comes from well-cared-for bees. I highly recommend it to anyone looking for premium honey. Definitely a five-star product!",
    name: 'Emily Catherine Fournier',
    label: 'Loyal Customer'
  },
];

export const TEAM = [
  {
    position: 'hex1',
    name: 'Mario Rossi',
    role: 'Chief Beekeeper',
    motto: 'Passion for bees is in my DNA.'
  },
  {
    position: 'hex2',
    name: 'Laura Bianchi',
    role: 'Quality Manager',
    motto: 'Only the best for our customers.'
  },
  {
    position: 'hex3',
    name: 'Giuseppe Verdi',
    role: 'Marketing Manager',
    motto: 'Innovation and passion for the future.'
  },
  {
    position: 'hex4',
    name: 'Anna Neri',
    role: 'Expert of Honey',
    motto: 'Customer satisfaction is our top priority.'
  },
  {
    position: 'hex5',
    name: 'Marco Gialli',
    role: 'Sales Manager',
    motto: 'Nature and tradition in every product.'
  },
  {
    position: 'hex6',
    name: 'Sofia Blu',
    role: 'Beekeeping Technician',
    motto: 'Care and attention for each hive.'
  },
];

export const FOOTER = {
  socials: [
    { label: 'facebook', path: 'fa-facebook-f'},
    { label: 'instagram', path: 'fa-instagram'},
    { label: 'x twitter', path: 'fa-x-twitter'},
    { label: 'pinterest', path: 'fa-pinterest-p'},
    { label: 'tiktok', path: 'fa-tiktok'},
    { label: 'youtube', path: 'fa-youtube'},
  ],
  quick_links: [
    { fragment: 'home', label: 'Home' },
    { fragment: 'product-catalog', label: 'Shop' },
    { fragment: 'about', label: 'About Us' },
    { fragment: 'process', label: 'Our Process' },
    { fragment: 'team', label: 'Our Team' },
    { fragment: 'contacts', label: 'Contacts' },
  ],
  products: [
    { label: 'Raw Honey', filter: 'Raw Honey'},
    { label: 'Infused Honey', filter: 'Infused Honey'},
    { label: 'Floreal Honey', filter: 'Floreal Honey'},
    { label: 'Exotic Honey', filter: 'Exotic Honey'},
    { label: 'Honeycomb', filter: 'Honeycomb'},
    { label: 'Gift set', filter: 'Gift set'},
  ],
  contacts: [
    {label: 'address', value: '123 Honey Lane, Beeville, CA 90210', icon: 'fa-solid fa-location-dot'},
    {label: 'phone', value: '(555) 123-4567', icon: 'fa-solid fa-phone'},
    {label: 'email', value: 'info@honeyhive.com', icon: 'fa-regular fa-envelope'},
    {label: 'working hours', value: 'Mon-Fri: 9:00 - 17:00', icon: 'fa-regular fa-clock'},
  ]
}


