import type { Product } from "../context/CartContext";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Fresh Red Apples",
    category: "Fresh Fruits",
    price: 149,
    originalPrice: 199,
    unit: "1 kg",
    discount: 25,
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&q=80",
  },
  {
    id: 2,
    name: "Ripe Bananas",
    category: "Fresh Fruits",
    price: 49,
    originalPrice: 59,
    unit: "6 pcs",
    discount: 17,
    image:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80",
  },
  {
    id: 3,
    name: "Farm Tomatoes",
    category: "Vegetables",
    price: 39,
    originalPrice: 49,
    unit: "500g",
    discount: 20,
    image:
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&q=80",
  },
  {
    id: 4,
    name: "Baby Spinach",
    category: "Vegetables",
    price: 59,
    originalPrice: 79,
    unit: "200g",
    discount: 25,
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&q=80",
  },
  {
    id: 5,
    name: "Full Cream Milk",
    category: "Dairy & Eggs",
    price: 89,
    originalPrice: 89,
    unit: "1 litre",
    discount: 0,
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80",
  },
  {
    id: 6,
    name: "Farm Fresh Eggs",
    category: "Dairy & Eggs",
    price: 99,
    originalPrice: 120,
    unit: "12 pcs",
    discount: 17,
    image:
      "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=400&q=80",
  },
  {
    id: 7,
    name: "Whole Wheat Bread",
    category: "Bakery",
    price: 55,
    originalPrice: 65,
    unit: "400g",
    discount: 15,
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80",
  },
  {
    id: 8,
    name: "Fresh Orange Juice",
    category: "Beverages",
    price: 120,
    originalPrice: 150,
    unit: "1 litre",
    discount: 20,
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=80",
  },
  {
    id: 9,
    name: "Potato Chips",
    category: "Snacks",
    price: 30,
    originalPrice: 35,
    unit: "50g",
    discount: 14,
    image:
      "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&q=80",
  },
  {
    id: 10,
    name: "Chicken Breast",
    category: "Meat & Fish",
    price: 249,
    originalPrice: 299,
    unit: "500g",
    discount: 17,
    image:
      "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&q=80",
  },
  {
    id: 11,
    name: "Alphonso Mango",
    category: "Fresh Fruits",
    price: 299,
    originalPrice: 399,
    unit: "1 kg",
    discount: 25,
    image:
      "https://images.unsplash.com/photo-1591073113125-e46713c829ed?w=400&q=80",
  },
  {
    id: 12,
    name: "Fresh Broccoli",
    category: "Vegetables",
    price: 79,
    originalPrice: 99,
    unit: "500g",
    discount: 20,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&q=80",
  },
];

export const CATEGORIES = [
  { name: "All", emoji: "🛍️" },
  { name: "Fresh Fruits", emoji: "🍎" },
  { name: "Vegetables", emoji: "🥦" },
  { name: "Dairy & Eggs", emoji: "🥛" },
  { name: "Bakery", emoji: "🍞" },
  { name: "Beverages", emoji: "🧃" },
  { name: "Snacks", emoji: "🍿" },
  { name: "Meat & Fish", emoji: "🍗" },
  { name: "Frozen", emoji: "🧊" },
  { name: "Organic", emoji: "🌿" },
  { name: "Personal Care", emoji: "🧴" },
];
