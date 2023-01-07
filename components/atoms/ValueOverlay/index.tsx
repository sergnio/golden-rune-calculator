import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { SoulCounterReturn } from "components/organism/SoulCounter/useSoulCounter";
import NumberInput from "components/atoms/NumberInput";
import Modal from "components/atoms//Modal";
import Button from "components/atoms/Button";
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
    <Modal open={open} setOpen={setOpen}>
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
        <Button type="submit">Submit</Button>
      </form>
    </Modal>
  );
};

export default ValueOverlay;
