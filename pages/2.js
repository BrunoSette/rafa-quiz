import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import Link from "next/link";
import { frenchWeather } from "../util/config";

export default function Home() {
  const [words, setWords] = useState(
    frenchWeather.map((palavra, id) => ({ id, palavra, value: "" }))
  );

  const handleChangeWord = (event, index) => {
    words[index].value = event.target.value;
    setWords([...words]);
  };

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const data = words.map(({ id, palavra, value }, index) => {
    let randomNumber = getRandomIntInclusive(1, 6);
    let message = "";
    switch (randomNumber) {
      case 1:
        message = "Good Job! 😍";
        break;
      case 2:
        message = "Nice! 🥰";
        break;
      case 3:
        message = "Excellent! 😘";
        break;
      case 4:
        message = "Perfect! ✨";
        break;
      case 5:
        message = "Good! 🤜";
        break;
      default:
        message = "Great! ❤️";
    }
    return (
      <div key={id} className={styles.card5}>
        <a
          style={{ cursor: "pointer" }}
          onClick={() => new Audio(`frenchWeather/${index + 1}.mp3`).play()}
        >
          <Image src="/sound.png" width="30" height="30" />
        </a>
        <TextField
          label={`Word ${index + 1}`}
          value={value}
          onChange={(e) => handleChangeWord(e, index)}
        />
        {value.toLowerCase() === palavra.toLowerCase() ? message : ""}
      </div>
    );
  });

  return (
    <div className={styles.container5}>
      <Head>
        <title>My Favorite List 🥰</title>
        <link
          rel="shortcut icon"
          href="https://assets.pokemon.com/static2/_ui/img/favicon.ico"
        ></link>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>🇫🇷 French Weather ☁️ ❄️ ☀️ </h1>

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
