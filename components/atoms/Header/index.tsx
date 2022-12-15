import { useState } from "react";
import Image from "next/image";
import { MdInfoOutline } from "react-icons/md";
import Github from "../Github";
import useSoulCounter from "../SoulCounter/useSoulCounter";
import Rune from "../../../assets/lordrune.png";
import styles from "./styles.module.scss";
import InfoOverlay from "../InfoOverlay";

const Header = () => {
  const [infoOpen, setInfoOpen] = useState<boolean>(false);
  const props = useSoulCounter();

  return (
    <>
      <nav className={styles.Nav}>
        <div className={styles.Logo}>
          <Image src={Rune} alt="golden rune" height={80} width={80} />
        </div>
        <button className={styles.Info} onClick={() => setInfoOpen(true)}>
          <MdInfoOutline />
        </button>
        <div className={styles.Links}>
          <a
            target="_blank"
            href="https://github.com/sergnio/golden-rune-calculator"
            rel="noreferrer"
            className={styles.Contribute}
          >
            <Github /> Contribute
          </a>
        </div>
      </nav>
      <InfoOverlay open={infoOpen} setOpen={setInfoOpen} {...props} />
    </>
  );
};

export default Header;
