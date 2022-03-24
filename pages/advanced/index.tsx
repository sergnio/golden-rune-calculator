import { disallowNonNumbers } from "../../utils/inputHelpers";
import { FormEvent, useState } from "react";
import Link from "next/link";
import { Routes } from "../../infrastructure/routes";
import NumberInput from "../../components/atoms/NumberInput";
import { useRouter } from "next/router";
import EnterRunes from "../../components/atoms/EnterRunes";

export default () => (
  <EnterRunes
    label={"Number of Currently Held Runes"}
    nextRoute={Routes.advancedRouteDesiredRunes}
  />
);
