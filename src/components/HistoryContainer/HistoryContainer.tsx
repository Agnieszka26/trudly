import FooterLink from "@/atoms/FooterLink/FooterLink";
import HistoryCard from "@/atoms/HistoryCard/HistoryCard";
import { FC } from "react";
import styles from "./HistoryContainer.module.scss";
import { historyContent } from "./historyContent";
interface HistoryContainerProps {}

const HistoryContainer: FC<HistoryContainerProps> = ({}) => {
  return (
    <div className={styles.historyBox}>
      <div className={styles.historyContainer}>
        {historyContent.map(
          ({
            hashtags,
            title,
            text,
            photo,
            href,
            actualNumber,
            goalNumber,
          }) => (
            <HistoryCard
              hashtags={hashtags}
              title={title}
              text={text}
              photo={photo}
              href={href}
              key={title}
              actualNumber={actualNumber}
              goalNumber={goalNumber}
            />
          )
        )}
      </div>
      <FooterLink text="zobacz więcej" href="" color="blue" />
    </div>
  );
};

export default HistoryContainer;
