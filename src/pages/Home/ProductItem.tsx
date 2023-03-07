import { Product } from "@/shared/Products";
import styles from "@/styles/Home.module.css";

interface ProductItemProps {
  product: Product;
}

export function ProductItem({ product }: ProductItemProps) {
  return (
    <div className={styles.productItem}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <b>Price: {product.price.toFixed(2)}</b>
    </div>
  );
}
