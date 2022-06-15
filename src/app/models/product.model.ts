export interface Product {
  _id: string; // or string
  title: string;
  description: string;
  price: number;
  images?: Array<string>;
  image?: string;
  category: {} | string;
  rating?: object;
}

export interface CreateProductDTO extends Omit<Product, 'id'> {}

export interface fetchProductsPagination {
  allProducts: [];
  limit: 0;
  offset: 0;
  total: 0;
}
