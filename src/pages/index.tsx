import Background from "@/atoms/Background/Background";
import Line from "@/atoms/Line/Line";
import Video from "@/atoms/Video/Video";
import FastLinks from "@/components/FastLinks/FastLinks";
import Hero from "@/components/Hero/Hero";
import HistoryContainer from "@/components/HistoryContainer/HistoryContainer";
import MediaContainer from "@/components/MediaContainer/MediaContainer";
import Section from "@/components/Section/Section";
import TrustCardContainer from "@/components/TrustCardContainer/TrustCardContainer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FC } from "react";
import backgroundForVideo from "../assets/images/S2_film_vimeo.jpg";

const Home: FC = () => {
  return (
    <main>
      <FastLinks />
      <Hero />
      <Line long="long" />
      <Background color={"blue"} order="first" />
      <Section
        title={"Kim jesteśmy?"}
        paragraph={"Jak To działa"}
        content={
          <Video
            url={"https://www.youtube.com/watch?v=YzoPmyelSzw"}
            backgroundForVideo={backgroundForVideo}
          />
        }
      />
      <Background color={"red"} order={"second"} />
      <Section
        backgroundColor="white"
        title={"Dlaczego Trudly?"}
        paragraph={"Godni zaufania"}
        content={<TrustCardContainer />}
      />
      <Background color={"blue"} order={"third"} />
      <Section
        title={"Co już zrobilismy?"}
        paragraph={"Nasze Historie"}
        content={<HistoryContainer />}
      />
      <Background color={"red"} order={"fourth"} />
      <Section
        title={"Co o nas mówią?"}
        paragraph={"Media o nas"}
        content={<MediaContainer />}
      />
    </main>
  );
};
interface Props {
  locale: string;
}

export const getServerSideProps = async ({ locale }: Props) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
export default Home;
