import ProductGrid from '../components/ProductGrid';
import { commerce } from '../lib/commerce';
import React from "react";
import Head from "next/head";

export async function getStaticProps() {

    const { data } = await commerce.products.list();
  
    const products = data.filter(({ active }) => active);
  
    return {
      props: {
        products,
      },
      revalidate: 60,
    };
  }

export default function HomePage({ products }) {

    return (
        <>
            <h1>HomePage</h1>
            <ProductGrid products={products} className="h-112 md:h-96 xl:h-112" />
        </>
    )
}