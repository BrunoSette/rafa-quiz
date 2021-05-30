import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import Link from "next/link";
import { List1 } from "../util/config";

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
  const [word11, setWord11] = useState();
  const [word12, setWord12] = useState();
  const [word13, setWord13] = useState();
  const [word14, setWord14] = useState();
  const [word15, setWord15] = useState();
  const [word16, setWord16] = useState();

  return (
    <div className={styles.container}>
      <Head>
        <title>High Frequency Words</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>High Frequency Words 🥰</h1>
        <Grid container direction="row" justify="center" alignItems="center">
          <div className={styles.card}>
            <a href="1.mp3" target="_blank">
              <Image src="/sound.png" width="30" height="30" />
            </a>
            <TextField
              id="standard-basic"
              label="Word 1"
              multiline
              value={word1}
              onChange={(e) => setWord1(e.target.value)}
            />
            {word1 === List1[0] ? "Good Job!" : ""}
          </div>
          <div className={styles.card}>
            <a href="2.mp3" target="_blank">
              <Image src="/sound.png" width="30" height="30" />
            </a>
            <TextField
              id="standard-basic"
              label="Word 2"
              multiline
              value={word2}
              onChange={(e) => setWord2(e.target.value)}
            />
            {word2 === List1[1] ? "Perfect!" : ""}
          </div>
          <div className={styles.card}>
            <a href="3.mp3" target="_blank">
              <Image src="/sound.png" width="30" height="30" />
            </a>
            <TextField
              id="standard-basic"
              label="Word 3"
              multiline
              value={word3}
              onChange={(e) => setWord3(e.target.value)}
            />
            {word3 === List1[2] ? "Right!" : ""}
          </div>
          <div className={styles.card}>
            <a href="4.mp3" target="_blank">
              <Image src="/sound.png" width="30" height="30" />
            </a>
            <TextField
              id="standard-basic"
              label="Word 4"
              multiline
              value={word4}
              onChange={(e) => setWord4(e.target.value)}
            />
            {word4 === List1[3] ? "Good Job!" : ""}
          </div>
          <div className={styles.card}>
            <a href="5.mp3" target="_blank">
              <Image src="/sound.png" width="30" height="30" />
            </a>
            <TextField
              id="standard-basic"
              label="Word 5"
              multiline
              value={word5}
              onChange={(e) => setWord5(e.target.value)}
            />
            {word5 === List1[4] ? "Awesome!" : ""}
          </div>
          <div className={styles.card}>
            <a href="6.mp3" target="_blank">
              <Image src="/sound.png" width="30" height="30" />
            </a>
            <TextField
              id="standard-basic"
              label="Word 6"
              multiline
              value={word6}
              onChange={(e) => setWord6(e.target.value)}
            />
            {word6 === List1[5] ? "Correct!" : ""}
          </div>
          <div className={styles.card}>
            <a href="7.mp3" target="_blank">
              <Image src="/sound.png" width="30" height="30" />
            </a>
            <TextField
              id="standard-basic"
              label="Word 7"
              multiline
              value={word7}
              onChange={(e) => setWord7(e.target.value)}
            />
            {word7 === List1[6] ? "Good Job!" : ""}
          </div>
          <div className={styles.card}>
            <a href="8.mp3" target="_blank">
              <Image src="/sound.png" width="30" height="30" />
            </a>
            <TextField
              id="standard-basic"
              label="Word 8"
              multiline
              value={word8}
              onChange={(e) => setWord8(e.target.value)}
            />
            {word8 === List1[7] ? "Awesome!" : ""}
          </div>
          <div className={styles.card}>
            <a href="9.mp3" target="_blank">
              <Image src="/sound.png" width="30" height="30" />
            </a>
            <TextField
              id="standard-basic"
              label="Word 9"
              multiline
              value={word9}
              onChange={(e) => setWord9(e.target.value)}
            />
            {word9 === List1[8] ? "Perfect!" : ""}
          </div>
          <div className={styles.card}>
            <a href="10.mp3" target="_blank">
              <Image src="/sound.png" width="30" height="30" />
            </a>
            <TextField
              id="standard-basic"
              label="Word 10"
              multiline
              value={word10}
              onChange={(e) => setWord10(e.target.value)}
            />
            {word10 === List1[9] ? "Nice!" : ""}
          </div>
          <div className={styles.card}>
            <a href="11.mp3" target="_blank">
              <Image src="/sound.png" width="30" height="30" />
            </a>
            <TextField
              id="standard-basic"
              label="Word 10"
              multiline
              value={word11}
              onChange={(e) => setWord11(e.target.value)}
            />
            {word11 === List1[10] ? "Nice!" : ""}
          </div>
          <div className={styles.card}>
            <a href="12.mp3" target="_blank">
              <Image src="/sound.png" width="30" height="30" />
            </a>
            <TextField
              id="standard-basic"
              label="Word 12"
              multiline
              value={word12}
              onChange={(e) => setWord12(e.target.value)}
            />
            {word12 === List1[11] ? "Nice!" : ""}
          </div>
          <div className={styles.card}>
            <a href="13.mp3" target="_blank">
              <Image src="/sound.png" width="30" height="30" />
            </a>
            <TextField
              id="standard-basic"
              label="Word 13"
              multiline
              value={word13}
              onChange={(e) => setWord13(e.target.value)}
            />
            {word13 === List1[12] ? "Nice!" : ""}
          </div>
          <div className={styles.card}>
            <a href="14.mp3" target="_blank">
              <Image src="/sound.png" width="30" height="30" />
            </a>
            <TextField
              id="standard-basic"
              label="Word 14"
              multiline
              value={word14}
              onChange={(e) => setWord14(e.target.value)}
            />
            {word14 === List1[13] ? "Nice!" : ""}
          </div>
          <div className={styles.card}>
            <a href="15.mp3" target="_blank">
              <Image src="/sound.png" width="30" height="30" />
            </a>
            <TextField
              id="standard-basic"
              label="Word 15"
              multiline
              value={word15}
              onChange={(e) => setWord15(e.target.value)}
            />
            {word15 === List1[14] ? "Nice!" : ""}
          </div>
          {/* <div className={styles.card}>
            <a href="16.mp3" target="_blank">
              <Image src="/sound.png" width="30" height="30" />
            </a>
            <TextField
              id="standard-basic"
              label="Word 16"
              multiline
              value={word16}
              onChange={(e) => setWord16(e.target.value)}
            />
            {word16 === List1[15] ? "Nice!" : ""}
          </div> */}

          <Link href="2">
            <a className={styles.card}>
              <h1>Go to list 2</h1>
              <Image src="/arrow.png" width="40" height="40" />
            </a>
          </Link>
        </Grid>
      </main>
    </div>
  );
}
