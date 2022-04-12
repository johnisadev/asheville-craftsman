import Link from "next/link";
import Image from "next/image";

export default function ProductGrid({ categories, ...props }) {
  // if(!categories || categories.length === 0) return null;
  // console.log(categories)

  return (
    <div className="grid grid-cols-2 grid-flow-row gap-2 md:grid-cols-3">
      {categories.map((category) => (
          
        <div className="" >
          <Link href="#" passHref>
            <a>
              <Image
                src={category.assets[0].url}
                alt={category.name}
                width={"300px"}
                height={"300px"}
                className="shadow-lg rounded-lg"
                />
                <span className="flex justify-self-center">{category.name}</span>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
