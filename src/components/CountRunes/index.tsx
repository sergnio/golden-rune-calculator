import { RuneList } from "../RuneList";
import StickyFooter from "../StickyFooter";

export const CountRunes = ({}: {
  nextScreen: () => void;
  prevScreen: () => void;
}) => {
  return (
    <div>
      <RuneList />
      <StickyFooter />
    </div>
  );
};
