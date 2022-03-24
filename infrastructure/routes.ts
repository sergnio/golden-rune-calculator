export const Routes = {
  home: "/",
  advancedRouteHeldRunesEntry: "/advanced",
  advancedRouteDesiredRunes: (heldRunes: number) => `/advanced/${heldRunes}`,
  advancedRouteInventoryRunes: "/advanced/:heldRunes/:desiredRunes",
};
