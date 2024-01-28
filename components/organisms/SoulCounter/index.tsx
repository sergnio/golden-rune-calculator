import { useState } from "react";
import { allRunes } from "constants/runes";
import StickyFooter from "components/molecules/StickyFooter";
import ModalValue from "components/molecules/ModalValue";
import ModalSummary from "components/molecules/ModalSummary";
import RuneList from "components/molecules/RuneList";
import { SoulCounterContext, useSoulCounter } from "context/SoulCounter";
import ModalStart from "components/molecules/ModalStart";

const SoulContainer = () => {
  const [startOpen, setStartOpen] = useState<boolean>(true);
  const [overlayOpen, setOverlayOpen] = useState<boolean>(false);
  const [summaryOpen, setSummaryOpen] = useState<boolean>(false);

  return (
    <SoulCounterContext.Provider value={useSoulCounter()}>
      <ModalStart open={startOpen} setOpen={setStartOpen} />
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
