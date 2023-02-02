import Paragraph from "@/typography/Paragraph/Paragraph";
import TitleCard from "@/typography/TitileCard/TitleCard";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "./MediaCard.module.scss";

interface MediaCardProps {
  title: string;
  text: string;
  icon: StaticImageData;
  href: string;
  description: string;
}

const MediaCard: FC<MediaCardProps> = ({
  title,
  description,
  text,
  href,
  icon,
}) => {
  return (
    <div className={styles.mediaCard}>
      <div className={styles.box}>
        <div className={styles.imageContainer}>
          <Image src={icon} alt="icon" />
        </div>
        <div className={styles.text}>
          <TitleCard bigger text={title} />
          <Paragraph text={text} />
        </div>
      </div>
      <Paragraph text={description} />

      <Link className={styles.link} href={href}>
        czytaj więcej
      </Link>
    </div>
  );
};

export default MediaCard;
