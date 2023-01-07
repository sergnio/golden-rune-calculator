import { useState } from "react";
import { allRunes } from "constants/runes";
import StickyFooter from "components/molecules/StickyFooter";
import ModalValue from "components/molecules/ModalValue";
import ModalSummary from "components/molecules/ModalSummary";
import RuneList from "components/molecules/RuneList";
import { SoulCounterContext, useSoulCounter } from "context/SoulCounter";

const SoulContainer = () => {
  const [overlayOpen, setOverlayOpen] = useState<boolean>(false);
  const [summaryOpen, setSummaryOpen] = useState<boolean>(false);

  return (
    <SoulCounterContext.Provider value={useSoulCounter()}>
      <RuneList runes={allRunes} />
      <StickyFooter
        setSummaryOpen={setSummaryOpen}
        setOverlayOpen={setOverlayOpen}
      />
      <ModalValue open={overlayOpen} setOpen={setOverlayOpen} />
      <ModalSummary open={summaryOpen} setOpen={setSummaryOpen} />
    </SoulCounterContext.Provider>
  );
};

export default SoulContainer;
