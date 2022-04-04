import { commerce } from '../lib/commerce';

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
            <pre>{JSON.stringify(products, null, 2)}</pre>
        </>
    )
}