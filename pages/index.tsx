import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Delivery UI</title>
        <meta name="description" content="Delivery UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Link href="/home"> Home</Link>
        <Link href="/login">Login</Link>
      </main>
    </div>
  );
};

export default Home;
