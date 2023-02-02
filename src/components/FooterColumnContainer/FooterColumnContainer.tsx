import FooterColumn from "@/atoms/FooterColumn/FooterColumn";
import { FC } from "react";
import styles from "./FooterColumnContainer.module.scss";
import { linksD, linksP, linksPo, linksT } from "./footerLinks";

interface IFooterColumnContainer {}

const FooterColumnContainer: FC<IFooterColumnContainer> = () => {
  return (
    <div className={styles.columnContainer}>
      <FooterColumn links={linksT} title={"Trudly"} />
      <FooterColumn links={linksP} title={"Pomagający"} />
      <FooterColumn links={linksD} title={"Dla Biznesu"} />
      <FooterColumn links={linksPo} title={"Potrzebujacy"} />
    </div>
  );
};
export default FooterColumnContainer;
