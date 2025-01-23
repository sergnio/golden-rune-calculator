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
};

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

  return (
    <RuneCalcProvider
      value={{ runesHeld, setRunesHeld, runesNeeded, setRunesNeeded }}
    >
      {children}
    </RuneCalcProvider>
  );
};
