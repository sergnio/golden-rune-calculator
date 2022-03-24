import { disallowNonNumbers } from "../../utils/inputHelpers";
import { useState } from "react";
import Link from "next/link";
import { Routes } from "../../infrastructure/routes";
import NumberInput from "../../components/atoms/NumberInput";

export default () => {
  const [heldRuneCount, setHeldRuneCount] = useState<Undefinable<number>>();

  return (
    <div>
      <NumberInput
        label="Number of Currently Held Runes"
        value={heldRuneCount}
        setter={setHeldRuneCount}
      />
      <Link
        href={Routes.advancedRouteDesiredRunes(heldRuneCount as number)}
        passHref
      >
        <button
          disabled={
            (heldRuneCount && heldRuneCount <= 0) || !Boolean(heldRuneCount)
          }
        >
          Next Step
        </button>
      </Link>
    </div>
  );
};
