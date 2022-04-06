import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-6 lg:py-12">
      <div className=" container mx-auto px-3 md:px-4 lg:px-5 md:flex md:items-center space-y-6 md:space-y-0">
        <div className="w-full md:w-1/3">
          <Link href="/">
            <a title="return to home page">Home</a>
          </Link>
        </div>
        <div className="w-full md:w-1/3">
          <Link href="/shop">
            <a title="see all of our products">All products</a>
          </Link>
        </div>
        <div className="w-full md:w-1/3">
          <Link href="/contact">
            <a title="reach out to us">Contact</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
