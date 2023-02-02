import Paragraph from "@/typography/Paragraph/Paragraph";
import TitleCard from "@/typography/TitileCard/TitleCard";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "./TrustCard.module.scss";

interface TrustCardProps {
  title: string;
  text: string;
  icon: StaticImageData;
  href: string;
}

const TrustCard: FC<TrustCardProps> = ({ title, text, href, icon }) => {
  return (
    <div className={styles.trustCard}>
      <div className={styles.text}>
        <TitleCard bigger text={title} color="blue" />
        <Paragraph card="trustCard" text={text} />
      </div>

      <Link className={styles.link} href={href}>
        czytaj więcej →
      </Link>
      <div className={styles.imageContainer}>
        <Image src={icon} alt="icon" />
      </div>
    </div>
  );
};

export default TrustCard;
