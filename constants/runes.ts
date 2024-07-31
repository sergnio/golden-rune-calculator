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
  NumensRune = "Numen's Rune",
  HerosRune1 = "Hero's Rune (1)",
  HerosRune2 = "Hero's Rune (2)",
  HerosRune3 = "Hero's Rune (3)",
  HerosRune4 = "Hero's Rune (4)",
  HerosRune5 = "Hero's Rune (5)",
  LordsRune = "Lord's Rune",
  BrokenRune = "Broken Rune",
  ShadowRealmRune1 = "Shadow Realm Rune (1)",
  ShadowRealmRune2 = "Shadow Realm Rune (2)",
  ShadowRealmRune3 = "Shadow Realm Rune (3)",
  ShadowRealmRune4 = "Shadow Realm Rune (4)",
  ShadowRealmRune5 = "Shadow Realm Rune (5)",
  ShadowRealmRune6 = "Shadow Realm Rune (6)",
  ShadowRealmRune7 = "Shadow Realm Rune (7)",
  LedasRune = "Leda's Rune",
  RuneOfAnUnsungHero = "Rune of an Unsung Hero",
  Marikasrune = "Marika's rune",
}

export const getRuneById = (runeId: number): Rune =>
  allRunes.find((foundRune) => foundRune.souls === runeId)!;

export const allRunes: Rune[] = [
  {
    name: RuneLabel.GoldenRune1,
    souls: 200,
  },
  {
    name: RuneLabel.GoldenRune2,
    souls: 400,
  },
  {
    name: RuneLabel.GoldenRune3,
    souls: 800,
  },
  {
    name: RuneLabel.GoldenRune4,
    souls: 1200,
  },
  {
    name: RuneLabel.GoldenRune5,
    souls: 1600,
  },
  {
    name: RuneLabel.GoldenRune6,
    souls: 2000,
  },
  {
    name: RuneLabel.GoldenRune7,
    souls: 2500,
  },
  {
    name: RuneLabel.GoldenRune8,
    souls: 3000,
  },
  {
    name: RuneLabel.GoldenRune9,
    souls: 3800,
  },
  {
    name: RuneLabel.GoldenRune10,
    souls: 5000,
  },
  {
    name: RuneLabel.GoldenRune11,
    souls: 6200,
  },
  {
    name: RuneLabel.GoldenRune12,
    souls: 7500,
  },
  {
    name: RuneLabel.GoldenRune13,
    souls: 10000,
  },
  {
    name: RuneLabel.NumensRune,
    souls: 12500,
  },
  {
    name: RuneLabel.HerosRune1,
    souls: 15000,
  },
  {
    name: RuneLabel.HerosRune2,
    souls: 20000,
  },
  {
    name: RuneLabel.HerosRune3,
    souls: 25000,
  },
  {
    name: RuneLabel.HerosRune4,
    souls: 30000,
  },
  {
    name: RuneLabel.HerosRune5,
    souls: 35000,
  },
  {
    name: RuneLabel.LordsRune,
    souls: 50000,
  },
  {
    name: RuneLabel.BrokenRune,
    souls: 500,
  },
  {
    name: RuneLabel.ShadowRealmRune1,
    souls: 7500,
  },
  {
    name: RuneLabel.ShadowRealmRune2,
    souls: 10000,
  },
  {
    name: RuneLabel.ShadowRealmRune3,
    souls: 12500,
  },
  {
    name: RuneLabel.ShadowRealmRune4,
    souls: 15000,
  },
  {
    name: RuneLabel.ShadowRealmRune5,
    souls: 17500,
  },
  {
    name: RuneLabel.ShadowRealmRune6,
    souls: 22500,
  },
  {
    name: RuneLabel.ShadowRealmRune7,
    souls: 30000,
  },
  {
    name: RuneLabel.LedasRune,
    souls: 40000,
  },
  {
    name: RuneLabel.RuneOfAnUnsungHero,
    souls: 50000,
  },
  {
    name: RuneLabel.Marikasrune,
    souls: 80000,
  },
];
