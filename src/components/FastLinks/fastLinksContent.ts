import { RoutesPath } from "@/constants";
import hand from "../../assets/icons/fastLinksIcons/hand.png";
import hand_coins from "../../assets/icons/fastLinksIcons/hand_coins.png";
import hand_shake from "../../assets/icons/fastLinksIcons/hand_shake.png";
import heart from "../../assets/icons/fastLinksIcons/heart.png";

export const fastLinks = [
  {
    title: "Jestem przedsiębiorcąc",
    text: "chcę pomagać z Trudly",
    icon: hand_shake,
    href: RoutesPath.HOME,
  },
  {
    title: "Jestem pomagającym",
    text: "chcę pomóc innym",
    icon: hand_coins,
    href: RoutesPath.HOME,
  },
  {
    title: "Jestem potrzebującym",
    text: "chcę otrzymać wsparcie",
    icon: hand,
    href: RoutesPath.HOME,
  },
  {
    title: "Jestem Fundacją",
    text: "chcę pomóc podopiecznym",
    icon: heart,
    href: RoutesPath.HOME,
  },
];
