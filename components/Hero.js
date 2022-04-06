import Link from "next/link";
import Image from "next/image";
import HeroImage from "./MountainHero.svg"

export default function Hero() {
  return (
    <section className="mt-20 md:flex md:flex-row">
      <div className="flex flex-col justify-center items-center md:w-2/5">
        <h2 className="font-serif text-5xl text-indigo-900  mb-4 text-center md:self-start md:text-left">
          Quality handmade wooden crafts made in Asheville, NC.
        </h2>
        <p className="uppercase text-indigo-900 tracking-wide text-center md:self-start md:text-left">
          Our brand tagline goes here
        </p>{" "}
        <p className="uppercase text-indigo-900 tracking-wide text-center md:self-start md:text-left">
          Our brand motto goes here
        </p>
        <Link href="/shop" passHref>
            <a className="bg-gradient-to-r from-green-400 to-cyan-600 rounded-full py-4 my-4 px-8 text-slate-200 uppercase text-xl md:self-start">
                Shop Crafts
            </a>
        </Link>
      </div>
      <div className="md:w-3/5">
          <HeroImage />
      </div>
    </section>
  );
}
