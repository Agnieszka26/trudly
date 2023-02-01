import Button from "@/atoms/Button/Button";
import Icon from "@/atoms/Icon/Icon";
import List from "@/atoms/List/List";
import Logo from "@/atoms/Logo/Logo";
import { RoutesPath } from "@/constants";
import { FC } from "react";
import lupa from "../../assets/icons/menu_lupa.png";
import profil from "../../assets/icons/menu_profil.png";
import styles from "./Navbar.module.scss";
interface NavbarProps {}

const navElementData = [
  {
    link: RoutesPath.HOW_DOES_IT_WORK,
    text: "jak to dziala",
  },
  {
    link: RoutesPath.NECESSITOUS,
    text: "potrzebujący",
  },
  {
    link: RoutesPath.COUPONS,
    text: "kupony",
  },
];
const languageSwitchElementData = [
  {
    link: RoutesPath.HOME,
    text: "PL",
  },
  {
    link: RoutesPath.HOME,
    text: "EN",
  },
];
const Navbar: FC<NavbarProps> = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.containerLeft}>
        <Logo />
        <List listElementData={navElementData} />
      </div>
      <div className={styles.containerRight}>
        <List listElementData={languageSwitchElementData} />
        <Button text="zacznij pomagać" color="red" />
        <Icon icon={lupa} description={"szukaj"} />
        <Icon icon={profil} description={"profil"} />
      </div>
    </nav>
  );
};

export default Navbar;
