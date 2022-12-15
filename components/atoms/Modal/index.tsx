import { Dispatch, SetStateAction } from "react";
import Button from "@/components/atoms/Button";
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
          <Button
            className={styles.CloseButton}
            onClick={() => setOpen(false)}
            size="small"
          >
            Close
          </Button>
        </div>
        <>{children}</>
      </div>
    </div>
  );
};

export default Modal;
