"use client";

import { useGetAddresses } from "@/hooks/API/GET/useGetAddresses";
import AddressItem from "./AddressItem";
import Styles from "./styles.module.css";

const AddressList = () => {
  const { addresses, loading } = useGetAddresses();

  return (
    <ul className={Styles.list}>
      {loading && "Loading..."}
      {addresses.map((address) => (
        <AddressItem
          address={address}
          key={address.id}
          onChange={() => {}}
          onDelete={() => {}}
        />
      ))}
    </ul>
  );
};

export default AddressList;
