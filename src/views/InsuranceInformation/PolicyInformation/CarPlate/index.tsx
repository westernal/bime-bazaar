import { IranFlagIcon } from "@/utils/icons";
import Styles from "./styles.module.css";
import { CarPlate as CarPlateProps } from "@/interfaces/Car";

const CarPlate = ({ mainCode, cityCode }: CarPlateProps) => {
  return (
    <div className={Styles.plate}>
      <div className={Styles.cityCode}>
        <span className={Styles.code}>{cityCode}</span>
      </div>

      <div className={Styles.mainCode}>
        {mainCode.map((item, index) => (
          <span className={Styles.code} key={index}>
            {item}
          </span>
        ))}
      </div>

      <div className={Styles.country}>
        <IranFlagIcon />
        <span className={Styles.countryCode}>I.R.</span>
      </div>
    </div>
  );
};

export default CarPlate;
