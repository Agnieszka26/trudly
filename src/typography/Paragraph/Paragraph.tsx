import cn from "classnames";
import { FC } from "react";
import styles from "./Paragraph.module.scss";

interface IParagraph {
  color?: "blue";
  onHero?: "onHero";
  card?: "trustCard" | "historyCard";
  text: string;
  align?: "center";
}

const Paragraph: FC<IParagraph> = ({ color, text, onHero, card, align }) => {
  return (
    <p
      className={cn(
        styles.p,
        styles[`onHero-${onHero}`],
        styles[`card-${card}`],
        styles[`color-${color}`],
        styles[`align-${align}`]
      )}
    >
      {text}
    </p>
  );
};
export default Paragraph;
