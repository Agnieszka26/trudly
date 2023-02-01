import cn from "classnames";
import { FC } from "react";
import styles from "./Headline.module.scss";

interface IHeadline {
  color?: "blue";
  text: string;
  secondPartText?: string;
}

const Headline: FC<IHeadline> = ({ color, text, secondPartText }) => {
  return (
    <h1>
      <span className={cn(styles.base, styles[`hasColor-${color}`])}>
        {text}
      </span>
      <span className={cn(styles.base)}> {secondPartText}</span>
    </h1>
  );
};
export default Headline;
