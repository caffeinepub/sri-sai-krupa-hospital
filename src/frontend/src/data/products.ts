import type { GroceryProduct } from "../context/CartContext";

export const PRODUCTS: GroceryProduct[] = [
  {
    id: 1,
    name: "Bananas",
    category: "Fruits",
    price: 40,
    image:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80",
  },
  {
    id: 2,
    name: "Apples",
    category: "Fruits",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&q=80",
  },
  {
    id: 3,
    name: "Carrots",
    category: "Vegetables",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&q=80",
  },
  {
    id: 4,
    name: "Spinach",
    category: "Vegetables",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&q=80",
  },
  {
    id: 5,
    name: "Farm Fresh Eggs",
    category: "Dairy",
    price: 80,
    image:
      "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&q=80",
  },
  {
    id: 6,
    name: "Whole Milk",
    category: "Dairy",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80",
  },
  {
    id: 7,
    name: "Potato Chips",
    category: "Snacks",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&q=80",
  },
  {
    id: 8,
    name: "Cookies",
    category: "Snacks",
    price: 99,
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&q=80",
  },
  {
    id: 9,
    name: "Orange Juice",
    category: "Beverages",
    price: 75,
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=80",
  },
  {
    id: 10,
    name: "Green Tea",
    category: "Beverages",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80",
  },
  {
    id: 11,
    name: "Sourdough Bread",
    category: "Bakery",
    price: 110,
    image:
      "https://images.unsplash.com/photo-1585478259715-876acc5be8eb?w=400&q=80",
  },
  {
    id: 12,
    name: "Croissant",
    category: "Bakery",
    price: 55,
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80",
  },
];

export const CATEGORIES = [
  "All",
  "Fruits",
  "Vegetables",
  "Dairy",
  "Snacks",
  "Beverages",
  "Bakery",
];
