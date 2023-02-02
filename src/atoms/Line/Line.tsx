import cn from "classnames";
import { FC } from "react";
import styles from "./Line.module.scss";

interface LineProps {
  long?: "long";
}

const Line: FC<LineProps> = ({ long }) => {
  return <div className={cn(styles.line, styles[`long-${long}`])}></div>;
};

export default Line;
