import Headline from "@/typography/Headline/Headline";
import { FC } from "react";
import styles from "./Hero.module.scss";
interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <section className={styles.hero}>
      <Headline
        color="blue"
        text={"Pomagaj"}
        secondPartText={" potrzebującym wraz z firmami lokalnymi"}
      />
    </section>
  );
};

export default Hero;
