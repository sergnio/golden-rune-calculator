type Rune = {
  id: number;
  soulsGiven: number;
  label: string;
};

type InventoryRune = {
  count: number; // default 0
} & Rune;
