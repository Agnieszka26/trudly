import { RoutesPath } from "@/constants";
import { FC } from "react";
import ListElement from "../ListElement/ListElement";
import styles from "./List.module.scss";

interface ListProps {}

const listElementData = [
  {
    link: RoutesPath.HOW_DOES_IT_WORK,
    text: "jak to dziala",
  },
  {
    link: RoutesPath.NECESSITOUS,
    text: "potrzebujący",
  },
  {
    link: RoutesPath.COUPONS,
    text: "kupony",
  },
];

const List: FC<ListProps> = () => {
  return (
    <ul className={styles.list}>
      {listElementData.map(({ link, text }, index) => (
        <ListElement key={`${text}-${index}`} link={link} text={text} />
      ))}
    </ul>
  );
};
interface Props {
  locale: string;
}

export default List;
