import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FC } from "react";

const Home: FC = () => {
  return <>my home</>;
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
