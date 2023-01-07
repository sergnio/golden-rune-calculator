import { useState } from "react";
import { allRunes } from "constants/runes";
import StickyFooter from "components/molecules/StickyFooter";
import ValueOverlay from "components/molecules/ValueOverlay";
import SummaryOverlay from "components/molecules/SummaryOverlay";
import type { SoulCounterReturn as Props } from "./useSoulCounter";
import RuneList from "components/molecules/RuneList";

const SoulContainer = (props: Props) => {
  const [overlayOpen, setOverlayOpen] = useState<boolean>(false);
  const [summaryOpen, setSummaryOpen] = useState<boolean>(false);

  return (
    <>
      <RuneList runes={allRunes} {...props} />
      <StickyFooter
        setSummaryOpen={setSummaryOpen}
        setOverlayOpen={setOverlayOpen}
        {...props}
      />
      <ValueOverlay open={overlayOpen} setOpen={setOverlayOpen} {...props} />
      <SummaryOverlay open={summaryOpen} setOpen={setSummaryOpen} {...props} />
    </>
  );
};

export default SoulContainer;
