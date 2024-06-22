import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import NumberInput from "components/atoms/NumberInput";
import Modal from "components/atoms//Modal";
import Button from "components/atoms/Button";
import { SoulCounterContext } from "context/SoulCounter";
import styles from "./styles.module.scss";

type Props = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const Form: React.FC<Props> = ({ setOpen }) => {
  const { held, needed, setHeld, setNeeded } = useContext(SoulCounterContext);
  const [localHeld, setLocalHeld] = useState<number>(held);
  const [localNeeded, setLocalNeeded] = useState<number>(needed);
  const haveEnough = localNeeded - localHeld < 0;

  useEffect(() => {
    setLocalHeld(held);
    setLocalNeeded(needed);
  }, [held, needed]);

  return (
    <form
      className={styles.Form}
      onSubmit={(event) => {
        event.preventDefault();
        setHeld(localHeld);
        setNeeded(localNeeded);
        setOpen(false);
      }}
    >
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
      <fieldset className={styles.Fieldset}>
        <label className={styles.Label} htmlFor="input-held">
          Runes Held
        </label>
        <NumberInput
          id="input-held"
          className={styles.Input}
          onChange={(event) => setLocalHeld(parseInt(event.target.value) || 0)}
          value={localHeld}
        />
      </fieldset>
      <div className={styles.Message} data-visible={haveEnough}>
        Looks like you have enough runes already!
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
