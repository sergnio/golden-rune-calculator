import { disallowNonNumbers } from "../../utils/inputHelpers";
import { useState } from "react";

export default () => {
  const [heldRuneCount, setHeldRuneCount] = useState<Undefinable<number>>();

  return (
    <div>
      <label>
        Number of Currently Held Runes
        <input
          name="heldRunes"
          type="number"
          className="heldRunes"
          onKeyDown={disallowNonNumbers}
          value={heldRuneCount}
          onChange={(event) => {
            // @ts-ignore
            if (event?.target?.value) {
              // @ts-ignore
              setHeldRuneCount(event.target.value);
            } else {
              setHeldRuneCount(0);
            }
          }}
        />
      </label>
    </div>
  );
};
