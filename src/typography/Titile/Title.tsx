import cn from "classnames";
import { FC } from "react";
import styles from "./Title.module.scss";

interface ITitle {
  color?: "blue";
  text: string;
}

const Title: FC<ITitle> = ({ color, text }) => {
  return (
    <p>
      <span className={cn(styles.p, styles[`hasColor-${color}`])}>{text}</span>
    </p>
  );
};
export default Title;
