// types/Product.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  occasion: string;
  description: string;
  image: string;
  discount?: number;
}