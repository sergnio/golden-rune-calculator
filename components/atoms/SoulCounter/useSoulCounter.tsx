import { useReducer, useState } from "react";

export type RuneCount = { [id: number]: number };
export default () => {
  const [total, dispatch] = useReducer((state: number, action: any) => {
    if (action === "reset") {
      return 0;
    }
    // @ts-ignore
    if (state <= 0 && action <= 0) {
      return 0;
    }
    // @ts-ignore
    return state + action;
  }, 0);

  const [runeCount, setCount] = useState<RuneCount>({});

  const increment = (souls: number, id: number) => () => {
    dispatch(souls);
    if (runeCount[id]) {
      setCount({ ...runeCount, [id]: runeCount[id] + 1 });
    } else {
      setCount({ ...runeCount, [id]: 1 });
    }
  };

  const decrease = (souls: number, id: number) => () => {
    if (!total) return;

    dispatch(-souls);
    if (runeCount[id]) {
      setCount({ ...runeCount, [id]: runeCount[id] - 1 });
    }
    if (runeCount[id] <= 0) {
      const newCounts = { ...runeCount };
      setCount(newCounts);
    }
  };

  const reset = () => {
    dispatch("reset");
    setCount({});
  };

  return { total, reset, decrease, increment, runeCount };
};
