import { useState } from "react";
import { useRouter } from "next/router";
import { Routes } from "../../infrastructure/routes";
import { CalcReturn, calculateHighestFirst } from "../../utils/calculate";
import EnterRunes from "../../components/atoms/EnterRunes/EnterRunes";
import SoulCounter from "../../components/atoms/SoulCounter";
import useSoulCounter from "../../components/atoms/SoulCounter/useSoulCounter";
import Modal from "../../components/atoms/Modal/Modal";
import useModal from "../../components/atoms/Modal/useModal";
import ExperimentalHeader from "../../components/atoms/Header/ExperimentalHeader";
import styles from "./HeldRunes.module.css";

export default () => {
  const {
    query: { heldRunes },
  } = useRouter();
  const [finalRunes, setFinalRunes] = useState<Undefinable<CalcReturn>>();

  const modalProps = useModal();

  const props = useSoulCounter();
  const { runeCount } = props;

  if (!heldRunes) {
    return <h1>loading...</h1>;
  }

  const currentRunes = heldRunes[0];
  const desiredRunes = heldRunes[1];
  const onCalculate = () => {
    const result = calculateHighestFirst(
      parseInt(currentRunes),
      parseInt(desiredRunes),
      runeCount
    );
    setFinalRunes(result);
    modalProps.toggleModal();
  };

  return (
    <>
      <ExperimentalHeader />
      {currentRunes === desiredRunes ? (
        <h2>You have exactly the runes you need! Have fun :)</h2>
      ) : !desiredRunes ? (
        <EnterRunes
          label={"Number of Desired Runes"}
          nextRoute={Routes.advancedRouteInventoryRunes(Number(heldRunes))}
          validate={(inputDesiredRunes) =>
            inputDesiredRunes >= parseInt(currentRunes)
          }
          errorMessage="Please enter a rune count higher than currently held runes!"
        />
      ) : (
        <>
          <button
            className={styles.calculateButton}
            disabled={!runeCount.some((r) => r.count > 0)}
            onClick={onCalculate}
          >
            Calculate for me!
          </button>
          <SoulCounter {...props} />
          <Modal {...modalProps} finalRunes={finalRunes} />
        </>
      )}
    </>
  );
};
