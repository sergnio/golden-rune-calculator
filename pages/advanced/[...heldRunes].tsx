import { useRouter } from "next/router";
import { Routes } from "../../infrastructure/routes";
import EnterRunes from "../../components/atoms/EnterRunes/EnterRunes";
import SoulCounter from "../../components/atoms/SoulCounter/SoulCounter";
import useSoulCounter from "../../components/atoms/SoulCounter/useSoulCounter";
import { calculateHighestFirst } from "../../utils/calculate";
import Modal from "../../components/atoms/Modal/Modal";

export default () => {
  const {
    query: { heldRunes },
  } = useRouter();

  const props = useSoulCounter();
  const { runeCount } = props;

  if (!heldRunes) {
    return <h1>loading...</h1>;
  }

  const currentRunes = heldRunes[0];
  const desiredRunes = heldRunes[1];
  const onCalculate = () => {
    console.log("calculating");
    const result = calculateHighestFirst(
      parseInt(currentRunes),
      parseInt(desiredRunes),
      runeCount
    );
    console.log("result", result);
  };

  return (
    <>
      <h1>{JSON.stringify(heldRunes)}</h1>
      {!desiredRunes ? (
        <EnterRunes
          label={"Number of Desired Runes"}
          nextRoute={Routes.advancedRouteInventoryRunes(Number(heldRunes))}
        />
      ) : (
        <>
          <button onClick={onCalculate}>Calculate!</button>
          <SoulCounter {...props} />
          <Modal />
        </>
      )}
    </>
  );
};
