import { FC } from "react";
import styles from "./Hashtag.module.scss";

interface IParagraph {
  text: string;
}

const Paragraph: FC<IParagraph> = ({ text }) => {
  return <p className={styles.p}> #{text}</p>;
};
export default Paragraph;
