import Button from "@/atoms/Button/Button";
import Headline from "@/typography/Headline/Headline";
import Paragraph from "@/typography/Paragraph/Paragraph";
import Image from "next/image";
import { FC } from "react";
import S1_grafika from "../../assets/images/S1_grafika.jpg";
import IconContainer from "../Icons/IconsContainer";
import styles from "./Hero.module.scss";
interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <section>
      <div className={styles.hero}>
        <div className={styles.containerLeft}>
          <Headline
            color="blue"
            text={"Pomagaj"}
            secondPartText={" potrzebującym wraz z firmami lokalnymi"}
          />
          <Paragraph
            onHero="onHero"
            text="Platforma Crowdfundingowa łącząca przedsiębiorców, lokalną społeczność oraz potrzebujących."
          />
          <Button text={"Dołącz do Trudly"} color={"blue"} />
        </div>
        <div className={styles.containerRight}>
          <Image src={S1_grafika} alt="grafika" />
        </div>
      </div>
      <Paragraph text="Zaufało nam ponad 100 000 osób oraz 2 948 firm" />
      <IconContainer />
    </section>
  );
};

export default Hero;
