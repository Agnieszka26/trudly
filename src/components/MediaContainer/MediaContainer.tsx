import MediaCard from "@/atoms/MediaCard/MediaCard";
import { FC } from "react";
import styles from "./MediaContainer.module.scss";
import { mediaContent } from "./mediaContent";
interface MediaCardContainerProps {}

const MediaCardContainer: FC<MediaCardContainerProps> = ({}) => {
  return (
    <div className={styles.mediaContainer}>
      {mediaContent.map(({ title, text, icon, href, description }) => (
        <MediaCard
          title={title}
          text={text}
          icon={icon}
          href={href}
          key={title}
          description={description}
        />
      ))}
    </div>
  );
};

export default MediaCardContainer;
