import TitleCard from "@/typography/TitileCard/TitleCard";
import { FC } from "react";
import FooterLink from "../FooterLink/FooterLink";
import styles from "./FooterColumn.module.scss";

interface IFooterColumn {
  links: { href: string; text: string }[];
  title: string;
}

const FooterColumn: FC<IFooterColumn> = ({ links, title }) => {
  return (
    <div className={styles.column}>
      <TitleCard text={title} color="blue" footer="footer" />
      {links.map(({ href, text }) => (
        <FooterLink text={text} href={href} key={text} />
      ))}
    </div>
  );
};
export default FooterColumn;
