export const replaceRune = (
  id: number,
  runeCount: InventoryRune[],
  editedRune: InventoryRune
): InventoryRune[] =>
  runeCount.map((rune) => (rune.id === id ? editedRune : rune));
