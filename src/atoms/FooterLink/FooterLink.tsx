import cn from "classnames";
import Link from "next/link";
import { FC } from "react";
import styles from "./FooterLink.module.scss";

interface IParagraph {
  href: string;
  text: string;
  color?: "blue";
}

const Paragraph: FC<IParagraph> = ({ href, text, color }) => {
  return (
    <Link href={href} className={styles.footerLink}>
      <p className={cn(styles.p, styles[`color-${color}`])}>{text}</p>
    </Link>
  );
};
export default Paragraph;
