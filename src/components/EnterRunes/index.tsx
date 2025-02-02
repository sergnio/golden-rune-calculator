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
        <h1>
          <span className="big">G</span>olden Run<span className="big">e</span>
          <span className="sub">Calculator</span>
        </h1>
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
            value={runesNeeded}
          />
        </fieldset>
      </div>
    </div>
  );
};
