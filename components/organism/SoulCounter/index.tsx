import { useState } from "react";
import { allRunes } from "constants/runes";
import StickyFooter from "components/atoms/StickyFooter";
import ValueOverlay from "components/atoms/ValueOverlay";
import SummaryOverlay from "components/atoms/SummaryOverlay";
import type { SoulCounterReturn as Props } from "./useSoulCounter";
import RuneList from "components/RuneList";
import styles from "./styles.module.scss";

const SoulContainer = (props: Props) => {
  const [overlayOpen, setOverlayOpen] = useState<boolean>(false);
  const [summaryOpen, setSummaryOpen] = useState<boolean>(false);

  return (
    <>
      <div className={styles.Container}>
        <RuneList runes={allRunes} {...props} />
      </div>
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
