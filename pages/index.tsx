import axios from "axios";
import { isProductsList } from "@/src/utils/product";
import { HomePage } from "@/src/pages/Home";
import { ProductsList } from "@/shared/Products";
import { Layout } from "@/src/components/Layout";

export interface HomeProps {
  products: ProductsList;
}

export default function Home(props: HomeProps) {
  return (
    <Layout>
      <HomePage products={props.products} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await axios("http://localhost:3000/api/products");
  let products: ProductsList;
  if (isProductsList(res.data)) {
    products = res.data as ProductsList;
  } else {
    products = { items: [] };
  }
  return {
    props: {
      products,
    },
  };
}
