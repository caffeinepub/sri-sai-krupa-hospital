export interface ProductItem {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  imageUrl: string;
  unit: string;
}

export const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "Fruits & Veggies", label: "Fruits & Veggies" },
  { id: "Dairy & Eggs", label: "Dairy & Eggs" },
  { id: "Snacks", label: "Snacks" },
  { id: "Meat & Seafood", label: "Meat & Seafood" },
  { id: "Bakery", label: "Bakery" },
  { id: "Pantry", label: "Pantry" },
];

export const PRODUCTS: ProductItem[] = [
  // Fruits & Veggies
  {
    id: 1,
    name: "Organic Apples",
    description:
      "Crisp, sweet organic apples freshly picked from Himachal Pradesh farms.",
    category: "Fruits & Veggies",
    price: 120,
    rating: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&q=80",
    unit: "per kg",
  },
  {
    id: 2,
    name: "Fresh Bananas",
    description:
      "Perfectly ripe yellow bananas, rich in potassium and natural energy.",
    category: "Fruits & Veggies",
    price: 40,
    rating: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80",
    unit: "per dozen",
  },
  {
    id: 3,
    name: "Sweet Alphonso Mangoes",
    description:
      "Premium Alphonso mangoes from Ratnagiri, India's finest variety.",
    category: "Fruits & Veggies",
    price: 180,
    rating: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&q=80",
    unit: "per kg",
  },
  {
    id: 4,
    name: "Juicy Oranges",
    description:
      "Seedless Nagpur oranges bursting with vitamin C and sweet citrus flavor.",
    category: "Fruits & Veggies",
    price: 90,
    rating: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1547514701-42782101795e?w=400&q=80",
    unit: "per kg",
  },
  // Dairy & Eggs
  {
    id: 5,
    name: "Full Cream Milk",
    description:
      "Farm-fresh full cream milk, pasteurized and packed daily for purity.",
    category: "Dairy & Eggs",
    price: 65,
    rating: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80",
    unit: "per liter",
  },
  {
    id: 6,
    name: "Greek Yogurt",
    description:
      "Thick, creamy Greek yogurt with live cultures. High protein, low sugar.",
    category: "Dairy & Eggs",
    price: 85,
    rating: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80",
    unit: "200g",
  },
  {
    id: 7,
    name: "Cheddar Cheese",
    description:
      "Aged cheddar with sharp, tangy flavor. Perfect for sandwiches and cooking.",
    category: "Dairy & Eggs",
    price: 220,
    rating: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&q=80",
    unit: "200g block",
  },
  {
    id: 8,
    name: "Farm Fresh Eggs",
    description:
      "Free-range eggs from happy hens. Rich yolks and nutritious protein.",
    category: "Dairy & Eggs",
    price: 95,
    rating: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&q=80",
    unit: "12 pcs",
  },
  // Snacks
  {
    id: 9,
    name: "Potato Chips",
    description:
      "Light, crispy chips with a perfect crunch. Classic salted flavor.",
    category: "Snacks",
    price: 35,
    rating: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&q=80",
    unit: "100g pack",
  },
  {
    id: 10,
    name: "Granola Bar",
    description:
      "Wholesome oat and honey granola bar. Ideal for a quick, healthy snack.",
    category: "Snacks",
    price: 55,
    rating: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=400&q=80",
    unit: "pack of 3",
  },
  {
    id: 11,
    name: "Mixed Nuts",
    description:
      "Premium blend of almonds, cashews, walnuts and pistachios. No added salt.",
    category: "Snacks",
    price: 180,
    rating: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&q=80",
    unit: "250g",
  },
  {
    id: 12,
    name: "Dark Chocolate",
    description:
      "70% cocoa dark chocolate. Antioxidant-rich and intensely flavorful.",
    category: "Snacks",
    price: 120,
    rating: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400&q=80",
    unit: "100g bar",
  },
  // Meat & Seafood
  {
    id: 13,
    name: "Chicken Breast",
    description:
      "Boneless, skinless chicken breast. Antibiotic-free and freshly packed.",
    category: "Meat & Seafood",
    price: 280,
    rating: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&q=80",
    unit: "500g",
  },
  {
    id: 14,
    name: "Atlantic Salmon",
    description: "Fresh Atlantic salmon fillets, rich in omega-3 fatty acids.",
    category: "Meat & Seafood",
    price: 450,
    rating: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80",
    unit: "per 400g",
  },
  // Bakery
  {
    id: 15,
    name: "Whole Wheat Bread",
    description:
      "Freshly baked whole wheat bread. High fiber, no artificial preservatives.",
    category: "Bakery",
    price: 45,
    rating: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80",
    unit: "400g loaf",
  },
  {
    id: 16,
    name: "Butter Croissants",
    description:
      "Flaky, golden croissants with rich buttery layers. Baked fresh daily.",
    category: "Bakery",
    price: 85,
    rating: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80",
    unit: "pack of 4",
  },
  // Pantry
  {
    id: 17,
    name: "Basmati Rice",
    description:
      "Aged long-grain basmati rice from Punjab. Aromatic and fluffy when cooked.",
    category: "Pantry",
    price: 120,
    rating: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80",
    unit: "1 kg",
  },
  {
    id: 18,
    name: "Extra Virgin Olive Oil",
    description:
      "Cold-pressed Mediterranean olive oil. Perfect for cooking and salads.",
    category: "Pantry",
    price: 450,
    rating: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80",
    unit: "500ml",
  },
];
