import Image from "next/image";
import { FC } from "react";
import { iconContent } from "./icons";
import styles from "./IconsContainer.module.scss";

interface IconContainerProps {}

const IconContainer: FC<IconContainerProps> = () => {
  return (
    <div className={styles.iconsContainer}>
      {iconContent.map(({ icon, alt }) => (
        <Image src={icon} alt={alt} key={alt} width={100} />
      ))}
    </div>
  );
};

export default IconContainer;
