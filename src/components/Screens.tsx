import { Pagination } from "./Pagination";
import { useRuneCalc } from "./RuneCalc";

export const EnterRunes = ({ nextScreen }: { nextScreen: () => void }) => {
  const runeCalc = useRuneCalc();

  return (
    <div>
      <div>Enter Runes</div>
      <Pagination nextScreen={nextScreen} />
    </div>
  );
};

export const CountRunes = ({
  prevScreen,
  nextScreen,
}: {
  nextScreen: () => void;
  prevScreen: () => void;
}) => {
  return (
    <div>
      <div>Count Runes</div>
      <Pagination prevScreen={prevScreen} nextScreen={nextScreen} />
    </div>
  );
};

export const Summary = ({ prevScreen }: { prevScreen: () => void }) => {
  return (
    <div>
      <div>Summary</div>
      <Pagination prevScreen={prevScreen} />
    </div>
  );
};
