import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Grid } from "@material-ui/core";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rafa Quiz</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Rafa's Quiz!</h1>
        <p className={styles.description}>Lets practice</p>
        {/* <Image src="/aba.jpg" width="400" height="200" /> */}
        <Grid container direction="row" justify="center" alignItems="center">
          <div className={styles.grid}>
            <a href="1" className={styles.cardHome}>
              <h2>List 1</h2>
            </a>
            <a href="2" className={styles.cardHome}>
              <h2>List 2</h2>
            </a>
            <a href="3" className={styles.cardHome}>
              <h2>List 3</h2>
            </a>
            <a href="4" className={styles.cardHome}>
              <h2>List 4</h2>
            </a>
          </div>
        </Grid>
      </main>
    </div>
  );
}
