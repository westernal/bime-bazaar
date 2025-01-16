import { AddressContext } from "@/context/addressContext";
import { useContext } from "react";

export const useAddressContext = () => {
  const context = useContext(AddressContext);
  if (!context) {
    throw new Error("useAddressContext must be used within a FormProvider");
  }
  return context;
};
