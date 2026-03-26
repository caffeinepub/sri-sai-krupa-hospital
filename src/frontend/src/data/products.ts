import type { FashionProduct } from "../context/CartContext";

export const PRODUCTS: FashionProduct[] = [
  {
    id: 1,
    name: "Silk Evening Dress",
    category: "Women",
    price: 4999,
    originalPrice: 4999,
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80",
    colors: ["#2B2B2B", "#8B0000", "#1C3A5E"],
    isNew: true,
    isSale: false,
  },
  {
    id: 2,
    name: "Cashmere Wrap Coat",
    category: "Women",
    price: 7499,
    originalPrice: 9999,
    image:
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&q=80",
    colors: ["#C4A882", "#2B2B2B", "#4A4A4A"],
    isNew: false,
    isSale: true,
  },
  {
    id: 3,
    name: "Floral Midi Dress",
    category: "Women",
    price: 3299,
    originalPrice: 3299,
    image:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80",
    colors: ["#F5C6C6", "#B8D4C8", "#E8D5B7"],
    isNew: true,
    isSale: false,
  },
  {
    id: 4,
    name: "Tailored Blazer",
    category: "Women",
    price: 4499,
    originalPrice: 5999,
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",
    colors: ["#2B2B2B", "#6B6B6B", "#C9A84C"],
    isNew: false,
    isSale: true,
  },
  {
    id: 5,
    name: "Classic Oxford Shirt",
    category: "Men",
    price: 2499,
    originalPrice: 2499,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80",
    colors: ["#FFFFFF", "#C4D4E8", "#E8C4C4"],
    isNew: true,
    isSale: false,
  },
  {
    id: 6,
    name: "Wool Overcoat",
    category: "Men",
    price: 8999,
    originalPrice: 8999,
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
    colors: ["#4A3728", "#2B2B2B", "#6B6B6B"],
    isNew: true,
    isSale: false,
  },
  {
    id: 7,
    name: "Slim Chinos",
    category: "Men",
    price: 2999,
    originalPrice: 3999,
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80",
    colors: ["#C4A882", "#4A4A4A", "#1C3A5E"],
    isNew: false,
    isSale: true,
  },
  {
    id: 8,
    name: "Merino Sweater",
    category: "Men",
    price: 3499,
    originalPrice: 3499,
    image:
      "https://images.unsplash.com/photo-1614975059251-992f11792b9f?w=600&q=80",
    colors: ["#C9A84C", "#2B2B2B", "#8B4513"],
    isNew: false,
    isSale: false,
  },
  {
    id: 9,
    name: "Leather Tote Bag",
    category: "Accessories",
    price: 5999,
    originalPrice: 5999,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    colors: ["#4A3728", "#2B2B2B", "#C4A882"],
    isNew: true,
    isSale: false,
  },
  {
    id: 10,
    name: "Gold Chain Necklace",
    category: "Accessories",
    price: 2999,
    originalPrice: 2999,
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
    colors: ["#C9A84C", "#C0C0C0"],
    isNew: false,
    isSale: false,
  },
  {
    id: 11,
    name: "Silk Scarf",
    category: "Accessories",
    price: 1799,
    originalPrice: 1799,
    image:
      "https://images.unsplash.com/photo-1601924921557-45e6dea0a157?w=600&q=80",
    colors: ["#8B0000", "#1C3A5E", "#C9A84C"],
    isNew: false,
    isSale: false,
  },
  {
    id: 12,
    name: "Chelsea Boots",
    category: "Accessories",
    price: 6499,
    originalPrice: 7999,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    colors: ["#2B2B2B", "#4A3728"],
    isNew: false,
    isSale: true,
  },
];

export const CATEGORIES = ["All", "Women", "Men", "Accessories", "Sale"];
