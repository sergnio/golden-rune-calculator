import classnames from "classnames";
import { InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

type Props = InputHTMLAttributes<HTMLInputElement>;

export const NumberInput = ({ id, className, value, ...rest }: Props) => {
  const isZero = value === 0;

  return (
    <input
      {...rest}
      id={id}
      className={classnames([className, styles.Input])}
      type="number"
      pattern="[0-9]*"
      value={isZero ? "" : `${value}`}
      placeholder="0"
    />
  );
};
