export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export interface ProductsList {
  items: Array<Product>;
}
