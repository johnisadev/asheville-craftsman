import { Router } from "next/router";
import Head from "next/head";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Main({ children }) {
  return (
    <>
      <main className="shadow-md">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Asheville Craftsman - Store</title>
        </Head>
        <Navbar path={Router.asPath} />
        <section className="md:relative container mx-auto px-3">
          {children}
        </section>
        <Footer />
      </main>
    </>
  );
}
