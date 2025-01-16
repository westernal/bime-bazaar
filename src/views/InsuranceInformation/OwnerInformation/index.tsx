import SectionHeader from "@/components/shared/SectionHeader";
import Styles from "./styles.module.css";
import OwnerInformationForm from "./OwnerInformationForm";

const OwnerInformation = () => {
  return (
    <section>
      <SectionHeader title="مشخصات مالک خودرو" />

      <div className={Styles.content}>
        <OwnerInformationForm />
      </div>
    </section>
  );
};

export default OwnerInformation;
