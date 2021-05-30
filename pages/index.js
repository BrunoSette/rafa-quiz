import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rafa Quiz</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Rafa Quiz!</h1>
        <p className={styles.description}>Vamos treinar nosso inglês</p>
        <div className={styles.grid}>
          <a href="1" className={styles.card}>
            <h2>Lista 1</h2>
          </a>

          <a href="2" className={styles.card}>
            <h2>Lista 2</h2>
          </a>

          <a href="3" className={styles.card}>
            <h2>Lista 3</h2>
          </a>

          <a href="4" className={styles.card}>
            <h2>Lista 4</h2>
          </a>
        </div>
      </main>
    </div>
  );
}
