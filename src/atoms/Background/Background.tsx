import cn from "classnames";
import { FC } from "react";
import styles from "./Background.module.scss";

interface LogoProps {
  color: "red" | "blue";
}

const Background: FC<LogoProps> = ({ color }) => {
  return (
    <div className={cn(styles.background, styles[`color-${color}`])}></div>
  );
};

export default Background;
