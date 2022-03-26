import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import NumberInput from "../NumberInput/NumberInput";

interface Props {
  nextRoute: Function;
  label: string;
}

export default ({ label, nextRoute }: Props) => {
  const [heldRuneCount, setHeldRuneCount] = useState<Undefinable<number>>();
  const { push } = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    push(nextRoute(heldRuneCount as number));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <NumberInput
          label={label}
          value={heldRuneCount}
          setter={setHeldRuneCount}
        />
        <button
          disabled={
            (heldRuneCount && heldRuneCount <= 0) || !Boolean(heldRuneCount)
          }
          type="submit"
        >
          Next Step
        </button>
      </form>
    </div>
  );
};
