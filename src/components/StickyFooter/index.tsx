import { getOverUnder, OverUnder } from "@/utils/calculate";
import { useRuneCalc } from "../RuneCalc";
import { Button } from "../Button";
import { useScreens } from "../Screens";
import styles from "./styles.module.scss";

const getSign = (overUnder: OverUnder): string => {
  if (overUnder === OverUnder["Over"]) {
    return "+";
  }
  return "";
};

export const StickyFooter = () => {
  const { runesHeld, totalRunes, remainingNeeded } = useRuneCalc();
  const { prevScreen, nextScreen, screen } = useScreens();

  const overUnder = getOverUnder(remainingNeeded);
  const neededSign = getSign(overUnder);
  const neededText = `${neededSign}${-1 * remainingNeeded}`;

  return (
    <div className={styles.StickyFooter}>
      <div className={styles.Container}>
        <div className={styles.Section}>
          {prevScreen ? (
            <Button onClick={() => prevScreen()}>Prev</Button>
          ) : null}
        </div>
        <div className={styles.Section}>
          {screen === "count-runes" ? (
            <div className={styles.Values}>
              <div className={styles.Value}>
                <div className={styles.ValueLabel}>Total:</div>
                <div className={styles.ValueValue}>
                  {runesHeld + totalRunes}
                </div>
              </div>
              <div className={styles.Value}>
                <div className={styles.ValueLabel}>Needed:</div>
                <div className={styles.ValueValue} data-over-under={overUnder}>
                  {neededText}
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <div className={styles.Section}>
          {nextScreen ? (
            <Button onClick={() => nextScreen()}>Next</Button>
          ) : null}
        </div>
      </div>
    </div>
  );
};
