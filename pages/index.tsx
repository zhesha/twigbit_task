import axios from "axios";
import { isProductsList } from "@/src/utils/product";
import { HomePage } from "@/src/pages/Home";
import { ProductsList } from "@/shared/Products";
import { Layout } from "@/src/components/Layout";
import { NextApiRequest } from "next";

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

export async function getServerSideProps(req: NextApiRequest) {
  let search = "";
  if (req.query.search) {
    search = ("?search=" + req.query.search) as string;
  }
  const res = await axios(`http://localhost:3000/api/products${search}`);
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
