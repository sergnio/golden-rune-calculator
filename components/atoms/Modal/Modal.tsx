import styles from "./Modal.module.css";
import { useState } from "react";

export default () => {
  const [open, setOpen] = useState<boolean>(true);
  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);

  return (
    <>
      <button id="myBtn" onClick={openModal}>
        Open Modal
      </button>

      <div
        id="myModal"
        className={`${styles.modal} ${open ? styles.visible : styles.hidden}`}
      >
        <div className={styles.modalContent}>
          <span className={styles.close} onClick={closeModal}>
            &times;
          </span>
          <p>Some text in the Modal..</p>
          <button onClick={closeModal} className={styles.closeButton}>
            Close
          </button>
        </div>
      </div>
    </>
  );
};
