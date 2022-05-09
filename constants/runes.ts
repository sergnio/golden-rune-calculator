export enum RuneLabel {
  GoldenRune1 = "Golden Rune (1)",
  GoldenRune2 = "Golden Rune (2)",
  GoldenRune3 = "Golden Rune (3)",
  GoldenRune4 = "Golden Rune (4)",
  GoldenRune5 = "Golden Rune (5)",
  GoldenRune6 = "Golden Rune (6)",
  GoldenRune7 = "Golden Rune (7)",
  GoldenRune8 = "Golden Rune (8)",
  GoldenRune9 = "Golden Rune (9)",
  GoldenRune10 = "Golden Rune (10)",
  GoldenRune11 = "Golden Rune (11)",
  GoldenRune12 = "Golden Rune (12)",
  GoldenRune13 = "Golden Rune (13)",
  HerosRune1 = "Hero's Rune (1)",
  HerosRune2 = "Hero's Rune (2)",
  HerosRune3 = "Hero's Rune (3)",
  HerosRune4 = "Hero's Rune (4)",
  HerosRune5 = "Hero's Rune (5)",
  LordsRune = "Lord's Rune",
  NumensRune = "Numen's Rune",
}

/**
 * Helper function to find a rune by name instead of knowing its id
 * @param rune
 */
export const getRuneByName = (rune: RuneLabel): Rune =>
  allRunes.find(
    (foundRune) => foundRune.label === rune
    // cheating since this should always return true if we're using RuneLabel as the param
  ) as Rune;

export const getRuneById = (runeId: number): Rune =>
  allRunes.find(
    (foundRune) => foundRune.id === runeId
    // cheating since this should always return true if we're using RuneLabel as the param
  ) as Rune;

export const allRunes: Rune[] = [
  {
    id: 1,
    label: RuneLabel.GoldenRune1,
    soulsGiven: 200,
  },
  {
    id: 2,
    label: RuneLabel.GoldenRune2,
    soulsGiven: 400,
  },
  {
    id: 3,
    label: RuneLabel.GoldenRune3,
    soulsGiven: 800,
  },
  {
    id: 4,
    label: RuneLabel.GoldenRune4,
    soulsGiven: 1200,
  },
  {
    id: 5,
    label: RuneLabel.GoldenRune5,
    soulsGiven: 1600,
  },
  {
    id: 6,
    label: RuneLabel.GoldenRune6,
    soulsGiven: 2000,
  },
  {
    id: 7,
    label: RuneLabel.GoldenRune7,
    soulsGiven: 2500,
  },
  {
    id: 8,
    label: RuneLabel.GoldenRune8,
    soulsGiven: 3000,
  },
  {
    id: 9,
    label: RuneLabel.GoldenRune9,
    soulsGiven: 3800,
  },
  {
    id: 10,
    label: RuneLabel.GoldenRune10,
    soulsGiven: 5000,
  },
  {
    id: 11,
    label: RuneLabel.GoldenRune11,
    soulsGiven: 6200,
  },
  {
    id: 12,
    label: RuneLabel.GoldenRune12,
    soulsGiven: 7500,
  },
  {
    id: 130,
    label: RuneLabel.GoldenRune13,
    soulsGiven: 10000,
  },
  {
    id: 13,
    label: RuneLabel.HerosRune1,
    soulsGiven: 15000,
  },
  {
    id: 14,
    label: RuneLabel.HerosRune2,
    soulsGiven: 20000,
  },
  {
    id: 15,
    label: RuneLabel.HerosRune3,
    soulsGiven: 25000,
  },
  {
    id: 16,
    label: RuneLabel.HerosRune4,
    soulsGiven: 30000,
  },
  {
    id: 17,
    label: RuneLabel.HerosRune5,
    soulsGiven: 35000,
  },
  {
    id: 18,
    label: RuneLabel.LordsRune,
    soulsGiven: 50000,
  },
  {
    id: 19,
    label: RuneLabel.NumensRune,
    soulsGiven: 12500,
  },
];
