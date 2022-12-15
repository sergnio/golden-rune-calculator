import classnames from "classnames";
import { ChangeEventHandler } from "react";
import styles from "./styles.module.scss";

interface Props {
  id?: string;
  className: string;
  value: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export default ({ id, className, value, onChange }: Props) => {
  const isZero = value === 0;
  return (
    <input
      id={id}
      className={classnames([className, styles.Input])}
      type="number"
      onChange={onChange}
      value={isZero ? "" : `${value}`}
      placeholder="0"
    />
  );
};
