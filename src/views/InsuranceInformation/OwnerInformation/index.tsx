import SectionHeader from "@/components/shared/SectionHeader";
import Styles from "./styles.module.css";
import { FormProvider } from "@/context/formContext";
import OwnerInformationForm from "./OwnerInformationForm";

const OwnerInformation = () => {
  return (
    <section>
      <SectionHeader title="مشخصات مالک خودرو" />

      <div className={Styles.content}>
        <FormProvider>
          <OwnerInformationForm />
        </FormProvider>
      </div>
    </section>
  );
};

export default OwnerInformation;
