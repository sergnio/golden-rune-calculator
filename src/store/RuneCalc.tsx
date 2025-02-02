import { create } from "zustand";
import { allRunes, Rune } from "@/constants/runes";

export type InventoryRune = {
  count: number;
  consumed: boolean;
} & Rune;

const runesWithCount = allRunes.map((rune) => ({
  ...rune,
  count: 0,
  consumed: false,
}));

interface RuneCalcState {
  runesHeld: number;
  runesNeeded: number;
  runes: InventoryRune[];
  setRunesHeld: (runes: number) => void;
  setRunesNeeded: (runes: number) => void;
  setRuneCount: (rune: InventoryRune, count: number) => void;
  consumeRune: (rune: InventoryRune, consumed: boolean) => void;
}

export const useRuneCalcStore = create<RuneCalcState>(
  (set, get) =>
    ({
      // Global state
      runes: runesWithCount,

      // How many runes you already hold
      runesHeld: 0,
      setRunesHeld: (runes: number) => {
        set({ runesHeld: runes });
      },

      // How many runes you need
      runesNeeded: 0,
      setRunesNeeded: (runes: number) => {
        set({ runesNeeded: runes });
      },

      // Set the count for a specific rune
      setRuneCount: (setRune: InventoryRune, count: number) => {
        const runes = get().runes;
        set({
          runes: [...runes].map((rune) =>
            rune.name === setRune.name ? { ...rune, count } : rune
          ),
        });
      },

      // Mark a rune as consumed
      consumeRune: (consumedRune: InventoryRune, consumed: boolean) => {
        const runes = get().runes;
        set({
          runes: [...runes].map((rune) =>
            rune.name === consumedRune.name ? { ...rune, consumed } : rune
          ),
        });
      },
    } satisfies RuneCalcState)
);

/**
 * COMPUTE HELPERS
 */

// Get the value of all runes added
export const useTotalRunes = (): number => {
  const runes = useRuneCalcStore((state) => state.runes);

  return runes.reduce(
    (previous, current) => previous + current.count * current.souls,
    0
  );
};

// Get all runes that have been added to count
export const useHeldRunes = (): InventoryRune[] => {
  const runes = useRuneCalcStore((state) => state.runes);
  return runes.filter((rune) => rune.count > 0);
};
