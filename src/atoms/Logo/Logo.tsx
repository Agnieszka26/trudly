import { RoutesPath } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import logo from "../../assets/icons/menu_logo.png";

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return (
    <Link href={RoutesPath.HOME}>
      <Image src={logo} alt={"logo"} />
    </Link>
  );
};

export default Logo;
