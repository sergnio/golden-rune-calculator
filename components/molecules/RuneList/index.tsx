import { MdAdd, MdRemove } from "react-icons/md";
import NumberInput from "components/atoms/NumberInput";
import Button from "components/atoms/Button";
import { SoulCounterReturn } from "components/organisms/SoulCounter/useSoulCounter";
import styles from "./styles.module.scss";

const RuneList: React.FC<{ runes: Rune[] } & SoulCounterReturn> = ({
  runes,
  increase,
  decrease,
  runeCount,
  setExactCount,
}) => {
  return (
    <div className={styles.Container}>
      {runes.map(({ id, label, soulsGiven }) => {
        const totalRunes = runeCount.find((r) => r.id === id)!.count;
        return (
          <div key={id} className={styles.Row}>
            <div>
              <div>{label}</div>
              <div className={styles.SubLabel}>{soulsGiven} Runes</div>
            </div>
            <div>
              <div className={styles.Controls}>
                <Button
                  className={styles.Button}
                  onClick={decrease(id)}
                  disabled={!totalRunes}
                >
                  <MdRemove />
                </Button>
                <NumberInput
                  className={styles.Input}
                  onChange={setExactCount(id)}
                  value={totalRunes}
                />
                <Button className={styles.Button} onClick={increase(id)}>
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

export default RuneList;