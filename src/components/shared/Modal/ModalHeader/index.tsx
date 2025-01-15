"use client";

import { CloseIcon } from "@/utils/icons";
import Styles from "./styles.module.css";
import { useRouter } from "next/navigation";

const ModalHeader = ({ title }: { title: string }) => {
  const router = useRouter();

  const closeModal = () => {
    router.push("/", { scroll: false });
  };

  return (
    <header className={Styles.header}>
      <h3 className={Styles.title}>{title}</h3>

      <div className={Styles.close} onClick={closeModal}>
        <CloseIcon />
      </div>
    </header>
  );
};

export default ModalHeader;
