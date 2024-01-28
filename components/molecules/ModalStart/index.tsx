import { Dispatch, SetStateAction } from "react";
import Form from "components/molecules/Form";
import styles from "./styles.module.scss";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const ModalStart: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <div className={styles.Modal} data-open={open}>
      <div className={styles.Content}>
        <div className={styles.Intro}>
          <h1 className={styles.Title}>
            <span className={styles.Line1}>
              <span className={styles.Big}>G</span>olden Run
              <span className={styles.Big}>e</span>
            </span>
            <span className={styles.Line2}>Calculator</span>
          </h1>
          <p>
            Use this calculator to figure out the minimum&nbsp;number of
            Golden&nbsp;Runes
            <br />
            you need to consume to reach the
            <br />
            number of Runes you need.
          </p>
        </div>
        <Form setOpen={setOpen} />
      </div>
    </div>
  );
};

export default ModalStart;
