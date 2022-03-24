import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useReducer, useState } from "react";
import { allRunes } from "../constants/runes";
import { disallowNonNumbers } from "../utils/inputHelpers";
import Rune from "../assets/lordrune.png";
import Header from "../components/atoms/Header";

export default () => {
  const [total, dispatch] = useReducer((state: number, action: any) => {
    if (action === "reset") {
      return 0;
    }
    // @ts-ignore
    if (state <= 0 && action <= 0) {
      return 0;
    }
    // @ts-ignore
    return state + action;
  }, 0);

  const [runeCount, setCount] = useState<{ [id: number]: number }>({});
  const [targetRuneCount, setTargetRuneCount] = useState<Undefinable<number>>();

  const increment = (souls: number, id: number) => () => {
    dispatch(souls);
    if (runeCount[id]) {
      setCount({ ...runeCount, [id]: runeCount[id] + 1 });
    } else {
      setCount({ ...runeCount, [id]: 1 });
    }
  };

  const decrease = (souls: number, id: number) => () => {
    if (!total) return;

    dispatch(-souls);
    if (runeCount[id]) {
      setCount({ ...runeCount, [id]: runeCount[id] - 1 });
    }
    if (runeCount[id] <= 0) {
      const newCounts = { ...runeCount };
      setCount(newCounts);
    }
  };

  const reset = () => {
    dispatch("reset");
    setCount({});
    setTargetRuneCount(0);
  };

  return (
    <div>
      <Head>
        <title>Golden Rune Calculator</title>
        <meta
          name="description"
          content="Golden Rune Calculator for Elden Ring"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <main className={styles.main}>
        <Image
          src={Rune}
          className={styles.runeimage}
          alt="image of a golden rune"
        />
        <div>
          <label>
            Desired Target # of Runes
            <input
              name="heldRunes"
              type="number"
              className={styles.heldRunes}
              onKeyDown={disallowNonNumbers}
              value={targetRuneCount}
              onChange={(event) => {
                // @ts-ignore
                if (event?.target?.value) {
                  // @ts-ignore
                  setTargetRuneCount(event.target.value);
                } else {
                  setTargetRuneCount(0);
                }
              }}
            />
          </label>
        </div>

        {allRunes.map(({ id, label, soulsGiven }) => (
          <div key={id} className={`${styles.flex} ${styles.spaced}`}>
            <span>{label}</span>
            <button onClick={increment(soulsGiven, id)}>+</button>
            <button
              disabled={!runeCount[id]}
              onClick={decrease(soulsGiven, id)}
            >
              -
            </button>
            {runeCount[id] > 0 && (
              <span className={`${styles.fixed} ${styles.nomargin}`}>
                total: {runeCount[id]}
              </span>
            )}
          </div>
        ))}
        <h2>total: {total}</h2>
        <button onClick={reset}>reset</button>
      </main>
      <footer className={`${styles.bottom} ${styles.smallText}`}>
        Contribute to the code{" "}
        <a
          target="_blank"
          href="https://github.com/sergnio/golden-rune-calculator"
          rel="noreferrer"
        >
          here
        </a>
        !
      </footer>
    </div>
  );
};
