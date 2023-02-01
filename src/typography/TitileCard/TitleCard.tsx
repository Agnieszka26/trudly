import cn from "classnames";
import { FC } from "react";
import styles from "./TitleCard.module.scss";

interface ITitleCard {
  color?: "blue";
  text: string;
}

const TitleCard: FC<ITitleCard> = ({ color, text }) => {
  return (
    <p>
      <span className={cn(styles.p, styles[`hasColor-${color}`])}>{text}</span>
    </p>
  );
};
export default TitleCard;
