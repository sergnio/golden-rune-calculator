import { Pagination } from "./Pagination";

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
