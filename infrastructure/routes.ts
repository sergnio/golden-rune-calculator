export const Routes = {
  home: "/",
  advancedRouteHeldRunesEntry: "/advanced",
  advancedRouteDesiredRunes: (heldRunes: number) => `/advanced/${heldRunes}`,
  advancedRouteInventoryRunes: (heldRunes: number) => (desiredRunes: number) =>
    `${Routes.advancedRouteDesiredRunes(heldRunes)}/${desiredRunes}`,
};
