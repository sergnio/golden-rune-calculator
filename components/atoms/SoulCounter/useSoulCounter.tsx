import { ChangeEvent, useReducer, useState } from "react";
import { getRuneById } from "../../../constants/runes";
import { replaceRune } from "../../../utils/runeUtils";

export type SoulCounterReturn = {
  increase: (id: number) => () => void;
  decrease: (id: number) => () => void;
  reset(): void;
  runeCount: InventoryRune[];
  setExactCount: (id: number) => (e: ChangeEvent<HTMLInputElement>) => void;
};

export default (): SoulCounterReturn => {
  const [runeCount, setCount] = useState<InventoryRune[]>([]);

  const increase = (id: number) => () => {
    const foundRune = runeCount.find((r) => r.id === id);
    if (foundRune) {
      const editedRune = { ...foundRune, count: foundRune.count + 1 };
      setCount(replaceRune(id, runeCount, editedRune));
    } else {
      const rune: InventoryRune = { ...getRuneById(id), count: 1 };
      setCount([...runeCount, rune]);
    }
  };

  const decrease = (id: number) => () => {
    const foundRune = runeCount.find((r) => r.id === id);
    if (foundRune) {
      const editedRune = { ...foundRune, count: foundRune.count - 1 };
      setCount(replaceRune(id, runeCount, editedRune));
    }
  };

  const reset = () => {
    setCount([]);
  };

  const setExactCount = (id: number) => (e: ChangeEvent<HTMLInputElement>) => {
    // extremely janky work around when manually setting the number of runes, since I started with redux
    // further reason why redux sucks :P
    const inputValue = parseInt(e.currentTarget.value) || 0;
    console.log(inputValue);
    const foundRune = runeCount.find((r) => r.id === id);
    if (foundRune) {
      const newRune: InventoryRune = {
        ...foundRune,
        count: inputValue,
      };
      const newRuneCount = replaceRune(id, runeCount, newRune);
      setCount(newRuneCount);
    } else {
      const rune: InventoryRune = { ...getRuneById(id), count: inputValue };
      const newRuneCount = [...runeCount, rune];
      setCount(newRuneCount);
    }
  };

  return { reset, decrease, increase, runeCount, setExactCount };
};
