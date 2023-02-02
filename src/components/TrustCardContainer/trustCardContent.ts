import { RoutesPath } from "@/constants";
import diament from "../../assets/icons/diament.png";
import klodka from "../../assets/icons/klodka.png";
import serce from "../../assets/icons/serce.png";

export const trustContent = [
  {
    title: "Bezpieczeństwo",
    text: "•  Współpraca z zarejestrowanymi fundacjami \n•  Weryfikacja firm \n•  Dbamy o dane ",
    icon: klodka,
    href: RoutesPath.HOME,
  },
  {
    title: "Przejrzystość",
    text: "•  Żadnych ukrytych opłat, płatnych reklam i usług premium. \n•  Potrzebujący otrzyma 100% przekazanej kwoty.",
    icon: diament,
    href: RoutesPath.HOME,
  },
  {
    title: "Zaufali nam",
    text: "•  Zaufało nam już wiele użytkowników, między innymi Robert Lewandowski i Paulina Karpowicz.\n•  Współpracujemy ze znanymi markami i fundacjami",
    icon: serce,
    href: RoutesPath.HOME,
  },
];
