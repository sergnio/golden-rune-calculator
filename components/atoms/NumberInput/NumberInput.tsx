import { Dispatch, SetStateAction } from "react";
import { disallowNonNumbers } from "../../../utils/inputHelpers";
import camelize from "../../../utils/camelize";

interface Props {
  label: string;
  value: Undefinable<number>;
  setter: Dispatch<SetStateAction<Undefinable<number>>>;
}

export default ({ label, value, setter }: Props) => {
  return (
    <label>
      {label}
      <div>
        <input
          name={camelize(label)} // change to camel label
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
};
