import { Product } from "@/shared/Products";
import product_mock from "./product_mock.json";
import { NextApiRequest, NextApiResponse } from "next";

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
type ResponseProduct = Optional<Product, "id">;

product_mock.items.forEach(
  (item: ResponseProduct, index: number) => (item.id = index)
);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let items;
  if (req.query.search) {
    const search = req.query.search as string;
    items = product_mock.items.filter(
      (item: ResponseProduct) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase())
    );
  } else {
    items = product_mock.items;
  }
  res.status(200).json({ items });
}
