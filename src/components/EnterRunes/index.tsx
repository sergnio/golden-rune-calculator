import { NumberInput } from "../NumberInput";
import { useRuneCalc } from "../RuneCalc";
import { useScreens } from "../Screens";
import styles from "./styles.module.scss";

export const EnterRunes = () => {
  const { runesHeld, runesNeeded, setRunesHeld, setRunesNeeded } =
    useRuneCalc();

  const { nextScreen } = useScreens();

  return (
    <div className={styles.Container}>
      <form
        className={styles.Form}
        onSubmit={(event) => {
          event.preventDefault();
          if (nextScreen) {
            nextScreen();
          }
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
      </form>
    </div>
  );
};
