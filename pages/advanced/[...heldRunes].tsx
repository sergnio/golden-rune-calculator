import { useRouter } from "next/router";
import { Routes } from "../../infrastructure/routes";
import EnterRunes from "../../components/atoms/EnterRunes/EnterRunes";

export default () => {
  const {
    query: { heldRunes },
  } = useRouter();

  if (!heldRunes) {
    return <h1>loading...</h1>;
  }

  const hasDesiredRunes = heldRunes[1];

  return (
    <>
      <h1>{JSON.stringify(heldRunes)}</h1>
      {!hasDesiredRunes && (
        <EnterRunes
          label={"Number of Desired Runes"}
          nextRoute={Routes.advancedRouteInventoryRunes(Number(heldRunes))}
        />
      )}
    </>
  );
};
