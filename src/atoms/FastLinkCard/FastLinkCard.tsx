import Paragraph from "@/typography/Paragraph/Paragraph";
import TitleCard from "@/typography/TitileCard/TitleCard";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "./FastLinkCard.module.scss";

interface FastLinkCardProps {
  title: string;
  text: string;
  icon: StaticImageData;
  href: string;
}

const FastLinkCard: FC<FastLinkCardProps> = ({ title, text, href, icon }) => {
  return (
    <Link href={href}>
      <div className={styles.fastLinkCard}>
        <div className={styles.leftContainer}>
          <Image src={icon} alt="icon" height={50} width={50} />
        </div>
        <div className={styles.rightContainer}>
          <TitleCard text={title} color="blue" />
          <Paragraph text={text} />
        </div>
      </div>
    </Link>
  );
};

export default FastLinkCard;
