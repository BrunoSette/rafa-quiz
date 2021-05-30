import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import Link from "next/link";
import { List4 } from "../util/config";

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
        <title>List 4</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>List 4</h1>
        <Grid container direction="row" justify="center" alignItems="center">
          <div className={styles.card}>
            <a href="37.mp3" target="_blank">
              <Image src="/sound.png" width="30" height="30" />
            </a>
            <TextField
              id="standard-basic"
              label="Word 37"
              multiline
              value={word1}
              onChange={(e) => setWord1(e.target.value)}
            />

            {word1 === List4[0] ? "Good Job!" : ""}
          </div>
          <div className={styles.card}>
            <a href="38.mp3" target="_blank">
              <Image src="/sound.png" width="30" height="30" />
            </a>
            <TextField
              id="standard-basic"
              label="Word 38"
              multiline
              value={word2}
              onChange={(e) => setWord2(e.target.value)}
            />
            {word10 === List4[1] ? "Good Job!" : ""}
          </div>
          <div className={styles.card}>
            <a href="39.mp3" target="_blank">
              <Image src="/sound.png" width="30" height="30" />
            </a>
            <TextField
              id="standard-basic"
              label="Word 39"
              multiline
              value={word3}
              onChange={(e) => setWord3(e.target.value)}
            />
            {word10 === List4[2] ? "Good Job!" : ""}
          </div>
          <div className={styles.card}>
            <a href="40.mp3" target="_blank">
              <Image src="/sound.png" width="30" height="30" />
            </a>
            <TextField
              id="standard-basic"
              label="Word 40"
              multiline
              value={word4}
              onChange={(e) => setWord4(e.target.value)}
            />
            {word10 === List4[3] ? "Good Job!" : ""}
          </div>
          <div className={styles.card}>
            <a href="41.mp3" target="_blank">
              <Image src="/sound.png" width="30" height="30" />
            </a>
            <TextField
              id="standard-basic"
              label="Word 41"
              multiline
              value={word5}
              onChange={(e) => setWord5(e.target.value)}
            />
            {word10 === List4[4] ? "Good Job!" : ""}
          </div>
          <div className={styles.card}>
            <a href="42.mp3" target="_blank">
              <Image src="/sound.png" width="30" height="30" />
            </a>
            <TextField
              id="standard-basic"
              label="Word 42"
              multiline
              value={word6}
              onChange={(e) => setWord6(e.target.value)}
            />
            {word10 === List4[5] ? "Good Job!" : ""}
          </div>
          <div className={styles.card}>
            <a href="43.mp3" target="_blank">
              <Image src="/sound.png" width="30" height="30" />
            </a>
            <TextField
              id="standard-basic"
              label="Word 43"
              multiline
              value={word7}
              onChange={(e) => setWord7(e.target.value)}
            />
            {word10 === List4[6] ? "Good Job!" : ""}
          </div>
          <div className={styles.card}>
            <a href="44.mp3" target="_blank">
              <Image src="/sound.png" width="30" height="30" />
            </a>
            <TextField
              id="standard-basic"
              label="Word 44"
              multiline
              value={word8}
              onChange={(e) => setWord8(e.target.value)}
            />
            {word10 === List4[7] ? "Good Job!" : ""}
          </div>
          <div className={styles.card}>
            <a href="45.mp3" target="_blank">
              <Image src="/sound.png" width="30" height="30" />
            </a>
            <TextField
              id="standard-basic"
              label="Word 45"
              multiline
              value={word9}
              onChange={(e) => setWord9(e.target.value)}
            />
            {word10 === List4[8] ? "Good Job!" : ""}
          </div>
          <div className={styles.card}>
            <a href="47.mp3" target="_blank">
              <Image src="/sound.png" width="30" height="30" />
            </a>
            <TextField
              id="standard-basic"
              label="Word 47"
              multiline
              value={word10}
              onChange={(e) => setWord10(e.target.value)}
            />
            {word10 === List4[9] ? "Good Job!" : ""}
          </div>
          <Link href="5">
            <a className={styles.card}>
              <h1>Go to list 5</h1>
              <Image src="/arrow.png" width="40" height="40" />
            </a>
          </Link>
        </Grid>
      </main>
    </div>
  );
}
