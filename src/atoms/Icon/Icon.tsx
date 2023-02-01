import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import styles from "./Icon.module.scss";

interface ButtonProps {
  icon: StaticImageData;
  description: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ icon, description, onClick }) => {
  return (
    <Image
      className={styles.icon}
      src={icon}
      alt={description}
      onClick={onClick}
    />
  );
};

export default Button;
