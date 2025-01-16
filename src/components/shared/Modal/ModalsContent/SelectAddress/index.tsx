import CustomButton from "@/components/ui/CustomButton";
import ModalFooter from "../../ModalFooter";
import ModalHeader from "../../ModalHeader";
import ModalWrapper from "../../ModalWrapper";
import AddressList from "./AddressList";

const SelectAddress = () => {
  return (
    <ModalWrapper>
      <>
        <ModalHeader title="انتخاب آدرس" />

        <AddressList />

        <ModalFooter>
          <CustomButton style={{ width: "100%" }} disabled>
            انتخاب
          </CustomButton>
        </ModalFooter>
      </>
    </ModalWrapper>
  );
};

export default SelectAddress;
