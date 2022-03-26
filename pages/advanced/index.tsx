import { Routes } from "../../infrastructure/routes";
import EnterRunes from "../../components/atoms/EnterRunes/EnterRunes";

export default () => (
  <EnterRunes
    label={"Number of Currently Held Runes"}
    nextRoute={Routes.advancedRouteDesiredRunes}
  />
);
