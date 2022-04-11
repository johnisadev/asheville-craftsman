import Link from "next/link";
import Image from "next/image";



export default function FeaturedSection({ products, category }) {

  const filteredProducts = products.filter(product => {
    //   mapping through all categories doesnt work with the filter
    //   return product.categories.reduce(categoryObj => categoryObj.name === 'Kitchen')
      return product.categories[0].name === category
  })

  return (
    <section className="my-20">
      <div className="flex flex-row justify-between my-5">
        <h2 className="text-3xl">{category}</h2>
        <Link href="#" passHref>
          <a className="flex flex-row text-lg haver:text-green-400">
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-5 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </Link>
      </div>

      <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
        {filteredProducts.map(({ media, name, permalink, price }) => (
          <div className="shadow-lg rounded-lg">
            <Link href={`/products/${permalink}`} passHref>
              <a>
                {media?.source && (
                  <Image
                    src={media.source}
                    alt={name}
                    width="400px"
                    height="500px"
                    className="rounded-tl-lg rounded-tr-lg"
                  />
                )}
              </a>
            </Link>
            <div className="p-5">
              <h3>
                <Link href={`/products/${permalink}`} passHref>
                  <a>{name}</a>
                </Link>
              </h3>
              <span>{price.formatted_with_symbol}</span>
              <div class="flex flex-col xl:flex-row justify-between">
                <a
                  class="bg-gradient-to-r from-green-600 to-indigo-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-green-600 hover:from-indigo-600 hover:to-green-600 flex flex-row justify-center"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Add to cart
                </a>
                <Link href={`/products/${permalink}`} passHref>
                  <a class="bg-indigo-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-indigo-700 flex flex-row justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    View Details
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
