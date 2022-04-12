import ProductGrid from '../components/ProductGrid';
import { commerce } from '../lib/commerce';
import React from "react";
import Head from "next/head";

import Hero from '../components/Hero';
import FeaturedSection from '../components/FeaturedSection';

export async function getStaticProps() {
    const merchant = await commerce.merchants.about();
    const {children: categories} = await commerce.categories.retrieve('wood', { type: 'slug' })
    console.log(categories[0].assets[0].url)
    const { data } = await commerce.products.list();
    const products = data.filter(({ active }) => active);
    
  
    return {
      props: {
        products,
        categories,
      },
      revalidate: 60,
    };
}

export default function HomePage({ products, categories }) {

    return (
        <>
            <Hero />
            <FeaturedSection products={products} category="Kitchen" />
            <FeaturedSection products={products} category="Home Decor" />
            {/* <div>{categories}</div> */}
            <ProductGrid categories={categories} />
        </>
    )
}