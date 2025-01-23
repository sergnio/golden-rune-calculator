"use client";

import { EnterRunes } from "@/components/EnterRunes";
import { Summary } from "@/components/Summary";
import { StickyFooter } from "@/components/StickyFooter";
import { RuneList } from "@/components/RuneList";
import { RuneCalc } from "@/components/RuneCalc";
import { Screens, useScreens } from "@/components/Screens";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <RuneCalc>
      <Screens>
        <Render />
      </Screens>
    </RuneCalc>
  );
}

const Render = () => {
  const { screen } = useScreens();

  return (
    <main className={styles.Container}>
      <div className={styles.Screen}>
        {screen === "enter-runes" && <EnterRunes />}
        {screen === "count-runes" && <RuneList />}
        {screen === "summary" && <Summary />}
      </div>
      <StickyFooter />
    </main>
  );
};
