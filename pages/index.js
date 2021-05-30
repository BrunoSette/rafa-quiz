import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Grid } from "@material-ui/core";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rafa Quiz</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Rafa's Quiz!</h1>
        <p className={styles.description}>Lets practice</p>
        <Grid container direction="row" justify="center" alignItems="center">
          <div className={styles.grid}>
            <a href="1" className={styles.card}>
              <h2>List1</h2>
            </a>
            <a href="2" className={styles.card}>
              <h2>List2</h2>
            </a>
            <a href="3" className={styles.card}>
              <h2>List3</h2>
            </a>
            <a href="4" className={styles.card}>
              <h2>List4</h2>
            </a>
          </div>
        </Grid>
      </main>
    </div>
  );
}
