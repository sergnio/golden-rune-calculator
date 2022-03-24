type Rune = {
  id: number;
  soulsGiven: number;
  label: string;
};

type InventoryRune = {
  count: number; // default 0
} & Rune;

type Optional<T> = T | null | undefined;
type Nullable<T> = T | null;
type Undefinable<T> = T | undefined;
