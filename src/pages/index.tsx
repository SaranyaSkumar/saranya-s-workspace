import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/views/Header";
import MainBanner from "@/views/MainBanner";
import Skills from "@/views/Skills";
import Footer from "@/views/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Saranya&rsquo;s Workspace</title>
        <meta name="description" content="Saranya's Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-vtSLwzuwHhTtJ1g/C+2yC7oZZOapBzZkF0EJfY9XkJBCQ2xI1tTcTdwBzTtS8DDOfEPK7Zz3i2pp3eV4bs4bOw==" crossOrigin="anonymous" />
      </Head>

      <main className={styles.main}>
        <Header />
        <MainBanner />
        <Skills />
        <Footer />
      </main>
    </>
  );
}
