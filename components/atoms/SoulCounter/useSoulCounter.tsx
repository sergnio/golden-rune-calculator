import { ChangeEvent, useReducer, useState } from "react";
import { getRuneById } from "../../../constants/runes";
import { replaceRune } from "../../../utils/runeUtils";

export type SoulCounterReturn = {
  increment: (souls: number, id: number) => () => void;
  decrease: (souls: number, id: number) => () => void;
  total: number;
  reset(): void;
  runeCount: InventoryRune[];
  setExactCount: (id: number) => (e: ChangeEvent<HTMLInputElement>) => void;
};

export default (): SoulCounterReturn => {
  const [total, dispatch] = useReducer((state: number, action: any) => {
    if (action.type === "raw") {
      return action.value;
    }
    if (action === "reset") {
      return 0;
    }
    if (state <= 0 && action <= 0) {
      return 0;
    }
    return state + action;
  }, 0);

  const [runeCount, setCount] = useState<InventoryRune[]>([]);

  const increment = (souls: number, id: number) => () => {
    dispatch(souls);
    const foundRune = runeCount.find((r) => r.id === id);
    if (foundRune) {
      const editedRune = { ...foundRune, count: foundRune.count + 1 };
      setCount(replaceRune(id, runeCount, editedRune));
    } else {
      const rune: InventoryRune = { ...getRuneById(id), count: 1 };
      setCount([...runeCount, rune]);
    }
  };

  const decrease = (souls: number, id: number) => () => {
    if (!total) return;
    dispatch(-souls);
    const foundRune = runeCount.find((r) => r.id === id);
    if (foundRune) {
      const editedRune = { ...foundRune, count: foundRune.count - 1 };
      setCount(replaceRune(id, runeCount, editedRune));
    }
    // if (runeCount[id] <= 0) {
    //   const newCounts = { ...runeCount };
    //   setCount(newCounts);
    // }
  };

  const reset = () => {
    dispatch("reset");
    setCount([]);
  };

  const dispatchTotalSouls = (newRuneCount: InventoryRune[]) => {
    const initialValue = 0;
    const rawTotal = newRuneCount.reduce(
      (previous, current) => previous + current.count,
      initialValue
    );
    console.log("dispatching", rawTotal);
    dispatch({ type: "raw", value: rawTotal });
  };

  const setExactCount = (id: number) => (e: ChangeEvent<HTMLInputElement>) => {
    // extremely janky work around when manually setting the number of runes, since I started with redux
    // further reason why redux sucks :P
    const inputValue = parseInt(e.currentTarget.value);
    const foundRune = runeCount.find((r) => r.id === id);
    if (foundRune) {
      const newRune: InventoryRune = {
        ...foundRune,
        count: inputValue,
      };
      const newRuneCount = replaceRune(id, runeCount, newRune);
      dispatchTotalSouls(newRuneCount);
      console.log("setting count", runeCount);
      setCount(newRuneCount);
    } else {
      const rune: InventoryRune = { ...getRuneById(id), count: inputValue };
      console.log("setting count", runeCount);
      const newRuneCount = [...runeCount, rune];
      dispatchTotalSouls(newRuneCount);
      setCount(newRuneCount);
    }
  };

  return { total, reset, decrease, increment, runeCount, setExactCount };
};
