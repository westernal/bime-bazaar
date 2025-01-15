import { SuccessIcon } from "@/utils/icons";
import Styles from "./styles.module.css";

const SuccessMessage = () => {
  return (
    <div className={Styles.success}>
      <SuccessIcon />

      <p className={Styles.text}>
        ثبت اطلاعات شما، با <span className={Styles.sucessText}>موفقیت </span>
        انجام شد.
      </p>
    </div>
  );
};

export default SuccessMessage;
