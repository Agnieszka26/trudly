import Image from "next/image";
import finansowanie from "../../assets/images/Stopka/finansowania.png";

import Line from "@/atoms/Line/Line";
import { FC } from "react";
import FooterColumnContainer from "../FooterColumnContainer/FooterColumnContainer";
import SocialAndLogoContainer from "../SocialAndLogoContainer/SocialAndLogoContainer";
import styles from "./Footer.module.scss";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBox}>
        <SocialAndLogoContainer />
        <FooterColumnContainer />
      </div>
      <Line />
      <div className={styles.finansowanieBox}>
        <Image src={finansowanie} alt="finansowanie" />
      </div>
    </footer>
  );
};

export default Footer;
