"use client";

import { EnterRunes } from "@/components/EnterRunes";
import { StickyFooter } from "@/components/StickyFooter";
import { RuneList } from "@/components/RuneList";
import { Nav } from "@/components/Nav";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.Container}>
      <Nav />
      <section className={styles.Section}>
        <EnterRunes />
      </section>
      <section className={styles.Section}>
        <RuneList />
      </section>
      <StickyFooter />
    </main>
  );
}
