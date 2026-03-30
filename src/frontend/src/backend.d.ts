import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ShoppingCartItem {
    productId: bigint;
    quantity: bigint;
}
export type Time = bigint;
export interface Contact {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
}
export interface Order {
    deliveryAddress: string;
    user: Principal;
    deliverySlot: string;
    timestamp: Time;
    items: Array<ShoppingCartItem>;
}
export interface UserProfile {
    name: string;
}
export interface Product {
    name: string;
    description: string;
    imageUrl: string;
    category: string;
    rating: bigint;
    price: bigint;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addProduct(product: Product): Promise<bigint>;
    addToCart(productId: bigint, quantity: bigint): Promise<void>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    deleteProduct(productId: bigint): Promise<void>;
    getAllContacts(): Promise<Array<Contact>>;
    getAllProducts(): Promise<Array<Product>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getOrderHistory(): Promise<Array<Order>>;
    getProductsByCategory(category: string): Promise<Array<Product>>;
    getShoppingCart(): Promise<Array<ShoppingCartItem>>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    placeOrder(address: string, slot: string): Promise<void>;
    removeFromCart(productId: bigint): Promise<void>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    searchProducts(searchTerm: string): Promise<Array<Product>>;
    submitContact(name: string, email: string, msg: string): Promise<void>;
}
