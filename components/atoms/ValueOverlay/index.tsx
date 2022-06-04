import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { SoulCounterReturn } from "@/components/atoms/SoulCounter/useSoulCounter";
import styles from "./styles.module.scss";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
} & SoulCounterReturn;

const ValueOverlay: React.FC<Props> = ({
  open,
  setOpen,
  held,
  needed,
  setHeld,
  setNeeded,
}) => {
  const [localHeld, setLocalHeld] = useState<number>(held);
  const [localNeeded, setLocalNeeded] = useState<number>(needed);
  const haveEnough = localNeeded - localHeld < 0;

  useEffect(() => {
    setLocalHeld(held);
    setLocalNeeded(needed);
  }, [held, needed]);

  return (
    <div className={styles.Overlay} data-open={open}>
      <div className={styles.Content}>
        <button className={styles.CloseButton} onClick={() => setOpen(false)}>
          Close
        </button>
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
            <label className={styles.Label} htmlFor="input-held">
              Runes Held
            </label>
            <input
              id="input-held"
              type="number"
              value={localHeld}
              onChange={(event) => setLocalHeld(parseInt(event.target.value))}
              className={styles.Input}
            />
          </fieldset>
          <fieldset className={styles.Fieldset}>
            <label className={styles.Label} htmlFor="input-needed">
              Runes Needed
            </label>
            <input
              id="input-needed"
              type="number"
              value={localNeeded}
              onChange={(event) => setLocalNeeded(parseInt(event.target.value))}
              className={styles.Input}
            />
          </fieldset>
          <div className={styles.Message} data-visible={haveEnough}>
            Looks like you have enough runes already!
          </div>
          <button className={styles.SubmitButton} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ValueOverlay;
