import product_mock from "./product_mock.json";

interface Product {
  id?: number;
  name: string;
  price: number;
  description: string;
}

// TODO get rid of `any` type
export default function handler(req: any, res: any) {
  product_mock.items.forEach(
    (item: Product, index: number) => (item.id = index)
  );
  res.status(200).json(product_mock);
}
