import { FC } from "react";
import styles from "./Section1.module.scss";
interface Section1Props {}

const Section1: FC<Section1Props> = () => {
  return <section className={styles.Section1}>Section 1</section>;
};

export default Section1;
