import { sendGAEvent } from "@next/third-parties/google";
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
  consumeRunes: () => void;
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
        sendGAEvent("event", "setRuneCount", { rune: setRune.name, count });
        const runes = get().runes;
        set({
          runes: [...runes].map((rune) =>
            rune.name === setRune.name ? { ...rune, count } : rune
          ),
        });
      },

      // Mark a rune as consumed
      consumeRune: (consumedRune: InventoryRune, consumed: boolean) => {
        sendGAEvent("event", "consumeRune", {
          rune: consumedRune.name,
          consumed,
        });
        const runes = get().runes;
        set({
          runes: [...runes].map((rune) =>
            rune.name === consumedRune.name ? { ...rune, consumed } : rune
          ),
        });
      },

      // Consume all runes marked as consumed
      // Tallies them up, adds them to runesHeld, and marks their count as 0
      consumeRunes: () => {
        sendGAEvent("event", "consumeRunes");

        const runes = get().runes;
        const runesHeld = get().runesHeld;

        const consumedRunes = runes.filter((rune) => rune.consumed === true);
        if (consumedRunes.length === 0) {
          return;
        }

        const consumedRunesTotal = consumedRunes.reduce(
          (acc, rune) => acc + rune.count * rune.souls,
          0
        );

        set({
          runesHeld: runesHeld + consumedRunesTotal,
          runes: [...runes].map((rune) => {
            if (rune.consumed) {
              return {
                ...rune,
                consumed: false,
                count: 0,
              };
            }
            return rune;
          }),
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
