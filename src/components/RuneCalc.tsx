import { allRunes, Rune } from "@/constants/runes";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

const runesWithCount = allRunes.map((rune) => ({ ...rune, count: 0 }));

type RuneCalc = {
  runesHeld: number;
  setRunesHeld: Dispatch<SetStateAction<number>>;
  runesNeeded: number;
  setRunesNeeded: Dispatch<SetStateAction<number>>;
  runes: InventoryRune[];
  heldRunes: InventoryRune[];
  setRuneCount: (setRune: InventoryRune, count: number) => void;
  totalRunes: number;
  remainingNeeded: number;
  reset: () => void;
};

export type InventoryRune = {
  count: number; // default 0
} & Rune;

const RuneCalcContext = createContext<RuneCalc | undefined>(undefined);
const RuneCalcProvider = RuneCalcContext.Provider;

export const useRuneCalc = () => {
  const context = useContext(RuneCalcContext);

  if (context === undefined) {
    throw new Error("useRuneCalc must be within RuneCalcContext");
  }

  return context;
};

export const RuneCalc = ({ children }: React.PropsWithChildren) => {
  const [runesHeld, setRunesHeld] = useState(0);
  const [runesNeeded, setRunesNeeded] = useState(0);
  const [runes, setRunes] = useState(runesWithCount);

  const setRuneCount = (setRune: InventoryRune, count: number) => {
    setRunes(
      [...runes].map((rune) =>
        rune.name === setRune.name ? { ...rune, count } : rune
      )
    );
  };

  const totalRunes = runes.reduce(
    (previous, current) => previous + current.count * current.souls,
    0
  );

  const remainingNeeded = runesNeeded - (runesHeld + totalRunes);

  const heldRunes = runes.filter((rune) => rune.count > 0);

  const reset = () => {
    setRunesHeld(0);
    setRunesNeeded(0);
    setRunes(runesWithCount);
  };

  return (
    <RuneCalcProvider
      value={{
        runesHeld,
        setRunesHeld,
        runesNeeded,
        setRunesNeeded,
        runes,
        heldRunes,
        setRuneCount,
        totalRunes,
        remainingNeeded,
        reset,
      }}
    >
      {children}
    </RuneCalcProvider>
  );
};
