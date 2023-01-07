import { useState } from "react";
import { allRunes } from "constants/runes";
import StickyFooter from "components/molecules/StickyFooter";
import ValueOverlay from "components/molecules/ValueOverlay";
import SummaryOverlay from "components/molecules/SummaryOverlay";
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
      <ValueOverlay open={overlayOpen} setOpen={setOverlayOpen} />
      <SummaryOverlay open={summaryOpen} setOpen={setSummaryOpen} />
    </SoulCounterContext.Provider>
  );
};

export default SoulContainer;
