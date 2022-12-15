import { Dispatch, SetStateAction } from "react";
import styles from "./styles.module.scss";

type Props = {
  title?: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const Modal: React.FC<Props> = ({ open, setOpen, children, title }) => {
  return (
    <div className={styles.Overlay} data-open={open}>
      <div className={styles.Content}>
        <div className={styles.Header}>
          <div>{title && <h1 className={styles.H1}>{title}</h1>}</div>
          <button className={styles.CloseButton} onClick={() => setOpen(false)}>
            Close
          </button>
        </div>
        <>{children}</>
      </div>
    </div>
  );
};

export default Modal;
