import { useFormContext } from "@/hooks/context/useFormContext";
import { useSubmitInsurance } from "./API/POST/useSubmitInsurance";

export const useHandleFormActions = () => {
  const { formData, setFormData } = useFormContext();
  const { loading, submitInsurance } = useSubmitInsurance();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    submitInsurance(formData);
  };

  return { formData, handleChange, handleSubmit, submitLoading: loading };
};
