import { useFormContext } from "@/hooks/useFormContext";

export const useHandleFormActions = () => {
  const { formData, setFormData } = useFormContext();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return { formData, handleChange, handleSubmit };
};
