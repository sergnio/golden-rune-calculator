import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import NumberInput from "../NumberInput/NumberInput";
import styles from "./EnterRunes.module.css";

interface Props {
  nextRoute: Function;
  label: string;
  validate?: (runeCount: number) => boolean;
  errorMessage?: string;
}

export default ({ label, nextRoute, validate, errorMessage }: Props) => {
  const [heldRuneCount, setHeldRuneCount] = useState<Undefinable<number>>();
  const [error, setError] = useState<Undefinable<string>>();
  const { push } = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log("submitting");
    e.preventDefault();
    console.log(heldRuneCount);
    if (!validate) {
      push(nextRoute(heldRuneCount as number));
      setError(undefined);
    } else if (validate && heldRuneCount && validate(heldRuneCount)) {
      push(nextRoute(heldRuneCount as number));
      setError(undefined);
    } else {
      console.log("error I guess");
      setError(errorMessage);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <NumberInput
          label={label}
          value={heldRuneCount}
          setter={setHeldRuneCount}
        />
        {error && <p className={styles.error}>Error! {error}</p>}
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
