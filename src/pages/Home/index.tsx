import { ProductsList } from "@/shared/Products";
import styles from "@/styles/Home.module.css";
import { ProductItem } from "./ProductItem";
import { Search } from "./Search";

interface HomePageProps {
  products: ProductsList;
}

export function HomePage({ products }: HomePageProps) {
  return (
    <div className={styles.description}>
      <h1>Products</h1>
      <Search />
      {products.items.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
