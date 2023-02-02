import Paragraph from "@/typography/Paragraph/Paragraph";
import Title from "@/typography/Titile/Title";
import cn from "classnames";
import { FC, ReactNode } from "react";
import styles from "./Section.module.scss";
interface SectionProps {
  title: string;
  paragraph: string;
  content: ReactNode;
  backgroundColor?: "white";
}

const Section1: FC<SectionProps> = ({
  title,
  paragraph,
  content,
  backgroundColor,
}) => {
  return (
    <section
      className={cn(
        styles.section,
        styles[`backgroundColor-${backgroundColor}`]
      )}
    >
      <Paragraph text={paragraph} />
      <Title text={title} />
      {content}
    </section>
  );
};

export default Section1;
