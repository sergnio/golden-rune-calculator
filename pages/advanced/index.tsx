import { disallowNonNumbers } from "../../utils/inputHelpers";
import { useState } from "react";
import Link from "next/link";
import { Routes } from "../../infrastructure/routes";

export default () => {
  const [heldRuneCount, setHeldRuneCount] = useState<Undefinable<number>>();
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div>
      <label>
        Number of Currently Held Runes
        <div>
          <input
            name="heldRunes"
            type="number"
            className="heldRunes"
            onKeyDown={disallowNonNumbers}
            min="0"
            value={heldRuneCount}
            onChange={(event) => {
              // @ts-ignore
              if (event?.target?.value) {
                // @ts-ignore
                setHeldRuneCount(event.target.value);
              } else {
                setHeldRuneCount(undefined);
              }
            }}
          />
        </div>
      </label>
      <Link href={Routes.advancedRouteDesiredRunes(heldRuneCount as number)}>
        <button
          disabled={
            (heldRuneCount && heldRuneCount <= 0) || !Boolean(heldRuneCount)
          }
          onClick={handleClick}
        >
          Next Step
        </button>
      </Link>
    </div>
  );
};
