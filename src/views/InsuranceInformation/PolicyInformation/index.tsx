import CarPlate from "@/views/InsuranceInformation/PolicyInformation/CarPlate";
import SectionHeader from "@/components/shared/SectionHeader";
import { CarInsuranceData } from "@/utils/data";
import Styles from "./styles.module.css";
import CarInfoList from "./CarInfoList";

const PolicyInformation = () => {
  return (
    <section>
      <SectionHeader title="مشخصات بیمه نامه" />

      <div className={Styles.content}>
        <CarPlate
          mainCode={CarInsuranceData.plate.mainCode}
          cityCode={CarInsuranceData.plate.cityCode}
        />

        <CarInfoList
          brand={CarInsuranceData.brand}
          model={CarInsuranceData.model}
          insuranceCompany={CarInsuranceData.insuranceCompany}
        />
      </div>
    </section>
  );
};

export default PolicyInformation;
