import { ReactNode } from "react";
import Styles from "./styles.module.css";

const ModalWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className={Styles.overlay}>
      <div className={Styles.bottom}>{children}</div>
    </div>
  );
};

export default ModalWrapper;
