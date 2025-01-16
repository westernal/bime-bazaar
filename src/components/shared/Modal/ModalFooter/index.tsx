import { ReactNode } from "react";
import Styles from "./styles.module.css";

const ModalFooter = ({ children }: { children: ReactNode }) => {
  return <footer className={Styles.footer}>{children}</footer>;
};

export default ModalFooter;
