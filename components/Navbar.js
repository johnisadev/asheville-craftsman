import Link from "next/link";

export default function Navbar(props) {
  const { path } = props;

  return (
    <nav className="fixed w-full backdrop-blur-md z-10" {...props}>
      <div className="flex p-2 self-center flex-wrap">
        <h1 className="flex">Asheville Craftsman</h1>
      </div>
      <LinkItem href="/" path={path}>
        Home
      </LinkItem>
      <LinkItem href="/shop" path={path}>
        Shop
      </LinkItem>
      <LinkItem href="/about" path={path}>
        About
      </LinkItem>
      <LinkItem href="/contact" path={path}>
        Contact
      </LinkItem>
    </nav>
  );
}

const LinkItem = ({ href, path, children }) => {
  const active = path === href;

  return (
    <Link href={href} passHref>
      <a>{children}</a>
    </Link>
  );
};
