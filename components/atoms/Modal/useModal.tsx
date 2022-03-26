import { useState } from "react";

export default () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleModal = () => {
    setOpen(!open);
  };

  return { open, toggleModal };
};
