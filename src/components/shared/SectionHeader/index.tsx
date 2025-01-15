import { CarIcon } from "@/utils/icons";
import Styles from "./styles.module.css";

const SectionHeader = ({ title }: { title: string }) => {
  return (
    <header className={Styles.header}>
      <CarIcon /> <h2 className={Styles.title}>{title}</h2>
    </header>
  );
};

export default SectionHeader;
