import Button from "../Button";
import { NumberInput } from "../NumberInput";
import { useRuneCalc } from "../RuneCalc";
import styles from "./styles.module.scss";

export const EnterRunes = ({ nextScreen }: { nextScreen: () => void }) => {
  const { runesHeld, runesNeeded, setRunesHeld, setRunesNeeded } =
    useRuneCalc();

  return (
    <div>
      <form
        className={styles.Form}
        onSubmit={(event) => {
          event.preventDefault();
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
        <Button type="submit">Next</Button>
      </form>
    </div>
  );
};
