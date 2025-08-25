export type Product = {
  price: number;
  originalPrice: number;
  description: string | null;
  name: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  categoryId: string;
  discountPercent: number;
  imageUrl: string | null;
  rating: number;
  stock: number;
};
