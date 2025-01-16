"use client";

import { OrderAddress } from "@/interfaces/Order";
import React, { createContext, ReactNode, useState } from "react";

interface AddressContextType {
  addresses: OrderAddress[];
  setAddresses: React.Dispatch<React.SetStateAction<OrderAddress[]>>;
  deletingAddress: OrderAddress | undefined;
  setDeletingAddress: React.Dispatch<
    React.SetStateAction<OrderAddress | undefined>
  >;
  selectedId: string;
  setSelectedId: React.Dispatch<React.SetStateAction<string>>;
}

export const AddressContext = createContext<AddressContextType | undefined>(
  undefined
);

export const AddressProvider = ({ children }: { children: ReactNode }) => {
  const [addresses, setAddresses] = useState<OrderAddress[]>([]);
  const [deletingAddress, setDeletingAddress] = useState<OrderAddress>();
  const [selectedId, setSelectedId] = useState<string>("");

  return (
    <AddressContext.Provider
      value={{
        addresses,
        setAddresses,
        deletingAddress,
        setDeletingAddress,
        selectedId,
        setSelectedId,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};
