export const replaceRune = (
  name: string,
  runeCount: InventoryRune[],
  editedRune: InventoryRune
): InventoryRune[] =>
  runeCount.map((rune) => (rune.name === name ? editedRune : rune));
