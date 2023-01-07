type Rune = {
  name: string;
  souls: number;
};

type InventoryRune = {
  count: number; // default 0
} & Rune;
