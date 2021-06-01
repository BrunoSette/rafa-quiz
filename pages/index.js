import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Grid } from "@material-ui/core";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rafa Quiz</title>
        <link
          rel="shortcut icon"
          href="https://assets.pokemon.com/static2/_ui/img/favicon.ico"
        ></link>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Rafa's Quiz! 🚀</h1>
        <p className={styles.description}>Lets practice spelling! 😍</p>
        <Image src="/miuchu.jpeg" width="200" height="200" />
        <Grid container direction="row" justify="center" alignItems="center">
          <div className={styles.grid}>
            <a href="1" className={styles}>
              <h2>Section 5</h2>
            </a>
          </div>
        </Grid>
      </main>
    </div>
  );
}
