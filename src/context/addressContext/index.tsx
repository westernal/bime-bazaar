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
}

export const AddressContext = createContext<AddressContextType | undefined>(
  undefined
);

export const AddressProvider = ({ children }: { children: ReactNode }) => {
  const [addresses, setAddresses] = useState<OrderAddress[]>([]);
  const [deletingAddress, setDeletingAddress] = useState<OrderAddress>();

  return (
    <AddressContext.Provider
      value={{
        addresses,
        setAddresses,
        deletingAddress,
        setDeletingAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};
