import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface ButtonProps {
  icon: StaticImageData;
  description: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ icon, description, onClick }) => {
  return <Image src={icon} alt={description} onClick={onClick} />;
};

export default Button;
