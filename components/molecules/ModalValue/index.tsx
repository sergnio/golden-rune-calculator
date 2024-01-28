import { Dispatch, SetStateAction } from "react";
import Modal from "components/atoms//Modal";
import Form from "components/molecules/Form";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const ModalValue: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <Modal open={open} setOpen={setOpen}>
      <Form setOpen={setOpen} />
    </Modal>
  );
};

export default ModalValue;
