import Header from '../components/Header';
//import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function Layout(props) {
    return(
        <>
            <Head>
                <title>{props.title} </title>
            </Head>
            <Header />
             {props.children}
            <Footer />
        </>
    )
}