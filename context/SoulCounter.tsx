import {
  createContext,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { allRunes, getRuneByName } from "constants/runes";
import { runeTotal } from "utils/calculate";
import { replaceRune } from "utils/runeUtils";

export const SoulCounterContext = createContext<SoulCounterReturn>(
  {} as SoulCounterReturn
);

export type SoulCounterReturn = {
  increase: (name: string) => () => void;
  decrease: (name: string) => () => void;
  reset(): void;
  runeCount: InventoryRune[];
  setExactCount: (name: string) => (e: ChangeEvent<HTMLInputElement>) => void;
  total: number;
  needed: number;
  totalNeeded: number;
  held: number;
  setNeeded: Dispatch<SetStateAction<number>>;
  setHeld: Dispatch<SetStateAction<number>>;
};

export const useSoulCounter = (): SoulCounterReturn => {
  const [runeCount, setCount] = useState<InventoryRune[]>(
    allRunes.map((rune) => ({ ...rune, count: 0 }))
  );

  const [held, setHeld] = useState<number>(0);
  const [needed, setNeeded] = useState<number>(0);

  const increase = (name: string) => () => {
    const foundRune = runeCount.find((r) => r.name === name);
    if (foundRune) {
      const editedRune = { ...foundRune, count: foundRune.count + 1 };
      setCount(replaceRune(foundRune.name, runeCount, editedRune));
    } else {
      const rune: InventoryRune = { ...getRuneByName(name), count: 1 };
      setCount([...runeCount, rune]);
    }
  };

  const decrease = (name: string) => () => {
    const foundRune = runeCount.find((r) => r.name === name);
    if (foundRune) {
      const editedRune = { ...foundRune, count: foundRune.count - 1 };
      setCount(replaceRune(name, runeCount, editedRune));
    }
  };

  const reset = () => {
    setCount(allRunes.map((rune) => ({ ...rune, count: 0 })));
    setHeld(0);
    setNeeded(0);
  };

  const setExactCount =
    (name: string) => (e: ChangeEvent<HTMLInputElement>) => {
      // extremely janky work around when manually setting the number of runes, since I started with redux
      // further reason why redux sucks :P
      const inputValue = parseInt(e.currentTarget.value) || 0;
      const foundRune = runeCount.find((r) => r.name === name);
      if (foundRune) {
        const newRune: InventoryRune = {
          ...foundRune,
          count: inputValue,
        };
        const newRuneCount = replaceRune(name, runeCount, newRune);
        setCount(newRuneCount);
      } else {
        const rune: InventoryRune = {
          ...getRuneByName(name),
          count: inputValue,
        };
        const newRuneCount = [...runeCount, rune];
        setCount(newRuneCount);
      }
    };

  const total = runeTotal(runeCount);
  const totalNeeded = needed - (held + total);

  return {
    reset,
    decrease,
    increase,
    runeCount,
    setExactCount,
    total,
    totalNeeded,
    needed,
    held,
    setNeeded,
    setHeld,
  };
};
