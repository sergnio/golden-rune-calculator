import { useState } from "react";
import Image from "next/image";
import { MdInfoOutline } from "react-icons/md";
import Github from "components/atoms/Github";
import ModalInfo from "components/molecules/ModalInfo";
import Rune from "assets/lordrune.png";
import styles from "./styles.module.scss";

const Header = () => {
  const [infoOpen, setInfoOpen] = useState<boolean>(false);

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
      <ModalInfo open={infoOpen} setOpen={setInfoOpen} />
    </>
  );
};

export default Header;
