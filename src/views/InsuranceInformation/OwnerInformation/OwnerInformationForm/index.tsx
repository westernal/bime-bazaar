"use client";
import CustomInput from "@/components/ui/CustomInput";
import { useHandleFormActions } from "@/hooks/useHandleFormActions";
import Styles from "./styles.module.css";
import CustomButton from "@/components/ui/CustomButton";

const OwnerInformationForm = () => {
  const { formData, handleChange, handleSubmit } = useHandleFormActions();

  return (
    <form className={Styles.form} onSubmit={handleSubmit}>
      <div className={Styles.wrapper}>
        <h3 className={Styles.heading}>
          لطفا اطلاعات شخصی مالک خودرو را وارد کنید:
        </h3>

        <CustomInput
          onChange={handleChange}
          value={formData.nationalId}
          placeholder="کد ملی"
          type="number"
          name="nationalId"
        />

        <CustomInput
          onChange={handleChange}
          value={formData.phoneNumber}
          placeholder="شماره تلفن همراه"
          type="number"
          name="phoneNumber"
        />
      </div>

      <div className={Styles.wrapper}>
        <h3 className={Styles.heading}>آدرس جهت درج روی بیمه نامه </h3>

        <p className={Styles.text}>
          لطفا آدرسی را که می‌خواهید روی بیمه‌نامه درج شود، وارد کنید.
        </p>

        <CustomButton variant="tertiary" type="button" onClick={() => {}}>
          انتخاب از آدرس‌های من
        </CustomButton>
      </div>

      <div className={Styles.buttonWrapper}>
        <CustomButton
          variant="primary"
          type="button"
          disabled
          onClick={() => {}}
        >
          تایید و ادامه
        </CustomButton>
      </div>
    </form>
  );
};

export default OwnerInformationForm;
