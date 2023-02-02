import cn from "classnames";
import { FC } from "react";
import styles from "./Paragraph.module.scss";

interface IParagraph {
  color?: "blue";
  onHero?: "onHero";
  text: string;
}

const Paragraph: FC<IParagraph> = ({ color, text, onHero }) => {
  return (
    <p
      className={cn(
        styles.p,
        styles[`onHero-${onHero}`],
        styles[`color-${color}`]
      )}
    >
      {text}
    </p>
  );
};
export default Paragraph;
