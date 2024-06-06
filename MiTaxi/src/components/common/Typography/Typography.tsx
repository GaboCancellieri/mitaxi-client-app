import { FC, ReactNode } from "react";
import styles from "./Typography.module.scss";
import classNames from "classnames";

type TypographyProps = {
  variant:
    | "largeTitle"
    | "title"
    | "smallTitle"
    | "smallerTitle"
    | "subtitle"
    | "text"
    | "darkButtonText"
    | "buttonText"
    | "caption";
  children: ReactNode;
  className?: string;
};

const Typography: FC<TypographyProps> = ({ variant, children, className }) => {
  console.log({ className });
  return (
    <span className={classNames(styles.typography, styles[variant], className)}>
      {children}
    </span>
  );
};

export default Typography;
