import Background from "@/atoms/Background/Background";
import FastLinks from "@/components/FastLinks/FastLinks";
import Hero from "@/components/Hero/Hero";
import Section1 from "@/components/S1/Section1";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FC } from "react";

const Home: FC = () => {
  return (
    <main>
      <FastLinks />
      <Hero />
      <Background color={"blue"} />
      <Section1 />
      <Background color={"red"} />
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
