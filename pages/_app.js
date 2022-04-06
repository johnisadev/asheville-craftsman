import "../stlyles/globals.css";
import MainLayout from "../components/layouts/main";


export default function Website({ Component, pageProps, router }) {
    return (
        <MainLayout>
            <Component {...pageProps} key={router.route} />
        </MainLayout>
    )
}