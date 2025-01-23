import { MdAdd, MdRemove } from "react-icons/md";
import { NumberInput } from "@/components/NumberInput";
import Button from "@/components/Button";
import { useRuneCalc } from "../RuneCalc";
import styles from "./styles.module.scss";

export const RuneList = () => {
  const { runes, setRuneCount } = useRuneCalc();

  return (
    <div className={styles.Container}>
      {runes.map(({ name, souls }) => {
        const rune = runes.find((r) => r.name === name);

        if (!rune) {
          return null;
        }

        const count = rune.count;

        return (
          <div key={name} className={styles.Row}>
            <div>
              <div>{name}</div>
              <div className={styles.SubLabel}>{souls} Runes</div>
            </div>
            <div>
              <div className={styles.Controls}>
                <Button
                  className={styles.Button}
                  onClick={() => setRuneCount(rune, rune.count - 1)}
                  disabled={!count}
                >
                  <MdRemove />
                </Button>
                <NumberInput
                  className={styles.Input}
                  onChange={(event) =>
                    setRuneCount(rune, parseInt(event.target.value))
                  }
                  value={count}
                />
                <Button
                  className={styles.Button}
                  onClick={() => setRuneCount(rune, rune.count + 1)}
                >
                  <MdAdd />
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
