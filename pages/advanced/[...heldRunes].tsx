import { useRouter } from "next/router";
import EnterRunes from "../../components/atoms/EnterRunes";
import { Routes } from "../../infrastructure/routes";

export default () => {
  const {
    query: { heldRunes },
  } = useRouter();

  if (!heldRunes) {
    console.log("heldRunes", heldRunes);
    return <h1>loading...</h1>;
    // route back home
  } else {
    console.log("has some", heldRunes);
  }

  const hasDesiredRunes = heldRunes[1];

  return (
    <>
      <h1>{JSON.stringify(heldRunes)}</h1>
      {!hasDesiredRunes && (
        <EnterRunes
          nextRoute={Routes.advancedRouteInventoryRunes(Number(heldRunes))}
        />
      )}
    </>
  );
};
