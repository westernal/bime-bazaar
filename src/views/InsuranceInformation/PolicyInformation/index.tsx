import CarPlate from "@/views/InsuranceInformation/PolicyInformation/CarPlate";
import SectionHeader from "@/components/shared/SectionHeader";
import { CarInsuranceData } from "@/utils/data";
import Styles from "./styles.module.css";
import CarInfoList from "./CarInfoList";
import SuccessMessage from "./SuccessMessage";

const PolicyInformation = ({ isSuccess }: { isSuccess?: boolean }) => {
  return (
    <section>
      <SectionHeader title="مشخصات بیمه نامه" />

      <div className={Styles.content}>
        {isSuccess && <SuccessMessage />}

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
