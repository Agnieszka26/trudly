import List from "@/atoms/List/List";
import { FC } from "react";
import styles from "./Navbar.module.scss";
interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <nav className={styles.navbar}>
      <List />
    </nav>
  );
};

export default Navbar;
