import { create } from "zustand";
import { allRunes, Rune } from "@/constants/runes";

export type InventoryRune = {
  count: number; // default 0
} & Rune;

const runesWithCount = allRunes.map((rune) => ({ ...rune, count: 0 }));

interface RuneCalcState {
  runesHeld: number;
  runesNeeded: number;
  runes: InventoryRune[];
  setRunesHeld: (runes: number) => void;
  setRunesNeeded: (runes: number) => void;
  setRuneCount: (rune: InventoryRune, count: number) => void;
}

export const useRuneCalcStore = create<RuneCalcState>((set, get) => ({
  runesHeld: 0,
  runesNeeded: 0,
  runes: runesWithCount,
  setRunesHeld: (runes: number) => {
    set({ runesHeld: runes });
  },
  setRunesNeeded: (runes: number) => {
    set({ runesNeeded: runes });
  },
  setRuneCount: (setRune: InventoryRune, count: number) => {
    const runes = get().runes;
    set({
      runes: [...runes].map((rune) =>
        rune.name === setRune.name ? { ...rune, count } : rune
      ),
    });
  },
  name: "rune-calc-storage",
}));

/**
 * COMPUTE HELPERS
 */
export const calcTotalRunes = () => {
  const runes = useRuneCalcStore.getState().runes;
  return runes.reduce(
    (previous, current) => previous + current.count * current.souls,
    0
  );
};

export const useTotalRunes = () => {
  const runes = useRuneCalcStore((state) => state.runes);
  return runes.reduce(
    (previous, current) => previous + current.count * current.souls,
    0
  );
};

export const useRemainingNeeded = () => {
  const runesHeld = useRuneCalcStore((state) => state.runesHeld);
  const runesNeeded = useRuneCalcStore((state) => state.runesNeeded);
  const totalRunes = useTotalRunes();

  return runesNeeded - (runesHeld + totalRunes);
};

export const useHeldRunes = () => {
  const runes = useRuneCalcStore((state) => state.runes);
  return runes.filter((rune) => rune.count > 0);
};
