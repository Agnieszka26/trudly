import Paragraph from "@/typography/Paragraph/Paragraph";
import TitleCard from "@/typography/TitileCard/TitleCard";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import Hashtag from "../Hashtag/Hashtag";
import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "./HistoryCard.module.scss";

interface HistoryCardProps {
  title: string;
  text: string;
  photo: StaticImageData;
  href: string;
  hashtags: string[];
  goalNumber: string;
  actualNumber: string;
}

const HistoryCard: FC<HistoryCardProps> = ({
  title,
  text,
  href,
  photo,
  hashtags,
  goalNumber,
  actualNumber,
}) => {
  return (
    <div className={styles.historyCard}>
      <div className={styles.imageContainer}>
        <Image src={photo} alt="photo" />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.hashtagsContainer}>
          {hashtags.map((x) => (
            <Hashtag text={x} key={x} />
          ))}
        </div>
        <TitleCard text={title} color="blue" />
        <Paragraph text={text} card="historyCard" />
        <ProgressBar completed={50} />
        <div className={styles.numberContainer}>
          <Paragraph text={actualNumber + " zł"} />
          <Paragraph text={"z " + goalNumber + " zł"} color="blue" />
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
