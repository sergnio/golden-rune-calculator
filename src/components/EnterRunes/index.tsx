"use client";

import Image from "next/image";
import { sendGAEvent } from "@next/third-parties/google";
import { NumberInput } from "../NumberInput";
import { useRuneCalcStore } from "@/store/RuneCalc";
import styles from "./styles.module.scss";

export const EnterRunes = () => {
  const runesHeld = useRuneCalcStore((state) => state.runesHeld);
  const setRunesHeld = useRuneCalcStore((state) => state.setRunesHeld);
  const runesNeeded = useRuneCalcStore((state) => state.runesNeeded);
  const setRunesNeeded = useRuneCalcStore((state) => state.setRunesNeeded);

  return (
    <div className={styles.Container}>
      <header>
        <div className={styles.Logo}>
          <h1>
            <Image
              src="/title.png"
              alt="Golden Rune Calculator"
              width={776}
              height={181}
            />
          </h1>
        </div>
        <p className={styles.Alert}>
          Now updated for Shadow&nbsp;of&nbsp;the&nbsp;Erdtree
        </p>
        <p>
          Calculate exactly how many golden runes you need to consume based off
          of how many runes you hold and how many you need to progress to the
          next level.
        </p>
      </header>
      <div className={styles.Form}>
        <fieldset className={styles.Fieldset}>
          <label className={styles.Label} htmlFor="input-held">
            Runes Held
          </label>
          <NumberInput
            id="input-held"
            className={styles.Input}
            onChange={(event) =>
              setRunesHeld(parseInt(event.target.value) || 0)
            }
            onBlur={() => {
              sendGAEvent("event", "runesHeld", { value: runesHeld });
            }}
            value={runesHeld}
          />
        </fieldset>
        <fieldset className={styles.Fieldset}>
          <label className={styles.Label} htmlFor="input-needed">
            Runes Needed
          </label>
          <NumberInput
            id="input-needed"
            className={styles.Input}
            onChange={(event) =>
              setRunesNeeded(parseInt(event.target.value) || 0)
            }
            onBlur={() => {
              sendGAEvent("event", "runesNeeded", { value: runesNeeded });
            }}
            value={runesNeeded}
          />
        </fieldset>
      </div>
    </div>
  );
};
