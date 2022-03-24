import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";

export default () => {
  const {
    query: { heldRunes },
  } = useRouter();

  return <h1>Held runes: {JSON.stringify(heldRunes)}</h1>;
};
