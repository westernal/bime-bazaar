import { CloseIcon } from "@/utils/icons";
import Styles from "./styles.module.css";
import CustomInput from "@/components/ui/CustomInput";
import { OrderAddress } from "@/interfaces/Order";
import { ChangeEvent } from "react";

interface AddressItemProps {
  address: OrderAddress;
  onDelete: (id: string) => void;
  onChange: (id: string) => void;
  selectedValue: string | undefined;
}

const AddressItem = ({
  address,
  onDelete,
  onChange,
  selectedValue,
}: AddressItemProps) => {
  return (
    <li className={Styles.item}>
      <CustomInput
        name={"address"}
        value={address.id}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        type="radio"
        checked={selectedValue === address.id}
        errorDisabled
      />

      <div className={Styles.info}>
        <label className={Styles.label} htmlFor={address.id}>
          {address.name}
        </label>

        <p className={Styles.text}>{address.details}</p>
      </div>

      <button className={Styles.close} onClick={() => onDelete(address.id)}>
        <CloseIcon size={10} color="#FFA5A5" />
      </button>
    </li>
  );
};

export default AddressItem;
