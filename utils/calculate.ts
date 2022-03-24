export interface CalcReturn {
  runes: InventoryRune[];
  difference?: number;
}

// checks if the passed in rune + current count is less than our goal
const isWithin = (rune: Rune, currentCount: number, desiredAmount: number) =>
  rune.soulsGiven + currentCount <= desiredAmount;

export const calculateHighestFirst = (
  currentCount: number,
  desiredAmount: number,
  soulsOwned: InventoryRune[]
): CalcReturn => {
  /*
  Algorithm:
  while currentCount < desiredAmount:
    if soulsOwned = [] throw Error

    get the highest soul rune they own that keeps currentCount < desired amount
    if there isn't a soul rune that keeps count < desired amount, get the smallest one that goes over (or =)

    remove from souls owned and add to returnList
  return returnList

  future: if currentCount < desired amount && soulsLeft.length === 0, also return the difference
  * */
  let runningCount = currentCount;
  let returnRunes: InventoryRune[] = [];
  const updatedRunes: InventoryRune[] = [...soulsOwned];

  while (runningCount < desiredAmount) {
    let hasAtleastOneRune = updatedRunes.filter((rune) => rune.count > 0);
    if (!hasAtleastOneRune.length)
      return { runes: returnRunes, difference: desiredAmount - runningCount };

    let highestCountRune: Undefinable<InventoryRune>;

    updatedRunes.forEach((rune) => {
      if (
        // if we haven't yet found a rune
        (!highestCountRune &&
          // and it's within the limits
          isWithin(rune, runningCount, desiredAmount) &&
          // and we have at least 1
          rune.count > 0) ||
        // if we haven't yet found a rune
        (highestCountRune &&
          // if we've found a new rune that's greater than our current
          rune.soulsGiven > highestCountRune.soulsGiven &&
          // and it's within the limits
          isWithin(rune, runningCount, desiredAmount) &&
          // and we have at least 1 of those in our inventory
          rune.count > 0)
      ) {
        // then it's our new rune!
        highestCountRune = rune;
      }
    });

    // if we haven't found a rune, that means that means all runes take us over the limit...
    // need to find the smallest one
    if (!highestCountRune) {
      updatedRunes.forEach((rn) => {
        if (
          // if we haven't yet found one and we have at least one of this type
          (!highestCountRune && rn.count > 0) ||
          // if we have found one and it gives fewer souls than our current rune use it
          // we already know all runes already go over the max
          (highestCountRune &&
            rn.soulsGiven < highestCountRune.soulsGiven &&
            rn.count > 0)
        )
          highestCountRune = rn;
      });
    }
    // remove a rune of that count
    if (highestCountRune) {
      returnRunes = [...returnRunes, { ...highestCountRune }];
      runningCount += highestCountRune.soulsGiven;
      highestCountRune.count -= 1;
    }
  }

  return {
    runes: returnRunes,
    difference: desiredAmount - runningCount,
  };
};
