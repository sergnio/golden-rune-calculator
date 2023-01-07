import { Dispatch, SetStateAction } from "react";
import Modal from "components/atoms//Modal";
import styles from "./styles.module.scss";
import Button from "../Button";
import { MdEdit, MdOutlineChecklistRtl } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const InfoOverlay: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <Modal open={open} setOpen={setOpen} title="Instructions">
      <p>
        This calculator will let you count how many runes you need to consume to
        reach the next level. It can help you consume the optimal number so you
        don&rsquo;t have too many left over.
      </p>
      <ol>
        <li>
          Open the{" "}
          <Button disabled={true} className={styles.Button} size="small">
            <MdEdit />
          </Button>{" "}
          overlay and enter the number of runes you have and need and hit
          submit.
        </li>
        <li>
          Start entering the runes you have in your inventory until the
          &ldquo;Needed:&rdquo; is positive and green.
        </li>
        <li>
          Open the{" "}
          <Button disabled={true} className={styles.Button} size="small">
            <MdOutlineChecklistRtl />
          </Button>{" "}
          overlay to see which of your runes to consume.
        </li>
        <li>
          Click{" "}
          <Button
            id="reset"
            disabled={true}
            className={styles.Button}
            size="small"
          >
            <GrPowerReset />
          </Button>{" "}
          to reset everything and start over.
        </li>
      </ol>
    </Modal>
  );
};

export default InfoOverlay;
