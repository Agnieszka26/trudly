import TrustCard from "@/atoms/TrustCard/TrustCard";
import { FC } from "react";
import styles from "./TrustCardContainer.module.scss";
import { trustContent } from "./trustCardContent";
interface TrustCardContainerProps {}

const TrustCardContainer: FC<TrustCardContainerProps> = ({}) => {
  return (
    <div className={styles.trustCardContainer}>
      {trustContent.map(({ title, text, icon, href }) => (
        <TrustCard
          title={title}
          text={text}
          icon={icon}
          href={href}
          key={title}
        />
      ))}
    </div>
  );
};

export default TrustCardContainer;
