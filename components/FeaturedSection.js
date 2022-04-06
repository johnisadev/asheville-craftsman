import Link from "next/link";
import Image from "next/image";

export default function FeaturedSection({ featuredProducts, heading }) {
    return (
        <section className="my-20">
            <div className="flex flex-row justify-between my-5">
                <h2 className="text-3xl">Kitchen</h2>
                <Link href="#" passHref>
                    <a className="flex flex-row text-lg haver:text-green-400">
                        View All
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </Link>
            </div>

            <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
                <div className="shadow-lg rounded-lg">
                    <Link href="#" passHref>
                        <a>
                            <Image src="https://via.placeholder.com/400" width="400px" height="600px" className="rounded-tl-lg rounded-tr-lg" />
                        </a>
                    </Link>
                    <div className="p-5">
                        <h3>
                            <Link href="#" passHref>
                                <a>Product Name</a>
                            </Link>
                        </h3>
                        <span>$420.69</span>
                        <div class="flex flex-col xl:flex-row justify-between">
                            <a class="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Add to cart
                            </a>
                            <a class="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                            View Details
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}