import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Product {
    id: bigint;
    categoryId: string;
    name: string;
    unit: string;
    imageUrl: string;
    price: bigint;
}
export interface Category {
    id: string;
    name: string;
    emoji: string;
}
export interface backendInterface {
    getCategories(): Promise<Array<Category>>;
    getProducts(): Promise<Array<Product>>;
    getProductsByCategory(categoryId: string): Promise<Array<Product>>;
}
