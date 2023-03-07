import { Product } from "@/shared/Products";
import product_mock from "./product_mock.json";

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
type ResponseProduct = Optional<Product, 'id'>;

// TODO get rid of `any` type
export default function handler(req: any, res: any) {
  product_mock.items.forEach(
    (item: ResponseProduct, index: number) => (item.id = index)
  );
  res.status(200).json(product_mock);
}
