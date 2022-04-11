import Image from "next/image";
import Link from "next/link";


export default function Product({ media, name, permalink, price }) {
    console.log(media)
    return (
        <Link href={`/products/${permalink}`}>
            <a className="">
                { 
                    media?.source && (
                        <div className="">
                            <Image
                              src={media.source}
                              alt={Product.name}
                              width={400}
                              height={600}
                            />
                        </div>
                    )
                }
                <div className="">
                    <span>{name}</span>
                    <span>{price.formatted_with_symbol}</span>
                </div>
            </a>
        </Link>
    )
}