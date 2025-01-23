import { RuneList } from "../RuneList";
import StickyFooter from "../StickyFooter";

export const CountRunes = ({
  prevScreen,
  nextScreen,
}: {
  nextScreen: () => void;
  prevScreen: () => void;
}) => {
  return (
    <div>
      <RuneList />
      <StickyFooter prevScreen={prevScreen} nextScreen={nextScreen} />
    </div>
  );
};
