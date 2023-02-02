import FastLinkCard from "@/atoms/FastLinkCard/FastLinkCard";
import { FC } from "react";
import styles from "./FastLinks.module.scss";
import { fastLinks } from "./fastLinksContent";

interface IFastLinks {}

const FastLinks: FC<IFastLinks> = () => {
  return (
    <section className={styles.fastLinks}>
      {fastLinks.map(({ icon, text, title, href }) => (
        <FastLinkCard
          title={title}
          text={text}
          icon={icon}
          href={href}
          key={title}
        />
      ))}
    </section>
  );
};
export default FastLinks;
