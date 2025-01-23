export enum OverUnder {
  Over = "Over",
  Under = "Under",
  Equal = "Equal",
}

export const getOverUnder = (value: number): OverUnder => {
  if (value > 0) {
    return OverUnder["Under"];
  }
  if (value < 0) {
    return OverUnder["Over"];
  }
  return OverUnder["Equal"];
};
