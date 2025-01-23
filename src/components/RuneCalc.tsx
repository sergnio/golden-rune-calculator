import { allRunes, Rune } from "@/constants/runes";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type RuneCalc = {
  runesHeld: number;
  setRunesHeld: Dispatch<SetStateAction<number>>;
  runesNeeded: number;
  setRunesNeeded: Dispatch<SetStateAction<number>>;
  runes: InventoryRune[];
  setRuneCount: (setRune: InventoryRune, count: number) => void;
  totalRunes: number;
  remainingNeeded: number;
};

type InventoryRune = {
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
  const [runes, setRunes] = useState(
    allRunes.map((rune) => ({ ...rune, count: 0 }))
  );

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

  return (
    <RuneCalcProvider
      value={{
        runesHeld,
        setRunesHeld,
        runesNeeded,
        setRunesNeeded,
        runes,
        setRuneCount,
        totalRunes,
        remainingNeeded,
      }}
    >
      {children}
    </RuneCalcProvider>
  );
};
