import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import Link from "next/link";
import { List } from "../util/config";

export default function Home() {
  const [words, setWords] = useState([]);

  const data = List.map((palavra, number) => {
    return (
      <>
        <div className={styles.card5}>
          <a href={`${number + 1}.mp3`} target="_blank">
            <Image src="/sound.png" width="30" height="30" />
          </a>
          <TextField
            label={`Word ${number + 1}`}
            value={words[number]}
            onChange={(e) => setWords(e.target.value)}
            // setWords(
            //   words.map((item) =>
            //     item.id === number ? { ...item, words: e.target.value } : item
            //   )
            // )
            //https://stackoverflow.com/questions/55987953/how-do-i-update-states-onchange-in-an-array-of-object-in-react-hooks
          />
          {words[number] === List[number] ? "Good Job!" : ""}
        </div>
      </>
    );
  });

  return (
    <div className={styles.container5}>
      <Head>
        <title>List</title>
        <link
          rel="shortcut icon"
          href="https://assets.pokemon.com/static2/_ui/img/favicon.ico"
        ></link>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>My Favorite List {words[0]}</h1>

        <Grid container direction="row" justify="center" alignItems="center">
          {data}
          <Link href="/">
            <a className={styles.card5}>
              <h1>Go back home</h1>
            </a>
          </Link>
        </Grid>
      </main>
    </div>
  );
}
