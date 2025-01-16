"use client";

import AddressItem from "./AddressItem";
import Styles from "./styles.module.css";
import { useHandleAddresses } from "@/hooks/useHandleAddresses";

const AddressList = ({
  selectedId,
  setSelectedId,
}: {
  selectedId: string | undefined;
  setSelectedId: (id: string) => void;
}) => {
  const { addresses, loading, openDeleteModal } = useHandleAddresses();

  return (
    <ul className={Styles.list}>
      {loading && "Loading..."}
      {addresses.map((address) => (
        <AddressItem
          address={address}
          key={address.id}
          selectedValue={selectedId}
          onChange={setSelectedId}
          onDelete={openDeleteModal}
        />
      ))}
    </ul>
  );
};

export default AddressList;
