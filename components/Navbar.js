import Link from "next/link";
import { CgShoppingCart } from "react-icons/cg";

export default function Navbar(props) {
  const { path } = props;

  return (
    <nav className="container mx-auto p-5">
      <div className="md:flex md:flex-row md:justify-between text-center text-sm sm:text-base">
        <div className="flex flex-row justify-center">
          <div className="bg-gradient-to-r from-indigo-900 to-emerald-500 w-10 h-10 rouonded-lg"></div>
          <h1 className="text-3xl text-indigo-900 ml-2">Asheville Craftsman</h1>
        </div>
        <div className="mt-2">
          <LinkItem href="/" path={path} className="text-indigo-900 hover:text-emerald-700 p-3 px-3 sm:px-4">
            Home
          </LinkItem>
          <LinkItem href="/shop" path={path} className="text-indigo-900 hover:text-emerald-700 p-3 px-3 sm:px-4">
            Shop
          </LinkItem>
          <LinkItem href="/contact" path={path} className="text-indigo-900 hover:text-emerald-700 p-3 px-3 sm:px-4">
            Contact
          </LinkItem>
          <LinkItem href="/cart" path={path} className="text-slate-200 bg-indigo-900 hover:text-slate-100 p-3  rounded-lg">
            <CgShoppingCart  className=" inline mr-1"/>
              (0)
          </LinkItem>
        </div>
      </div>
    </nav>
  );
}

const LinkItem = ({ href, path, className, children }) => {
  const active = path === href;

  return (
    <Link href={href} passHref>
      <a className={className}>{children}</a>
    </Link>
  );
};
