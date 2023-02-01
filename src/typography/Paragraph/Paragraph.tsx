import cn from "classnames";
import { FC } from "react";
import styles from "./Paragraph.module.scss";

interface IParagraph {
  color?: "blue";
  text: string;
}

const Paragraph: FC<IParagraph> = ({ color, text }) => {
  return (
    <p>
      <span className={cn(styles.p, styles[`hasColor-${color}`])}>{text}</span>
    </p>
  );
};
export default Paragraph;
