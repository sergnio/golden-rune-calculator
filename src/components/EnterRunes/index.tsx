import { useState } from "react";
import Button from "../Button";
import { NumberInput } from "../NumberInput";
import { useRuneCalc } from "../RuneCalc";
import styles from "./styles.module.scss";

export const EnterRunes = ({ nextScreen }: { nextScreen: () => void }) => {
  const { setRunesHeld, setRunesNeeded } = useRuneCalc();

  const [localHeld, setLocalHeld] = useState(0);
  const [localNeeded, setLocalNeeded] = useState(0);
  const haveEnough = localNeeded - localHeld < 0;

  return (
    <div>
      <form
        className={styles.Form}
        onSubmit={(event) => {
          event.preventDefault();
          setRunesHeld(localHeld);
          setRunesNeeded(localNeeded);
          nextScreen();
        }}
      >
        <fieldset className={styles.Fieldset}>
          <label className={styles.Label} htmlFor="input-held">
            Runes Held
          </label>
          <NumberInput
            id="input-held"
            className={styles.Input}
            onChange={(event) =>
              setLocalHeld(parseInt(event.target.value) || 0)
            }
            value={localHeld}
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
              setLocalNeeded(parseInt(event.target.value) || 0)
            }
            value={localNeeded}
          />
        </fieldset>
        <div className={styles.Message} data-visible={haveEnough}>
          Looks like you have enough runes already!
        </div>
        <Button type="submit">Next</Button>
      </form>
    </div>
  );
};
