"use client";

import AddressItem from "./AddressItem";
import Styles from "./styles.module.css";
import { useHandleAddresses } from "@/hooks/useHandleAddresses";

const AddressList = () => {
  const { addresses, loading, openDeleteModal } = useHandleAddresses();

  return (
    <ul className={Styles.list}>
      {loading && "Loading..."}
      {addresses.map((address) => (
        <AddressItem
          address={address}
          key={address.id}
          onChange={() => {}}
          onDelete={openDeleteModal}
        />
      ))}
    </ul>
  );
};

export default AddressList;
