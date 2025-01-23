import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import classnames from "classnames";
import styles from "./styles.module.scss";

type Props = {
  children: ReactNode;
  id?: string;
  size?: "small";
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = ({ children, id, size, className, ...rest }: Props) => {
  return (
    <button
      className={classnames([styles.Button, className])}
      data-button={id}
      data-size={size}
      {...rest}
    >
      {children}
    </button>
  );
};
