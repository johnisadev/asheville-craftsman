import { commerce } from "../../lib/commerce";
import Head from "next/head";


export async function getStaticProps({ params }) {
    const { permalink } = params;
    const product = await commerce.products.retrieve(permalink, {
        type: "permalink",
    });

    return {
        props: {
            product,
        },
        revalidate:  60,
    };
}

export async function getStaticPaths() {
    const { data: products } = await commerce.products.list();

    return {
        paths: products.map(({ permalink }) => ({
            params: {
                permalink,
            },
        })),
        fallback: false,
    }
}

export default function ProductPage({ product }) {

    return (
        <>
            <Head>
                <title>{product.seo.title}</title>
                <meta name="description" content={product.seo.description}></meta>
            </Head>

            <div className="md:min-h-screen md:flex md:items-center">
                <h1>
                    {product.name}
                </h1>
                <div dangerouslySetInnerHTML={{ __html: product.description}} />
            </div>
        </>
    )
}