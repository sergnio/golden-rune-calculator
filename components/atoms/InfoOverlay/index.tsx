import { Dispatch, SetStateAction } from "react";
import Modal from "@/components/atoms//Modal";
import styles from "./styles.module.scss";

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
          Open the XX overlay and enter the number of runes you have and need.
        </li>
        <li>Close the overlay</li>
        <li>
          Start entering the runes you have in your inventory until the total
          needed is positive and green.
        </li>
        <li>Open the XX overlay to see which of your runes to consume.</li>
      </ol>
    </Modal>
  );
};

export default InfoOverlay;
