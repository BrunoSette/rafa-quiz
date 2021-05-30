import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import Link from "next/link";
import { List2 } from "../util/config";

export default function Home() {
  const [word1, setWord1] = useState();
  const [word2, setWord2] = useState();
  const [word3, setWord3] = useState();
  const [word4, setWord4] = useState();
  const [word5, setWord5] = useState();
  const [word6, setWord6] = useState();
  const [word7, setWord7] = useState();
  const [word8, setWord8] = useState();
  const [word9, setWord9] = useState();
  const [word10, setWord10] = useState();

  return (
    <div className={styles.container}>
      <Head>
        <title>List 2</title>
        <link
          rel="shortcut icon"
          href="https://assets.pokemon.com/static2/_ui/img/favicon.ico"
        ></link>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>List 2</h1>
        <Grid container direction="row" justify="center" alignItems="center">
          <div className={styles.card}>
            <a href="17.mp3" target="_blank">
              <Image src="/sound.png" width="30" height="30" />
            </a>
            <TextField
              id="standard-basic"
              label="Word 17"
              multiline
              value={word1}
              onChange={(e) => setWord1(e.target.value)}
            />

            {word1 === List2[0] ? "Good Job!" : ""}
          </div>
          <div className={styles.card}>
            <a href="18.mp3" target="_blank">
              <Image src="/sound.png" width="30" height="30" />
            </a>
            <TextField
              id="standard-basic"
              label="Word 18"
              multiline
              value={word2}
              onChange={(e) => setWord2(e.target.value)}
            />
            {word2 === List2[1] ? "Good Job!" : ""}
          </div>
          <div className={styles.card}>
            <a href="19.mp3" target="_blank">
              <Image src="/sound.png" width="30" height="30" />
            </a>
            <TextField
              id="standard-basic"
              label="Word 19"
              multiline
              value={word3}
              onChange={(e) => setWord3(e.target.value)}
            />
            {word3 === List2[2] ? "Good Job!" : ""}
          </div>
          <div className={styles.card}>
            <a href="20.mp3" target="_blank">
              <Image src="/sound.png" width="30" height="30" />
            </a>
            <TextField
              id="standard-basic"
              label="Word 20"
              multiline
              value={word4}
              onChange={(e) => setWord4(e.target.value)}
            />
            {word4 === List2[3] ? "Good Job!" : ""}
          </div>
          <div className={styles.card}>
            <a href="21.mp3" target="_blank">
              <Image src="/sound.png" width="30" height="30" />
            </a>
            <TextField
              id="standard-basic"
              label="Word 21"
              multiline
              value={word5}
              onChange={(e) => setWord5(e.target.value)}
            />
            {word5 === List2[4] ? "Good Job!" : ""}
          </div>
          <div className={styles.card}>
            <a href="22.mp3" target="_blank">
              <Image src="/sound.png" width="30" height="30" />
            </a>
            <TextField
              id="standard-basic"
              label="Word 22"
              multiline
              value={word6}
              onChange={(e) => setWord6(e.target.value)}
            />
            {word6 === List2[5] ? "Good Job!" : ""}
          </div>
          <div className={styles.card}>
            <a href="23.mp3" target="_blank">
              <Image src="/sound.png" width="30" height="30" />
            </a>
            <TextField
              id="standard-basic"
              label="Word 23"
              multiline
              value={word7}
              onChange={(e) => setWord7(e.target.value)}
            />
            {word7 === List2[6] ? "Good Job!" : ""}
          </div>
          <div className={styles.card}>
            <a href="24.mp3" target="_blank">
              <Image src="/sound.png" width="30" height="30" />
            </a>
            <TextField
              id="standard-basic"
              label="Word 24"
              multiline
              value={word8}
              onChange={(e) => setWord8(e.target.value)}
            />
            {word8 === List2[7] ? "Perfect!" : ""}
          </div>
          <div className={styles.card}>
            <a href="25.mp3" target="_blank">
              <Image src="/sound.png" width="30" height="30" />
            </a>
            <TextField
              id="standard-basic"
              label="Word 25"
              multiline
              value={word9}
              onChange={(e) => setWord9(e.target.value)}
            />
            {word9 === List2[8] ? "Correct!" : ""}
          </div>
          <div className={styles.card}>
            <a href="26.mp3" target="_blank">
              <Image src="/sound.png" width="30" height="30" />
            </a>
            <TextField
              id="standard-basic"
              label="Word 26"
              multiline
              value={word10}
              onChange={(e) => setWord10(e.target.value)}
            />
            {word10 === List2[9] ? "Good Job!" : ""}
          </div>
          <Link href="3">
            <a className={styles.cardHome}>
              <h1>Go to list 3</h1>
              <Image src="/arrow.png" width="40" height="40" />
            </a>
          </Link>
        </Grid>
      </main>
    </div>
  );
}
