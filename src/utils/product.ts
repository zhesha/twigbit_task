import { Product, ProductsList } from "@/shared/Products";

export function isProduct(obj: any): obj is Product {
  return (
    obj &&
    typeof obj.id === "number" &&
    typeof obj.name === "string" &&
    typeof obj.price === "number" &&
    typeof obj.description === "string"
  );
}

export function isProductsList(obj: any): obj is ProductsList {
  if (obj.items) {
    return obj.items.every((item: any) => isProduct(item));
  }
  return false;
}
