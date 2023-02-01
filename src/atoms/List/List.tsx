import { RoutesPath } from "@/constants";
import { FC } from "react";
import ListElement from "../ListElement/ListElement";
import styles from "./List.module.scss";

interface ListProps {
  listElementData: { link: RoutesPath; text: string }[];
}

const List: FC<ListProps> = ({ listElementData }) => {
  return (
    <ul className={styles.list}>
      {listElementData.map(({ link, text }, index) => (
        <ListElement key={`${text}-${index}`} link={link} text={text} />
      ))}
    </ul>
  );
};

export default List;
