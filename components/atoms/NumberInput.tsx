import { disallowNonNumbers } from "../../utils/inputHelpers";
import { Dispatch, SetStateAction } from "react";

interface Props {
  label: string;
  value: Undefinable<number>;
  setter: Dispatch<SetStateAction<Undefinable<number>>>;
}

export default ({ label, value, setter }: Props) => (
  <label>
    {label}
    <div>
      <input
        name="heldRunes"
        type="number"
        className="heldRunes"
        onKeyDown={disallowNonNumbers}
        autoFocus
        min="0"
        value={value}
        onChange={(event) => {
          if (event?.target?.value) {
            setter(Number(event.target.value));
          } else {
            setter(undefined);
          }
        }}
      />
    </div>
  </label>
);
