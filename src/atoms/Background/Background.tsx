import cn from "classnames";
import { FC } from "react";
import styles from "./Background.module.scss";

interface BackgroundProps {
  color: "red" | "blue";
  order?: "first" | "second" | "third" | "fourth";
}

const Background: FC<BackgroundProps> = ({ color, order }) => {
  return (
    <div
      className={cn(
        styles.background,
        styles[`color-${color}`],
        styles[`order-${order}`]
      )}
    ></div>
  );
};

export default Background;
