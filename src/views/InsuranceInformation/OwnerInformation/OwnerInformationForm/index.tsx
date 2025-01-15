"use client";
import CustomInput from "@/components/ui/CustomInput";
import { useHandleFormActions } from "@/hooks/useHandleFormActions";
import Styles from "./styles.module.css";

const OwnerInformationForm = () => {
  const { formData, handleChange, handleSubmit } = useHandleFormActions();

  return (
    <form onSubmit={handleSubmit}>
      <h3 className={Styles.heading}>
        لطفا اطلاعات شخصی مالک خودرو را وارد کنید:
      </h3>

      <div>
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
    </form>
  );
};

export default OwnerInformationForm;
