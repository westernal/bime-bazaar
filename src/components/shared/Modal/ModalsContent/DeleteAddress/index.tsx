/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import CustomButton from "@/components/ui/CustomButton";
import ModalFooter from "../../ModalFooter";
import ModalHeader from "../../ModalHeader";
import ModalWrapper from "../../ModalWrapper";
import { useAddressContext } from "@/hooks/context/useAddressContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Styles from "./styles.module.css";

const DeleteAddress = () => {
  const { deletingAddress, setDeletingAddress, setAddresses } =
    useAddressContext();
  const router = useRouter();

  const RemoveAddress = () => {
    setAddresses((prev) =>
      prev.filter((address) => address.id !== deletingAddress?.id)
    );

    setDeletingAddress(undefined);
    router.replace("/?modal=address", { scroll: false });
  };

  useEffect(() => {
    if (!deletingAddress) {
      router.back();
    }
  }, []);
  return (
    <ModalWrapper>
      <>
        <ModalHeader title="حذف آدرس" />

        <div className={Styles.content}>
          <h4 className={Styles.question}>آیا از حذف آدرس خود، مطمین هستید؟</h4>

          <div className={Styles.addressWrapper}>
            <h5 className={Styles.name}>{deletingAddress?.name}</h5>
            <p className={Styles.address}>{deletingAddress?.details}</p>
          </div>
        </div>

        <ModalFooter>
          <CustomButton onClick={RemoveAddress} style={{ width: "100%" }}>
            تایید
          </CustomButton>

          <CustomButton
            onClick={() => router.back()}
            style={{ width: "100%" }}
            variant="secondary"
          >
            بازگشت
          </CustomButton>
        </ModalFooter>
      </>
    </ModalWrapper>
  );
};

export default DeleteAddress;
