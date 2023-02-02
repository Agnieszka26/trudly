import cn from "classnames";
import { FC } from "react";
import styles from "./TitleCard.module.scss";

interface ITitleCard {
  color?: "blue";
  bigger?: boolean;
  text: string;
  footer?: "footer";
}

const TitleCard: FC<ITitleCard> = ({ color, text, bigger, footer }) => {
  return (
    <p>
      <span
        className={cn(
          styles.p,
          styles[`hasColor-${color}`],
          styles[`bigger-${bigger}`],
          styles[`footer-${footer}`]
        )}
      >
        {text}
      </span>
    </p>
  );
};
export default TitleCard;
