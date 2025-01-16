"use client";

import CustomButton from "@/components/ui/CustomButton";
import ModalFooter from "../../ModalFooter";
import ModalHeader from "../../ModalHeader";
import ModalWrapper from "../../ModalWrapper";
import AddressList from "./AddressList";
import { useState } from "react";
import { useFormContext } from "@/hooks/context/useFormContext";
import { useRouter } from "next/navigation";

const SelectAddress = () => {
  const { setFormData, formData } = useFormContext();
  const [selectedId, setSelectedId] = useState<string>(formData.addressId);
  const router = useRouter();

  const selectAddress = () => {
    setFormData((prev) => ({ ...prev, addressId: selectedId }));

    router.replace("/", { scroll: false });
  };
  return (
    <ModalWrapper>
      <>
        <ModalHeader title="انتخاب آدرس" />

        <AddressList selectedId={selectedId} setSelectedId={setSelectedId} />

        <ModalFooter>
          <CustomButton
            onClick={selectAddress}
            style={{ width: "100%" }}
            disabled={!selectedId}
          >
            انتخاب
          </CustomButton>
        </ModalFooter>
      </>
    </ModalWrapper>
  );
};

export default SelectAddress;
