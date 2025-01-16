import CustomButton from "@/components/ui/CustomButton";
import Styles from "./styles.module.css";
import Link from "next/link";

const SuccessFooter = () => {
  return (
    <footer className={Styles.footer}>
      <Link href={"/"}>
        <CustomButton id="back-button" variant="primary">
          بازگشت
        </CustomButton>
      </Link>
    </footer>
  );
};

export default SuccessFooter;
