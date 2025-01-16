"use client";

import CustomButton from "@/components/ui/CustomButton";
import ModalFooter from "../../ModalFooter";
import ModalWrapper from "../../ModalWrapper";
import { useRouter } from "next/navigation";
import Styles from "./styles.module.css";
import { useSubmitInsurance } from "@/hooks/API/POST/useSubmitInsurance";
import { useFormContext } from "@/hooks/context/useFormContext";
import Spinner from "@/components/ui/Spinner";

const SubmitError = () => {
  const router = useRouter();
  const { submitInsurance, loading } = useSubmitInsurance();
  const { formData } = useFormContext();

  return (
    <ModalWrapper>
      <>
        <div className={Styles.textWrapper}>
          <h4 className={Styles.question}>
            متاسفانه در ثبت اطلاعات شما، خطایی رخ داده است.
          </h4>

          <h4 className={Styles.question}>مجددا، تلاش کنید.</h4>
        </div>

        <ModalFooter>
          <CustomButton
            onClick={() => submitInsurance(formData)}
            style={{ width: "100%" }}
            isLoading={loading}
          >
            {loading && <Spinner />}
            <p> تلاش مجدد</p>
          </CustomButton>

          <CustomButton
            onClick={() => router.replace("/", { scroll: false })}
            style={{ width: "100%" }}
            variant="secondary"
            disabled={loading}
          >
            بازگشت
          </CustomButton>
        </ModalFooter>
      </>
    </ModalWrapper>
  );
};

export default SubmitError;
