export interface ProductData {
  id: string;
  categoryId: string;
  name: string;
  price: number;
  originalPrice: number;
  unit: string;
  image: string;
  tag?: "best-seller" | "trending" | "low-stock";
}

export interface CategoryData {
  id: string;
  name: string;
  emoji: string;
}

export const CATEGORIES: CategoryData[] = [
  { id: "grocery", name: "Grocery Staples", emoji: "🌾" },
  { id: "snacks", name: "Snacks & Packaged Food", emoji: "🍿" },
  { id: "beverages", name: "Beverages", emoji: "🥤" },
  { id: "personal-care", name: "Personal Care", emoji: "🧴" },
  { id: "household", name: "Household Items", emoji: "🏠" },
];

export const PRODUCTS: ProductData[] = [
  // Grocery Staples
  {
    id: "g1",
    categoryId: "grocery",
    name: "Aashirvaad Atta",
    price: 265,
    originalPrice: 269,
    unit: "5kg bag",
    image: "/assets/generated/grocery-atta.dim_400x400.jpg",
    tag: "best-seller",
  },
  {
    id: "g2",
    categoryId: "grocery",
    name: "India Gate Basmati Rice",
    price: 499,
    originalPrice: 504,
    unit: "5kg bag",
    image: "/assets/generated/grocery-rice.dim_400x400.jpg",
  },
  {
    id: "g3",
    categoryId: "grocery",
    name: "Toor Dal",
    price: 130,
    originalPrice: 133,
    unit: "1kg",
    image: "/assets/generated/grocery-dal.dim_400x400.jpg",
    tag: "low-stock",
  },
  {
    id: "g4",
    categoryId: "grocery",
    name: "Fortune Sunflower Oil",
    price: 150,
    originalPrice: 154,
    unit: "1 litre",
    image: "/assets/generated/grocery-oil.dim_400x400.jpg",
  },
  {
    id: "g5",
    categoryId: "grocery",
    name: "MDH Mixed Masala",
    price: 85,
    originalPrice: 88,
    unit: "100g tin",
    image: "/assets/generated/grocery-masala.dim_400x400.jpg",
  },
  {
    id: "g6",
    categoryId: "grocery",
    name: "Tata Salt",
    price: 25,
    originalPrice: 27,
    unit: "1kg",
    image: "/assets/generated/grocery-salt.dim_400x400.jpg",
  },
  {
    id: "g7",
    categoryId: "grocery",
    name: "Sugar",
    price: 50,
    originalPrice: 52,
    unit: "1kg",
    image: "/assets/generated/grocery-sugar.dim_400x400.jpg",
  },

  // Snacks & Packaged Food
  {
    id: "s1",
    categoryId: "snacks",
    name: "Lay's Classic Chips",
    price: 20,
    originalPrice: 22,
    unit: "26g",
    image: "/assets/generated/snacks-chips.dim_400x400.jpg",
    tag: "trending",
  },
  {
    id: "s2",
    categoryId: "snacks",
    name: "Parle-G Biscuits",
    price: 10,
    originalPrice: 12,
    unit: "100g",
    image: "/assets/generated/snacks-biscuit.dim_400x400.jpg",
  },
  {
    id: "s3",
    categoryId: "snacks",
    name: "Haldiram's Bhujia",
    price: 60,
    originalPrice: 63,
    unit: "200g",
    image: "/assets/generated/snacks-bhujia.dim_400x400.jpg",
    tag: "best-seller",
  },
  {
    id: "s4",
    categoryId: "snacks",
    name: "Maggi Noodles",
    price: 14,
    originalPrice: 15,
    unit: "70g",
    image: "/assets/generated/snacks-maggi.dim_400x400.jpg",
  },
  {
    id: "s5",
    categoryId: "snacks",
    name: "Hide & Seek Cookies",
    price: 30,
    originalPrice: 33,
    unit: "120g",
    image: "/assets/generated/snacks-cookies.dim_400x400.jpg",
  },
  {
    id: "s6",
    categoryId: "snacks",
    name: "Pringles Original",
    price: 99,
    originalPrice: 103,
    unit: "107g",
    image: "/assets/generated/snacks-pringles.dim_400x400.jpg",
    tag: "trending",
  },

  // Beverages
  {
    id: "b1",
    categoryId: "beverages",
    name: "Coca-Cola",
    price: 95,
    originalPrice: 98,
    unit: "2 litre",
    image: "/assets/generated/bev-coke.dim_400x400.jpg",
  },
  {
    id: "b2",
    categoryId: "beverages",
    name: "Tata Tea Premium",
    price: 120,
    originalPrice: 124,
    unit: "250g",
    image: "/assets/generated/bev-tea.dim_400x400.jpg",
    tag: "best-seller",
  },
  {
    id: "b3",
    categoryId: "beverages",
    name: "Nescafe Classic",
    price: 310,
    originalPrice: 315,
    unit: "100g",
    image: "/assets/generated/bev-coffee.dim_400x400.jpg",
    tag: "low-stock",
  },
  {
    id: "b4",
    categoryId: "beverages",
    name: "Tropicana Orange Juice",
    price: 115,
    originalPrice: 119,
    unit: "1 litre",
    image: "/assets/generated/bev-juice.dim_400x400.jpg",
  },
  {
    id: "b5",
    categoryId: "beverages",
    name: "Red Bull Energy Drink",
    price: 125,
    originalPrice: 129,
    unit: "250ml",
    image: "/assets/generated/bev-redbull.dim_400x400.jpg",
    tag: "trending",
  },
  {
    id: "b6",
    categoryId: "beverages",
    name: "Bisleri Water",
    price: 20,
    originalPrice: 22,
    unit: "1 litre",
    image: "/assets/generated/bev-water.dim_400x400.jpg",
  },

  // Personal Care
  {
    id: "p1",
    categoryId: "personal-care",
    name: "Dove Soap Bar",
    price: 45,
    originalPrice: 48,
    unit: "100g",
    image: "/assets/generated/care-soap.dim_400x400.jpg",
  },
  {
    id: "p2",
    categoryId: "personal-care",
    name: "Head & Shoulders Shampoo",
    price: 225,
    originalPrice: 229,
    unit: "400ml",
    image: "/assets/generated/care-shampoo.dim_400x400.jpg",
    tag: "best-seller",
  },
  {
    id: "p3",
    categoryId: "personal-care",
    name: "Colgate Toothpaste",
    price: 70,
    originalPrice: 73,
    unit: "200g",
    image: "/assets/generated/care-toothpaste.dim_400x400.jpg",
  },
  {
    id: "p4",
    categoryId: "personal-care",
    name: "Gillette Mach3 Razor",
    price: 199,
    originalPrice: 204,
    unit: "1 pc",
    image: "/assets/generated/care-razor.dim_400x400.jpg",
    tag: "low-stock",
  },
  {
    id: "p5",
    categoryId: "personal-care",
    name: "Nivea Cream",
    price: 150,
    originalPrice: 154,
    unit: "200ml",
    image: "/assets/generated/care-cream.dim_400x400.jpg",
  },

  // Household Items
  {
    id: "h1",
    categoryId: "household",
    name: "Vim Dishwash Bar",
    price: 40,
    originalPrice: 43,
    unit: "500g",
    image: "/assets/generated/home-vim.dim_400x400.jpg",
  },
  {
    id: "h2",
    categoryId: "household",
    name: "Harpic Toilet Cleaner",
    price: 120,
    originalPrice: 124,
    unit: "500ml",
    image: "/assets/generated/home-harpic.dim_400x400.jpg",
  },
  {
    id: "h3",
    categoryId: "household",
    name: "Surf Excel Washing Powder",
    price: 210,
    originalPrice: 215,
    unit: "1kg",
    image: "/assets/generated/home-detergent.dim_400x400.jpg",
    tag: "best-seller",
  },
  {
    id: "h4",
    categoryId: "household",
    name: "Colin Glass Cleaner",
    price: 165,
    originalPrice: 169,
    unit: "500ml",
    image: "/assets/generated/home-colin.dim_400x400.jpg",
  },
  {
    id: "h5",
    categoryId: "household",
    name: "Good Knight Mosquito Repellent",
    price: 75,
    originalPrice: 78,
    unit: "1 refill",
    image: "/assets/generated/home-mosquito.dim_400x400.jpg",
    tag: "low-stock",
  },
];

export const WHATSAPP_NUMBER = "919999999999";
