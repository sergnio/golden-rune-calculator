export const replaceRune = (
  souls: number,
  runeCount: InventoryRune[],
  editedRune: InventoryRune
): InventoryRune[] =>
  runeCount.map((rune) => (rune.souls === souls ? editedRune : rune));
