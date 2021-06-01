import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import Link from "next/link";
import { list } from "../util/config";

export default function Home() {
  const [words, setWords] = useState(
    list.map((palavra, id) => ({ id, palavra, value: "" }))
  );

  const handleChangeWord = (event, index) => {
    words[index].value = event.target.value;
    setWords([...words]);
  };

  const data = words.map(({ id, palavra, value }, index) => {
    return (
      <div key={id} className={styles.card5}>
        <a style={{cursor:"pointer"}} onClick={() => new Audio(`${index + 1}.mp3`).play()}>
          <Image src="/sound.png" width="30" height="30" />
        </a>
        <TextField
          label={`Word ${index + 1}`}
          value={value}
          onChange={(e) => handleChangeWord(e, index)}
        />
        {value === palavra ? "Good Job!" : ""}
      </div>
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
        <h1 className={styles.title}>My Favorite List</h1>

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
