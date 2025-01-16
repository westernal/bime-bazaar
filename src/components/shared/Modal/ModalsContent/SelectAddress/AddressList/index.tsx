import AddressItem from "./AddressItem";
import Styles from "./styles.module.css";

const AddressList = () => {
  const address = {
    id: "s",
    name: "salam",
    details: "sasnd dsadbashdbas",
  };
  return (
    <ul className={Styles.list}>
      <AddressItem address={address} onChange={() => {}} onDelete={() => {}} />
    </ul>
  );
};

export default AddressList;
