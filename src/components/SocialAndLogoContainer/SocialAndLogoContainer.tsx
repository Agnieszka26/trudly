import Logo from "@/atoms/Logo/Logo";
import Paragraph from "@/typography/Paragraph/Paragraph";
import Image from "next/image";
import { FC } from "react";
import icon1 from "../../assets/images/Stopka/1.png";
import icon2 from "../../assets/images/Stopka/2.png";
import icon3 from "../../assets/images/Stopka/3.png";
import styles from "./SocialAndLogoContainer.module.scss";

interface SocialAndLogoContainerProps {}

const SocialAndLogoContainer: FC<SocialAndLogoContainerProps> = () => {
  return (
    <div className={styles.logoContainer}>
      <Logo />
      <Paragraph text="Znajdź nas" align="center" />

      <div className={styles.iconsContainer}>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <Image src={icon1} alt="icon" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <Image src={icon2} alt="icon" />
        </a>
        <a href="https://tictoc.com" target="_blank" rel="noreferrer">
          <Image src={icon3} alt="icon" />
        </a>
      </div>
    </div>
  );
};

export default SocialAndLogoContainer;
