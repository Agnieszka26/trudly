import Video from "@/atoms/Video/Video";
import Paragraph from "@/typography/Paragraph/Paragraph";
import Title from "@/typography/Titile/Title";
import { FC } from "react";
import backgroundForVideo from "../../assets/images/S2_film_vimeo.jpg";
import styles from "./Section1.module.scss";
interface Section1Props {}

const Section1: FC<Section1Props> = () => {
  return (
    <section className={styles.section1}>
      <Paragraph text={"Kim jesteśmy?"} />
      <Title text={"Jak To działa"} />
      <Video
        url={"https://www.youtube.com/watch?v=YzoPmyelSzw"}
        backgroundForVideo={backgroundForVideo}
      />
    </section>
  );
};

export default Section1;
