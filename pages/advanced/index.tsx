import { Routes } from "../../infrastructure/routes";
import EnterRunes from "../../components/atoms/EnterRunes/EnterRunes";
import ExperimentalHeader from "../../components/atoms/Header/ExperimentalHeader";

export default () => (
  <>
    <ExperimentalHeader />
    <EnterRunes
      label={"Number of Currently Held Runes"}
      nextRoute={Routes.advancedRouteDesiredRunes}
    />
  </>
);
